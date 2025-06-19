import styled from 'styled-components';


export const OuterWrapper = styled.video`
  inset: 0;
  width: 160%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  opacity: 0.9; /* ou ajuste conforme quiser */
  pointer-events: none;
  border-radius: 30px;
`;