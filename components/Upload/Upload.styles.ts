import styled, { css } from 'styled-components';
import { DropzoneRootProps } from 'react-dropzone';

type ContainerProps = {
  isDragActive: boolean
  isDragReject: boolean
};

const dragStatus = {
  default: '#ddd',
  reject: '#e57878',
  active: '#78e5d5',
  textDefault: '#999'
}

const setDragStatus = (isDragActive: boolean, isDragRejected: boolean) => {
  if (isDragRejected) {
    return dragStatus.reject;
  }

  if (isDragActive) {
    return dragStatus.active;
  }

  dragStatus.default;
}

export const DropContainer = styled.div<ContainerProps>`
  border: 3px dashed #ddd;
  border-radius: 8px;
  cursor: pointer;
  transition: height 0.2s ease;
  border-color: ${({ isDragActive, isDragReject}) => setDragStatus(isDragActive, isDragReject)};
  width: 100%;
  min-width: 50vw;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: ${({ isDragActive, isDragReject}) => !isDragActive && !isDragReject ? dragStatus.textDefault : setDragStatus(isDragActive, isDragReject)};
  }
`;

export const UploadMessage = styled.p``;
