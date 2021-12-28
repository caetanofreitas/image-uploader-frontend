import filesize from "filesize";
import * as S from "./ImageList.styles";

export type Image = {
  id: string;
  name: string;
  status: keyof typeof S.StatusColors;
  size: number;
  extension?: string;
  url?: string;
};

type ImageListProps = {
  images: Image[];
};

const ImagesList = ({ images }: ImageListProps) => (
  <section>
    <S.Title>Imagens Online: </S.Title>
    {images.length > 0 ? (
      <S.List>
        {images.map((image) => (
          <S.ListItem key={image.id}>
            <S.PreviewWrapper>
              {image.status === "uploaded" && <S.Preview src={image.url} />}
              {image.status !== "uploaded" && (
                <S.StatusIndicator status={image.status} />
              )}
            </S.PreviewWrapper>
            <div>
              <strong>{image.name}</strong>
              <span>{filesize(image.size || 0)}</span>
            </div>
          </S.ListItem>
        ))}
      </S.List>
    ) : (
      <p>Nenhuma imagem listada!</p>
    )}
  </section>
);

export default ImagesList;
