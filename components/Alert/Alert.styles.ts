import styled, { keyframes } from 'styled-components';

const close = keyframes`
  0% {
    opacity: 1;
    background: #FFF;
  }
  100% {
    opacity: 0;
    background: transparent;
  }
`
const open = keyframes`
  0% {
    opacity: 0;
    background: transparent;
  }
  100% {
    opacity: 1;
    background: #FFF;
  }
`
const show = (isClosing: boolean) => isClosing ? close : open;

export const AlertWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: #0000004D;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AlertContainer = styled.div<{ $isClosing: boolean }>`
  width: 50%;
  height: 40%;
  background: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 1rem;
  animation: ${({ $isClosing }) => show($isClosing)} 0.5s ease-in 0s forwards;
`;

export const AlertIconWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  position: relative;
  margin-bottom: 1rem;
`

export const AlertContent = styled.p`
  font-size: 1.2rem;
`
