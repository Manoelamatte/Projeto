import Header2 from "../../components/Header/Header2"
import { ContainerCenter, ContainerGeral4 } from "../../styledGlobal"
import { BotaoPublicar, CardBolinha, ComentariosCardPublic, ImagemMascara, InputPublic, MiniContainer, TextoMiniContainer } from "../7_Publicacao/styled"
import MascaraLogo from "../../assets/MascaraLogo.png"

function Comentarios(){
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
                                    Comente aqui sobre o que você está pensando.
                                </TextoMiniContainer>
                        </MiniContainer>

                        <InputPublic type="text" name="comentario" placeholder="Digite Aqui..."/>

                        <BotaoPublicar>
                            Comentar
                        </BotaoPublicar>
                </ComentariosCardPublic>
            </ContainerCenter>
        </ContainerGeral4>
        </>
    )
}

export default Comentarios