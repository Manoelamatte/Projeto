import styled from "styled-components";

export const ContainerComentarios = styled.div`
  width: 68vw;
  height: 45vh;
  background-color: rgba(247, 245, 245, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  margin: 30px;
`;

export const InputComentario = styled.input`
  width: 55vw;
  height: 24vh;
  background-color: rgba(236, 236, 236, 1);
  border: none;
  border-radius: 10px;

  &::placeholder {
    color:  rgba(212, 0, 0, 1);
   }
`

export const MiniContainerComen = styled.div`
  width: 56vw;
  height: 07vh;
  background-color: darkred;
  margin: 10px;
  border-radius: 20px;
  justify-content: space-between;
`;

export const CardBolinhaComen = styled.div`
  width: 03vw;
  height: 06vh;
  border-radius: 100%;
  margin: 03px;
  background-color: white;
`
export const ImagemMascaraComent = styled.img`
  width: 03vw;
  height: 06vh;
`
export const TextoMiniContainerComent = styled.p`
  color: white;
  font-size: 12pt;
  position: relative;
  margin-top: -29px;
  margin-left: 50px;
`
