import Header2 from "../../components/Header/Header2"
import { ContainerCenter, ContainerGeral2} from "../../styledGlobal"
import MascaraLogo from "../../assets/MascaraLogo.png"
import { CardBolinhaComen, ContainerComentarios, ImagemMascaraComent, InputComentario, MiniContainerComen, TextoMiniContainerComent } from "./styled"
import { BotaoPublicar, ImagemMascara } from "../7_Publicacao/styled"
import { useEffect, useState } from "react"
import axios from "axios"
import { Bolinha, BotaoIcones, BotaoIconesCima, CardDireita, CardEsquerda, CardPost, IconesPost, MiniCardizinho, Textinho } from "../../components/Post/styled"
import gostar from "../../assets/gostar.png"
import botaoExcluir from "../../assets/botaoExcluir.png"
import { useParams } from 'react-router-dom';

function Comentarios(){

    const [descricao, setDescricao] = useState("");
    
    const { id } = useParams();

    const handleComentar = async(e)=>{
        const data={
            descricao,
            id_usuario: localStorage.getItem('id'),
            id_post: id
        };
        console.log(data)
        const response = await axios.post('http://localhost:3008/api/comentario/create', data);
        console.log(response.data);
        if (response.data.success) {
            alert('Deu certo cupinxa!');
        } else {
            alert('Deu errado!')
        }
    }

    const [postComentarios, setpostComentarios] = useState([]);

    const fetchData = async()=>{
        const response = await axios.get('http://localhost:3008/api/comentarios/' + id);
        console.log(response.data.data)
        setpostComentarios(response.data.data)
    };

    useEffect(()=>{
        fetchData();
    }, [])


    return(
        <>
        <ContainerGeral2>
            <Header2/>

            <ContainerCenter>
                <ContainerComentarios>
                    <MiniContainerComen>
                        <CardBolinhaComen>
                            <ImagemMascaraComent src={MascaraLogo}/>
                        </CardBolinhaComen>

                        <TextoMiniContainerComent>
                             Comente aqui sobre o que você está pensando.
                        </TextoMiniContainerComent>
                    </MiniContainerComen>
            
                    <InputComentario
                        type="text" 
                        name="descricao" 
                        width={60}
                        placeholder="Digite aqui..." 
                        value={descricao}
                        onChange={(e)=>setDescricao(e.target.value)}
                    />          

                     <BotaoPublicar onClick={handleComentar}>
                        COMENTAR
                     </BotaoPublicar>
                </ContainerComentarios>


                {postComentarios.map((comentarios) => {
                    
                            
                    return<>
                        <CardPost>

                            <CardEsquerda>
                                <Bolinha>
                                    <ImagemMascara src={MascaraLogo}/>
                                </Bolinha>
                            </CardEsquerda>

                            <CardDireita>
                                <Textinho>
                                    Comentado por 
                                </Textinho>

                                <BotaoIconesCima>
                                    <IconesPost src={botaoExcluir}/>
                                </BotaoIconesCima>

                                <MiniCardizinho>
                                    {comentarios.descricao}
                                </MiniCardizinho>
                            </CardDireita>

                            <BotaoIcones>
                                <IconesPost src={gostar}/>
                            </BotaoIcones>
                        </CardPost>  
                        </>
                                    
                })}             


              

            </ContainerCenter>
        </ContainerGeral2>
        </>
    )
}

export default Comentarios