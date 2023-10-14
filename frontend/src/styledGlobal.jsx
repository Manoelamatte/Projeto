import styled, { createGlobalStyle } from "styled-components"
import Fundo from "./assets/Fundo.png"

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
    }
`

export const ContainerGeral = styled.div`
    display: flex;
    flex-direction: column;
    background-image:url(${Fundo});
    height: 100vh;
`

export const ContainerGeral2 = styled.div`
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-image: url(${Fundo});
    
`

export const ContainerCenter = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
`

export const Container3 = styled.div`
  justify-content: space-between;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: black;
`

export const ContainerGeral4 = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-image:url(${Fundo});
`