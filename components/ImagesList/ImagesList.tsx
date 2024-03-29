import filesize from "filesize";
import Image from "next/image";
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
            <S.ImageInfo>
              <S.PreviewWrapper>
                {image.status === "uploaded" && (
                  <S.Preview
                    src={image.url.replace(process.env.NEXT_PUBLIC_S3_HOST, "")}
                  />
                )}
                {image.status !== "uploaded" && (
                  <S.StatusIndicator status={image.status}>
                    <Image
                      src={`/assets/${image.status}.svg`}
                      alt="Upload Status"
                      layout="fill"
                      loader={({ src, width, quality }) =>
                        `${src}?w=${width}&q=${quality || 75}`
                      }
                    />
                  </S.StatusIndicator>
                )}
              </S.PreviewWrapper>
              <div>
                <strong>{image.name}</strong>
                <span>{filesize(image.size || 0)}</span>
              </div>
            </S.ImageInfo>
            {image.url && (
              <S.DownloadButton
                href={image.url}
                download={image.name}
                target="_blank"
              >
                <Image
                  src="/assets/download.svg"
                  alt="Download Image"
                  layout="fill"
                  loader={({ src, width, quality }) =>
                    `${src}?w=${width}&q=${quality || 75}`
                  }
                />
              </S.DownloadButton>
            )}
          </S.ListItem>
        ))}
      </S.List>
    ) : (
      <p>Nenhuma imagem listada!</p>
    )}
  </section>
);

export default ImagesList;
