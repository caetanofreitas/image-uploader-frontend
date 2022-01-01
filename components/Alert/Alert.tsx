import Image from "next/image";
import { useEffect, useState } from "react";
import * as S from "./Alert.styles";

type AlertProps = {
  show: boolean;
  message: string;
};

const Alert = ({ show, message }: AlertProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (show === isOpen) return;

    if (show) {
      setIsClosing(false);
      setIsOpen(true);
    } else {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 500);
    }
  }, [show, isOpen]);
  return isOpen ? (
    <S.AlertWrapper>
      <S.AlertContainer $isClosing={isClosing}>
        <S.AlertIconWrapper>
          <Image
            src="/assets/failed.svg"
            alt="Upload Status"
            layout="fill"
            loader={({ src, width, quality }) =>
              `${src}?w=${width}&q=${quality || 75}`
            }
          />
        </S.AlertIconWrapper>
        <S.AlertContent>{message}</S.AlertContent>
      </S.AlertContainer>
    </S.AlertWrapper>
  ) : null;
};

export default Alert;
