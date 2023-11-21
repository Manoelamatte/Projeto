import {  BemVinde, BotaoMenu, BotaoMenuDireita, ContainerHeader, IconesMenu, ImagemMenu, ImagemProfire, LogoCineBar, LogoCineFem, LogoMenu, Menutitulo, MenutituloDireita } from "./styled"
import iconeMenu from "../../assets/iconeMenu.png"
import heroinaIcone from "../../assets/heroinaIcone.png"
import { useNavigate } from "react-router-dom"
import style from "./style.css"
import iconeFilmes from "../../assets/iconeFilmes.png"
import sair from "../../assets/sair.png"
import casa from "../../assets/casa.png"
import { useEffect } from "react"
import logoCine from "../../assets/logoCine.png"
import logoCinePreto from "../../assets/logoCinePreto.png"
import style2 from "./style2.css"

function Header2() {

    const navigate = useNavigate()
    const goToFilmes = () => {
        navigate('/filmes')
    }

    const goToPrincipal = ()=>{
        navigate('/principal')
    }

    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(!token){
            navigate('/')
        }
    },[navigate])

    const handleLogout = ()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('email')
        navigate('/')
    }

    return (
        <>
            <ContainerHeader>
                <button class="hamburguerButton"><ImagemMenu src={iconeMenu} /></button>
                <nav class="menulateral">

                <LogoCineBar src={logoCinePreto}/>
                
                                
                <Menutitulo> PÁGINAS </Menutitulo>
                    <ul>
                        <li >
                                <BotaoMenu onClick={goToPrincipal}>
                                <IconesMenu src={casa} />
                                    PÁGINA PRINCIPAL
                                </BotaoMenu>
                        </li>

                        <li >

                                <BotaoMenu onClick={goToFilmes}>
                                <IconesMenu src={iconeFilmes} />
                                    PÁGINA FILMES
                                </BotaoMenu>
                        </li>
                    </ul>
                </nav>

                <LogoCineFem src={logoCine}/>

            
                <button class="hamburguerButton">
                  <ImagemProfire src={heroinaIcone} />
                </button>
                
                <nav class="menulateral2">

                    <LogoMenu  src={heroinaIcone}/>
                    <BemVinde>Bem vindo</BemVinde>
                    <ul>                    
                        <li>
                            <MenutituloDireita> SAIR </MenutituloDireita>

                            <BotaoMenuDireita onClick={handleLogout}>
                            <IconesMenu src={sair} />
                                LOG OUT
                            </BotaoMenuDireita>
                        </li>
                    </ul>
                </nav>

            </ContainerHeader>

        </>
    )
}

export default Header2