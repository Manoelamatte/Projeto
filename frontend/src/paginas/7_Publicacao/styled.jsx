import styled from "styled-components";

export const ComentariosCardPublic = styled.div`
  width: 70vw;
  height: 70vh;
  background-color: rgba(247, 245, 245, 1);
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  margin: 30px;
`;

export const MiniContainer = styled.div`
  width: 65vw;
  height: 10vh;
  background-color: darkred;
  margin: 20px;
  border-radius: 20px;
  justify-content: space-between;
`;

export const TextoMiniContainer = styled.p`
  color: white;
  font-size: 12pt;
  position: relative;
  margin-top: -40px;
  margin-left: 70px;
`

export const InputPublic = styled.textarea`
  width: 65vw;
  height: 40vh;
  background-color: rgba(236, 236, 236, 1);
  border: none;
  border-radius: 10px;
  outline: none;
  box-sizing: border-box;
  resize: none;  
`

export const TituloPostagem = styled.input`
    width: 55vw;
    height: 05vh;
    // background-color: rgba(236, 236, 236, 1);
    background-color: transparent;
    border: none;
    border-radius: 05px; 
    outline: none;
    color: white;

  &::placeholder {
    // color:  rgba(212, 0, 0, 1);
    color: white;
  }
`

export const CardBolinha = styled.div`
  width: 04vw;
  height: 08vh;
  border-radius: 100%;
  margin: 05px;
  background-color: white;
`

export const BotaoPublicar = styled.button`
  border-color: darkred;
  border-radius: 20px;
  background-color: white;
  margin: 08px;
  width: 13vw;
  height: 07vh;
  font-size: 12pt;
  color: darkred;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-left: 650px;
  cursor: pointer;
  
`
export const ImagemMascara = styled.img`
  width: 04vw;
  height: 08vh;
`
export const INputImagem = styled.input`
  margin-right: 60%;
  margin-bottom: 10px;
  
`

// export const ImagemInput = styled.img`
  
// `

export const InputPostagem = styled.input`
  width: 65vw;
  height: 35vh;
  background-color: rgba(236, 236, 236, 1);
  border: none;
  border-radius: 10px;

  &::placeholder {
    color:  rgba(212, 0, 0, 1);
   }
`