import Header2 from "../../components/Header/Header2"
import { ContainerCenter, ContainerGeral } from "../../styledGlobal"
import { BotaoPublicar, CardBolinha, ComentariosCardPublic, ImagemMascara, InputPublic, MiniContainer, TextoMiniContainer } from "./styled"
import MascaraLogo from "../../assets/MascaraLogo.png"
import { useNavigate } from "react-router-dom"

function Publicacao(){

    const navigate = useNavigate()
    const goToPrincipal = ()=>{
        navigate('/principal')
    }

    return(
        <>
        <ContainerGeral>
            <Header2/>
            <ContainerCenter>

                <ComentariosCardPublic>
                    <MiniContainer>
                        <CardBolinha>
                            <ImagemMascara src={MascaraLogo}/>
                        </CardBolinha>

                        <TextoMiniContainer>
                         Comente aqui sobre o que você anda assistindo! Queremos muito saber! 
                        </TextoMiniContainer>
                    </MiniContainer>

                    <InputPublic type="text" name="comentario" placeholder="Digite Aqui..."/>
                    
                 

                    <BotaoPublicar onClick={goToPrincipal}>
                        Publicar
                    </BotaoPublicar>
                </ComentariosCardPublic>

            </ContainerCenter>
        </ContainerGeral>
        </>
    )
}

export default Publicacao