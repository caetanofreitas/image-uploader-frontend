import { useDropzone } from "react-dropzone";
import * as S from "./Upload.styles";

const RenderMessage = {
  default: "Arraste uma imagem ou clique aqui!",
  rejected: "Arquivo não suportado",
  active: "Solte a image",
};

type UploadProps = {
  onUpload: (files: File[]) => void;
};

const Upload = ({ onUpload }: UploadProps) => {
  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      accept: "image/*",
      onDropAccepted: onUpload,
    });

  const renderMessage = (active: boolean, rejected: boolean) => {
    if (!active)
      return <S.UploadMessage>{RenderMessage.default}</S.UploadMessage>;

    if (rejected)
      return <S.UploadMessage>{RenderMessage.rejected}</S.UploadMessage>;

    if (active)
      return <S.UploadMessage>{RenderMessage.active}</S.UploadMessage>;
  };
  return (
    <S.DropContainer
      {...getRootProps()}
      isDragActive={isDragActive}
      isDragReject={isDragReject}
    >
      <input type="file" {...getInputProps()} />
      {renderMessage(isDragActive, isDragReject)}
    </S.DropContainer>
  );
};

export default Upload;
