import styled from "styled-components"

export const ContainerCard = styled.div`
    width: 70vw;
    height: 80vh;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    margin: 60px;
`

export const Cardbranco = styled.div`
    width: 35vw;
    height: 80vh;
    flex-direction: column;

    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
`
export const CardVermelho = styled.div`
    width: 30vw;
    height: 75vh;
    flex-direction: column;
    background-color: rgba(106,14,14,1);
    border-radius: 10%
`

export const Textfield = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    row-gap: 20px;
    padding-left: 20px;
`

export const Input = styled.input`
    width: 70%;
    border: solid 02px rgba(138, 0, 0, 1);
    border-radius: 10px;
    padding: 15px;
    background: transparent;
    font-size: 12pt;
    outline: none;
    box-sizing: border-box;
`

export const TitutoCadastro = styled.h1`
    color: #950101;
    padding-top: 10%;
    padding-left: 33%;
    font-family: Arial, Helvetica, sans-serif;
`

export const EscritaDireita = styled.h2`
    padding: 30px;
    padding-left: 50px;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
`

export const BotaoCadastro = styled.button`
    width: 30%;
    padding: 16px;
    margin: 30px;
    margin-left: 180px;
    border: none;
    border-radius: 10px;
    text-transform: uppercase;
    letter-spacing: 3px;
    background-color: rgba(212, 0, 0, 1);
    cursor: pointer;
    color: white;
    box-shadow: 0px 10px 40px -12px  #3D0000;
`