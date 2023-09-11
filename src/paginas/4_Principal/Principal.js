import Header2 from "../../components/Header/Header2"
import { ContainerCenter, ContainerGeral, ContainerGeral2 } from "../../styledGlobal"
import { BotaoPrincipal, ImagemPrincipal } from "./styled"
import MaisPublic from "../../assets/MaisPublic.png"
import { useNavigate } from "react-router-dom"
import { BotaoHeader } from "../../components/Header/styled"
import Post from "../../components/Post/Post"

function Principal(){

    const navigate = useNavigate()
    const goToPublic = ()=>{
        navigate('/publicacao')
    }

    return(
        <>
        <ContainerGeral2>
            <Header2/>
                <ContainerCenter>

                    <Post/>

                    <Post/>
                    
                    <Post/>
           
                    <BotaoPrincipal onClick={goToPublic}>
                     <ImagemPrincipal src={MaisPublic}/>
                    </BotaoPrincipal> 

                 </ContainerCenter>
        </ContainerGeral2>
        </>
    )
}

export default Principal
