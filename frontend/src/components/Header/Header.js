import { useNavigate } from "react-router-dom"
import { BotaoHeader, ContainerHeader, TituloHeader } from "./styled"

function Header(){

    const navigate = useNavigate()
    const goToLogin = () =>{
        navigate('/login')
    } 

    return(
        <>
        <ContainerHeader>
            <TituloHeader>CINE FEMINISMO</TituloHeader>

            <BotaoHeader onClick={goToLogin}>
                Login
            </BotaoHeader>
        </ContainerHeader>
        </>
    )
}

export default Header