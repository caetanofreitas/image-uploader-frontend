import * as S from "./FileList.styles";

export type FileProps = {
  file: File;
  id: string;
  name: string;
  readableSize: string;
  preview: string;
  progress: number;
  uploaded: boolean;
  errror: boolean;
  size: number;
  url?: string;
};

type FileListProps = {
  files: FileProps[];
};

const FileList = ({ files }: FileListProps) => (
  <section>
    <S.PreUpTitle>Pre-Upload:</S.PreUpTitle>
    <S.Container>
      {files.map((file) => (
        <S.File key={file.id}>
          <div>
            <S.Preview src={file.preview} alt={file.name} />
            <div>
              <strong>{file.name}</strong>
              <span>{file.readableSize}</span>
            </div>
          </div>
          <div>
            <S.ProgressBar progress={file.progress}>
              <span />
            </S.ProgressBar>
          </div>
        </S.File>
      ))}
    </S.Container>
  </section>
);

export default FileList;
