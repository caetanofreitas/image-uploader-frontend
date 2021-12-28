import styled from 'styled-components';

export const Container = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  padding: 1rem;
  border: 3px dashed #ddd;
  margin-top: 1rem;
  max-height: 50vh;
  overflow: auto;
`;

export const File = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 500px;

  div {
    display: flex;
    
    div {
      display: flex;
      flex-direction: column;
      margin-left: 1rem;
    }
  }
`;

export const Preview = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 4px;
  background-image: url(${({ src}) => src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
`;

export const ProgressBar = styled.div<{ progress: number }>`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 999px;
  border: 1px solid #ddd;
  transform: rotate(180deg);
  overflow: hidden;

  span {
    width: 100%;
    height: ${({ progress }) => progress}%;
    background: #78e5d5;
    transform: height 0.2s ease;
  }
`;

export const PreUpTitle = styled.h2`
  margin-top: 20px;
`;
