import { BotaoHeader, ContainerHeader, ImagemMenu, ImagemProfire, TituloHeader } from "./styled"
import iconeMenu from "../../assets/iconeMenu.png"
import heroinaIcone from "../../assets/heroinaIcone.png"
import { useNavigate } from "react-router-dom"

function Header2(){
    
    return(
        <>
        <ContainerHeader>
            <ImagemMenu src={iconeMenu}/>

            <TituloHeader>CINE FEMINISMO</TituloHeader>

            <ImagemProfire src={heroinaIcone}/>
        </ContainerHeader>

        </>
    )
}

export default Header2