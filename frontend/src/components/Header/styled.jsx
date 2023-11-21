import styled from "styled-components"

export const ContainerHeader = styled.header`
    background-color: rgba(37, 35, 35, 1);
    display: flex;
    align-items: center;
    padding: 0 50px;
    height: 12vh;
    justify-content: space-between;
    // position: fixed;
    // width: 100vw;
`

export const TituloHeader = styled.h2`
    color: rgb(255, 255, 255);
    font-family: Arial, Helvetica, sans-serif;
    background-color: rgb(228, 0, 0);
`

export const ImagemMenu = styled.img`
    width: 46%;
    height: 60%;
    margin: 10px; 
`

export const ImagemProfire = styled.img`
    width: 09%;
    height: 75%;
    margin-left: 90%;
`

export const BotaoHeader = styled.button`
    width:10%;
    padding: 15px;
    border: none;
    margin: 05px;
    border-radius: 10px;
    text-transform: uppercase;
    letter-spacing: 3px;
    background-color: #950101;
    cursor: pointer;
    color: white;
    box-shadow: 0px 10px 40px -12px  #3D0000;
`

export const TituloMenu = styled.h2`
    background-color:  rgb(228, 0, 0);
    color: white;
    width: 65%;
    padding-left: 10px; 
`

export const IconesMenu = styled.img`
    width: 30px;
    height: 30px;
    margin: 10px;
`

export const BotaoMenu = styled.button`
    border: none;
    width: 100vw;
    padding: 20px;
    align-items: center;
    justify-content: start;
    display: flex;
    cursor: pointer;
    color:  black;
    background-color: transparent;

    &:hover{
        /* background-color: #ffb4b4; */
        background-color:  #950101;
    }
`


export const BotaoMenuDireita = styled.button`
    border: none;
    width: 21vw;
    padding: 20px;
    align-items: center;
    justify-content: start;
    display: flex;
    cursor: pointer;
    color:  black;
    margin-left: -10%;
    background-color: transparent;

    &:hover{
        background-color:  #950101;
    }
`


export const Menutitulo = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    margin-left: 40px; 
`

export const MenutituloDireita = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
`

export const LogoMenu = styled.img`
    width: 06vw;
    height: 13vh;
    margin: 10px;
    margin-left: 40%;
`

export const LogoCineFem = styled.img`
    width: 16vw;
    height: 20vh;
    margin-left: 32%;
`

export const LogoCineBar = styled.img`
    width: 25vw;
    height: 30vh;
    margin-left: 35px;
`