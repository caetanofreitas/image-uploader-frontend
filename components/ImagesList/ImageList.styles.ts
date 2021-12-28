import styled from 'styled-components';

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
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 500px;

  div {
    display: flex;
    flex-direction: column;
  }

  &:last-child {
    border: none;
  }
`

export const PreviewWrapper = styled.div`
  margin-right: 1rem;
  width: 2.5rem;
  height: 2.5rem;
`

export const Preview = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background-image: url(${({ src}) => src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
`;

export const StatusIndicator = styled.span<{ status: keyof typeof StatusColors }>`
  width: 100%;
  height: 100%;
  border-radius: 999px;
  background: ${({ status = 'pending' }) => StatusColors[status]};
`
