import { useNavigate } from "react-router-dom"
import { BotaoHeader, ContainerHeader, LogoCineFem, LogoCineFem2, TituloHeader } from "./styled"
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
            <LogoCineFem2 src={logoCine}/>

            <BotaoHeader onClick={goToLogin}>
                Login
            </BotaoHeader>
        </ContainerHeader>
        </>
    )
}

export default Header