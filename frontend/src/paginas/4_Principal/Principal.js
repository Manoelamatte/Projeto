import Header2 from "../../components/Header/Header2"
import { ContainerCenter, ContainerGeral2 } from "../../styledGlobal"
import { Bolinha, BotaoIcones, BotaoIconesCima, CardDireita, CardEsquerda, CardPost, IconesPost, ImagemMascara, MiniCardizinho, Textinho } from "../../components/Post/styled"
import { BotaoPrincipal, ImagemPrincipal } from "./styled"
import MaisPublic from "../../assets/MaisPublic.png"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import MascaraLogo from "../../assets/MascaraLogo.png"
import comentario from "../../assets/comentario.png"
import gostar from "../../assets/gostar.png"
import axios from "axios"
import botaoExcluir from "../../assets/botaoExcluir.png"

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

    // função deletar
    const handleExcluir = async(Idpost)=>{
        const data={
           id_post: Idpost
        }
        
        const response = await axios.delete('http://localhost:3008/api/post/' + Idpost )
        if(response.data.success){
            alert(response.data.message);
        }else{
            alert('não foi possível deletar')
        }
    }


    // função like
    const handleLike = async(postId)=>{
        const data ={
            id_post: postId,
            id_usuario: localStorage.getItem('id')
        }

        const response = await axios.post('http://localhost:3008/api/reacao/create', data);

        if(response.data.success){
            alert(response.data.message);
        }else{
            alert('não curtiu')
        }
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

                            <BotaoIconesCima onClick={()=> handleExcluir(post.id)}>
                               <IconesPost src={botaoExcluir}/>
                            </BotaoIconesCima>


                            {/* <BotaoIcones>
                              <IconesPost src={botaoExcluir}/>
                            </BotaoIcones>
                            */}
        
                            <MiniCardizinho>
                                {post.descricao}
                            </MiniCardizinho>
                        </CardDireita>
        
                        <BotaoIcones onClick={()=> handleLike(post.id)}>
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
