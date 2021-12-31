import styled, { css, keyframes } from 'styled-components';
import Image from 'next/image';

export const StatusColors = {
  failed: '#b8234b',
  pending: '#b87a23',
  uploaded: '#23b823',
}

export const Title = styled.h2`
  margin: 1rem 0;
`;

export const List = styled.ul`
  border: 3px solid #ddd;
  display: flex;
  flex-direction: column;
  list-style: none;
  max-height: 85vh;
  overflow: auto;
`;

export const ListItem = styled.li`
  border-bottom: 3px solid #ddd;
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 500px;

  &:last-child {
    border: none;
  }
`

export const ImageInfo = styled.div`
  display: flex;

  div {
    display: flex;
    flex-direction: column;
  }
`

export const PreviewWrapper = styled.div`
  margin-right: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  position: relative;
`

export const Preview = styled(Image).attrs(() => ({
  layout: 'fill',
}))`
  height: 100%;
  width: 100%;
  border-radius: 4px;

  img {
    border-radius: 4px;
    object-fit: cover;
  }
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`

export const StatusIndicator = styled.span<{ status: keyof typeof StatusColors }>`
  width: 100%;
  height: 100%;
  border-radius: 999px;
  position: relative;

  ${({ status }) => status === 'pending' && css`
    animation: ${rotate} 450ms ease-in-out 0s infinite;
  `}
`

export const DownloadButton = styled.a`
  position: relative;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  text-decoration: none;
`
