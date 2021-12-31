import { useCallback, useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import filesize from "filesize";
import Upload from "../components/Upload";
import FileList from "../components/FileList";
import { FileProps } from "../components/FileList/FileList";
import ImagesList, { Image } from "../components/ImagesList/ImagesList";
import api, { baseURL } from "../services/api";

type HomeProps = {
  images: Image[];
};

const HomePage = ({ images }: HomeProps) => {
  const [actualImages, setActualImages] = useState<Image[]>(images.reverse());
  const [uploadedFiles, setUploadedFiles] = useState<FileProps[]>([]);

  const handleUpdateState = (id: string, data) => {
    setUploadedFiles((actualFiles) =>
      actualFiles.map((file) => (file.id === id ? { ...file, ...data } : file))
    );
  };

  const handleRequest = async (file: FileProps) => {
    const data = new FormData();

    data.append("upload", file.file, file.name);

    try {
      const { data: response } = await api.post("upload", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (e: { loaded: number; total: number }) => {
          const progress = Math.round((e.loaded * 100) / e.total);
          handleUpdateState(file.id, {
            progress,
          });
        },
      });
      setUploadedFiles((upFiles) => upFiles.filter(({ id }) => id !== file.id));
      setActualImages((images) => [
        {
          id: response.id,
          name: response.name,
          status: response.status,
          size: file.size,
        },
        ...images,
      ]);
    } catch (err) {
      const { error } = err.response.data;
      alert(error);
      setUploadedFiles((upFiles) => upFiles.filter(({ id }) => id !== file.id));
      setActualImages((images) => [
        {
          id: file.id,
          name: file.name,
          status: "failed",
          size: file.size,
        },
        ...images,
      ]);
    }
  };

  const handleUpload = (files: File[]) => {
    const upFiles: FileProps[] = files.map((file, index) => ({
      file,
      id: `${index}-${file.name}-${Date.now()}`,
      name: file.name,
      size: file.size,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      errror: false,
      url: undefined,
    }));
    setUploadedFiles((actualFiles) => [...actualFiles, ...upFiles]);

    upFiles.forEach(handleRequest);
  };

  const MessageCallback = useCallback((event) => {
    const data = JSON.parse(event.data);
    setUploadedFiles([]);
    setActualImages(data?.images?.reverse() || []);
  }, []);

  const handleConnect = useCallback(() => {
    const channel = new EventSource(`${baseURL}/images/sse`);
    channel.onmessage = MessageCallback;
  }, [MessageCallback]);

  useEffect(() => {
    handleConnect();
  }, [handleConnect]);

  return (
    <main>
      <section>
        <p>No momento aceitamos apenas imagens JPG/JPEG/JFIF</p>
        <Upload onUpload={handleUpload} />
        {!!uploadedFiles.length && <FileList files={uploadedFiles} />}
      </section>
      <section>
        <ImagesList images={actualImages} />
      </section>
    </main>
  );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = await api.get<{ images: Image[] }>("/images");
  return {
    props: {
      images: data?.images || [],
    },
  };
};
