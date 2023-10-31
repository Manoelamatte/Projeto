import Header2 from "../../components/Header/Header2"
import { ContainerCenter, ContainerGeral, ContainerGeral4 } from "../../styledGlobal"
import { BotaoPublicar, CardBolinha, ComentariosCardPublic, ImagemMascara, INputImagem, InputPostagem, InputPublic, MiniContainer, TextoMiniContainer, TituloPostagem } from "./styled"
import MascaraLogo from "../../assets/MascaraLogo.png"
import { useNavigate } from "react-router-dom"
import adicionarfoto from "../../assets/adicionarfoto.png"
import { useState } from "react"
import axios from "axios"

function Publicacao(){

    const navigate = useNavigate()
    const goToPrincipal = ()=>{
        navigate('/principal')
    }

    const [descricao, setDescricao] = useState("");


    const handleComment = async (e) => {
        const data = {
            descricao,
            imagem: null,
            idUsuario: localStorage.getItem('id')
        };
        console.log(data);
        const response = await axios.post('http://localhost:3008/api/post/create', data);
        console.log(response.data);
        if (response.data.success) {
            alert('Deu certo cupinxa!');
            navigate('/principal');
        } else {
            alert('Deu errado!')
        }

    } 

    
    return(
        <>
        <ContainerGeral4>
            <Header2/>
            <ContainerCenter>

                <ComentariosCardPublic>
                    <MiniContainer>
                        <CardBolinha>
                            <ImagemMascara src={MascaraLogo}/>
                        </CardBolinha>

                        <TextoMiniContainer>
                         {/* Comente aqui sobre o que você anda assistindo! Queremos muito saber!  */}
                             <TituloPostagem
                              placeholder="Digite aqui o seu título " 
                             />
                        </TextoMiniContainer>
                    </MiniContainer>

                    <InputPostagem 
                        type="text" 
                        name="descricao" 
                        width={60}
                        placeholder="Digite aqui" 
                        value={ descricao } 
                        onChange={(e)=>setDescricao(e.target.value)}>
                    </InputPostagem>

                    <BotaoPublicar onClick={ handleComment }>
                        Publicar
                    </BotaoPublicar>

                </ComentariosCardPublic>
            </ContainerCenter>
        </ContainerGeral4>
        </>
    )
}

export default Publicacao