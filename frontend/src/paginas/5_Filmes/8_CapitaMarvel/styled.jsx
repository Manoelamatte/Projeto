import styled from "styled-components"

export const ImgFilmes = styled.img`
    width: 100vw;
    height: 100vh;
`

export const FilmeCard1 = styled.div`
    width: 100%;
    display: flex;
    background-color: pink;
`
export const FilmeCard2 = styled.div`
    width: 100%;
    display: flex;
    height: 50%;
    justify-content: space-between;
    flex-direction: row;
`
export const CardCenas = styled.div`
    width: 75vw;
    display: flex;
    background: #ffffff;
    height: 100%;
    margin: 10px;
    flex-direction: column;
`

export const CardInformacoes = styled.div`
    width: 25vw;
    display: flex;
    background-color: #d9d9d9;
    height: 100%;
    margin: 10px;
    border-radius: 20px;
    flex-direction: column;
    box-shadow:  05px 5px 5px black;
`

export const TituloInfo = styled.h2`
    color: #000000;
    margin-left: 80px;
    font-family: Arial, Helvetica, sans-serif;
`

export const Textinhos = styled.p`
    color: #000000;
    font-size: 12pt;
    margin: 12px;
   flex-direction: column;
   text-align: justify;
   font-family: Arial, Helvetica, sans-serif;
`

export const Poster = styled.img`
    width: 50%;
    height: 40%;
    margin-left: 80px;
`