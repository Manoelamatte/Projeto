import Header2 from "../../components/Header/Header2"
import { ContainerGeral } from "../../styledGlobal"
import { BotaoPrincipal, ImagemPrincipal } from "./styled"
import MaisPublic from "../../assets/MaisPublic.png"
import { useNavigate } from "react-router-dom"
import { BotaoHeader } from "../../components/Header/styled"

function Principal(){

    const navigate = useNavigate()
    const goToPublic = ()=>{
        navigate('/publicacao')
    }

    const goToFilmes = ()=>{
        navigate('/filmes')
    }

    return(
        <>
        <ContainerGeral>
            <Header2/>

            <BotaoHeader onClick={goToFilmes}>
                 Filmes
           </BotaoHeader>

            <BotaoHeader>
                LogoOut
            </BotaoHeader>

            <BotaoPrincipal onClick={goToPublic}>
                <ImagemPrincipal src={MaisPublic}/>
            </BotaoPrincipal>
        </ContainerGeral>
        </>
    )
}

export default Principal
