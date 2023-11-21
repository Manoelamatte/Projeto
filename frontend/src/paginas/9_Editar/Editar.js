import Header2 from "../../components/Header/Header2";
import { ContainerCenter, ContainerGeral4 } from "../../styledGlobal";
import { BotaoPublicar, CardBolinha, ComentariosCardPublic, ImagemMascara, InputPostagem, MiniContainer, TextoMiniContainer, TituloPostagem } from "../7_Publicacao/styled";
import MascaraLogo from "../../assets/MascaraLogo.png"
import { useState } from "react";
import axios from "axios"
import { useLocation, useNavigate, useParams } from "react-router-dom";

function Editar(){
    const {id} = useParams();
    const [descricao, setDescricao] = useState("");
    const [titulo, setTitulo] = useState("");
    const location = useLocation();
    const postData = location.state.data;
    //alert(JSON.stringify(postData))
    
    const navigate = useNavigate()

    const handleAtualizar = async (idPost) =>{
        const data ={
            descricao,
            titulo,
            idPost: localStorage.getItem('id')           
        };
        console.log(data);
        const response = await axios.put('http://localhost:3008/api/post/' + idPost);
        console.log(response.data);
        if (response.data.success) {
            alert('Atualizou cupinxa!');
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
                            <TituloPostagem 
                            placeholder=" Atualize aqui o que você está pensando."
                            type="text" 
                            name="titulo"
                            defaultValue={postData.titulo}
                            onChange={(e)=>setTitulo(e.target.value)}
                            />
                        </TextoMiniContainer>
                    </MiniContainer>

                        <InputPostagem
                        type="text" 
                        name="descricao" 
                        width={60}
                        placeholder="Atualize aqui o que você está pensando." 
                        defaultValue={postData.descricao} 
                        onChange={(e)=>setDescricao(e.target.value)}
                        />

                    <BotaoPublicar onClick={handleAtualizar}>
                        ATUALIZAR
                    </BotaoPublicar>
                </ComentariosCardPublic>
            </ContainerCenter>
        </ContainerGeral4>
        </>
    )
}

export default Editar