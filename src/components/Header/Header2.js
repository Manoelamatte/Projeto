import { BotaoHeader, BotaoMenu, ContainerHeader, IconesMenu, ImagemMenu, ImagemProfire, TituloHeader, TituloMenu } from "./styled"
import iconeMenu from "../../assets/iconeMenu.png"
import heroinaIcone from "../../assets/heroinaIcone.png"
import { useNavigate } from "react-router-dom"
import style from "./style.css"
import iconeFilmes from "../../assets/iconeFilmes.png"
import sair from "../../assets/sair.png"
import casa from "../../assets/casa.png"

function Header2() {

    const navigate = useNavigate()
    const goToFilmes = () => {
        navigate('/filmes')
    }

    const goToPrincipal = ()=>{
        navigate('/principal')
    }

    return (
        <>
            <ContainerHeader>
                <button class="hamburguerButton"><ImagemMenu src={iconeMenu} /></button>
                <nav class="menulateral">

                    <ul>
                        <TituloMenu>
                            CINE FEMINISMO
                        </TituloMenu>
                        <li class="item-menu">
                            <a href="#">
                             
                                <IconesMenu src={iconeFilmes} />

                                <BotaoMenu onClick={goToFilmes}>
                                    FILMES
                                </BotaoMenu>
                            </a>
                        </li>

                        <li class="item-menu">
                            <a href="#">
                               
                                <IconesMenu src={casa} />

                                <BotaoMenu onClick={goToPrincipal}>
                                    PÁGINA PRINCIPAL
                                </BotaoMenu>
                            </a>
                        </li>
                    </ul>

                    <p class="menutitulo">SAIR</p>
                    <ul>
                        <li class="item-menu">
                            <a href="#">
                            

                                    <IconesMenu src={sair} />
                                <span class="linktxt">LOG OUT</span>
                            </a>
                        </li>
                    </ul>
                </nav>

                <TituloHeader>CINE FEMINISMO</TituloHeader>

                <ImagemProfire src={heroinaIcone} />
            </ContainerHeader>

        </>
    )
}

export default Header2