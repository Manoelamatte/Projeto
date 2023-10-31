import Header2 from "../../components/Header/Header2"
import { ContainerCenter, ContainerGeral, ContainerGeral2 } from "../../styledGlobal"
import { Bolinha, BotaoIcones, CardDireita, CardEsquerda, CardPost, IconesPost, ImagemMascara, MiniCardizinho, Textinho } from "../../components/Post/styled"
import { BotaoPrincipal, ImagemPrincipal } from "./styled"
import MaisPublic from "../../assets/MaisPublic.png"
import { useNavigate } from "react-router-dom"
import { BotaoHeader } from "../../components/Header/styled"
import Post from "../../components/Post/Post"
import { useEffect, useState } from "react"
import MascaraLogo from "../../assets/MascaraLogo.png"
import comentario from "../../assets/comentario.png"
import gostar from "../../assets/gostar.png"
import axios from "axios"

function Principal(){
    const [postsList, setPostsList] = useState([]);

    const fetchData = async () => {
        const response = await axios.get('http://localhost:3008/api/posts');
        setPostsList(response.data.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const navigate = useNavigate()
    const goToPublic = ()=>{
        navigate('/publicacao')
    }

    const goToComentarios = ()=>{
        navigate('/comentarios')
    }

    return(
        <>
        <ContainerGeral2>
            <Header2/>
                <ContainerCenter>

                    {/* <Post/>

                    <Post/>
                    
                    <Post/> */}

                    {postsList.map((post) => {
                        return <>
                        <CardPost>
                        <CardEsquerda>
                            <Bolinha>
                                <ImagemMascara src={MascaraLogo}/>
                            </Bolinha>
                        </CardEsquerda>
        
                        <CardDireita>
                            <Textinho>
                            Enviado por @fulanadetal 
                            </Textinho>
        
                            <MiniCardizinho>
                                {post.descricao}
                            </MiniCardizinho>
                        </CardDireita>
        
                        <BotaoIcones>
                             <IconesPost src={gostar}/>
                        </BotaoIcones>
        
                        <BotaoIcones onClick={goToComentarios}>
                             <IconesPost src={comentario}/>
                        </BotaoIcones>
                    </CardPost>
                    </>
                    })}

                    
                    <BotaoPrincipal onClick={goToPublic}>
                     <ImagemPrincipal src={MaisPublic}/>
                    </BotaoPrincipal> 

                 </ContainerCenter>
        </ContainerGeral2>
        </>
    )
}

export default Principal
