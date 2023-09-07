import styled, { createGlobalStyle } from "styled-components"
import Fundo from "./assets/Fundo.png"

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
    }
`

export const ContainerGeral = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-image:url(${Fundo});
`

export const ContainerGeral2 = styled.div`
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-image:url(${Fundo});
`

export const ContainerCenter = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
`