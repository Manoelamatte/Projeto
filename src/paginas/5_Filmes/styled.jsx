import styled from "styled-components"

export const CardFilmes = styled.div`
    width: 70vw;
    height: 80vh;
    // background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin: 30px;
    flex-direction: column;
    
`

export const ContainerFilmes1 = styled.div`
//   background-color: black;
  width: 70vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContainerFilmes2 = styled.div`
//   background-color: transparent;
  width: 70vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BotaoFilmes = styled.button`
  all: unset;
  cursor: pointer;
  outline: revert;

  &:hover{
    background-color: red;
    transform: scale(1.05);
    transition: all 0.5s;
  }
`

export const ImagemFilmes = styled.img`
  width: 14vw;
  height: 40vh;
  margin: 10px;
`