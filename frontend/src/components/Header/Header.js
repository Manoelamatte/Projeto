import { useNavigate } from "react-router-dom"
import { BotaoHeader, ContainerHeader, LogoCineFem, TituloHeader } from "./styled"
import logoCine from "../../assets/logoCine.png"


function Header(){

    const navigate = useNavigate()
    const goToLogin = () =>{
        navigate('/login')
    } 

    return(
        <>
        <ContainerHeader>
            {/* <TituloHeader>CINE FEMINISMO</TituloHeader> */}
            <LogoCineFem src={logoCine}/>

            <BotaoHeader onClick={goToLogin}>
                Login
            </BotaoHeader>
        </ContainerHeader>
        </>
    )
}

export default Header