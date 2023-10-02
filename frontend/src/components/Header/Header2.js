import { BotaoHeader, BotaoMenu, ContainerHeader, IconesMenu, ImagemMenu, ImagemProfire, Menutitulo, TituloHeader, TituloMenu } from "./styled"
import iconeMenu from "../../assets/iconeMenu.png"
import heroinaIcone from "../../assets/heroinaIcone.png"
import { useNavigate } from "react-router-dom"
import style from "./style.css"
import iconeFilmes from "../../assets/iconeFilmes.png"
import sair from "../../assets/sair.png"
import casa from "../../assets/casa.png"
import { useEffect } from "react"

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
        navigate('/Home')
    }

    return (
        <>
            <ContainerHeader>
                <button class="hamburguerButton"><ImagemMenu src={iconeMenu} /></button>
                <nav class="menulateral">

                
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

                    <Menutitulo> SAIR </Menutitulo>
                    <ul>
                        <li>
                            <BotaoMenu onClick={handleLogout}>
                            <IconesMenu src={sair} />
                                LOG OUT
                            </BotaoMenu>
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