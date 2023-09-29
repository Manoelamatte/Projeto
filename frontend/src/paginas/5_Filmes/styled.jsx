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
export const Imagem = styled.img`
  height: 100vh;
  background-color: black;
`

export const ContainerFilmesGeral = styled.div`
  margin-top: 24%;
  display: flex;
  justify-content: center;
  align-items: center;
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
    background-color: #d97878;
    transform: scale(1.05);
    transition: all 0.5s;
  }
`

export const ImagemFilmes = styled.img`
  width: 13vw;
  height: 40vh;
  margin: 10px;
  margin-left: 25px;
  margin-right: 25px;
`

export const TituloFilmes = styled.h1`
  color: white;
  font-family: arial;
  margin-top: -30%;
  margin-left: 39%;
  text-transform: uppercase;
  font-size: 30pt;
`

export const SubtituloFilmes = styled.h4`
  color: white;
  font-family: arial;
  margin-left: 39.9%;
  margin-top: -01%;
`