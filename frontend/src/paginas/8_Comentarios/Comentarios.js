import Header2 from "../../components/Header/Header2"
import { ContainerCenter, ContainerGeral4 } from "../../styledGlobal"
import MascaraLogo from "../../assets/MascaraLogo.png"
import { CardBolinhaComen, ContainerComentarios, ImagemMascaraComent, InputComentario, MiniContainerComen, TextoMiniContainerComent } from "./styled"
import { BotaoPublicar } from "../7_Publicacao/styled"

function Comentarios(){
    return(
        <>
        <ContainerGeral4>
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
                        placeholder="Digite aqui..." 
                    />          

                     <BotaoPublicar>
                        COMENTAR
                     </BotaoPublicar>
                </ContainerComentarios>
            </ContainerCenter>
        </ContainerGeral4>
        </>
    )
}

export default Comentarios