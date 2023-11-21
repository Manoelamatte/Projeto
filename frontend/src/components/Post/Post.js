import { Bolinha, BotaoIcones, CardDireita, CardEsquerda, CardPost, IconesPost, ImagemMascara, MiniCardizinho, Textinho } from "./styled"
import MascaraLogo from "../../assets/MascaraLogo.png"
import comentario from "../../assets/comentario.png"
import gostar from "../../assets/gostar.png"
import { useNavigate } from "react-router-dom"

function Post(){

    const navigate = useNavigate()
    const goToComentario = ()=>{
        navigate('/comentarios')
    }

    return(
        <>
        
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

                    </MiniCardizinho>
                </CardDireita>

                <BotaoIcones>
                     <IconesPost src={gostar}/>
                </BotaoIcones>

                <BotaoIcones onClick={goToComentario}>
                     <IconesPost src={comentario}/>
                </BotaoIcones>
            </CardPost>
      
        </>
    )
}

export default Post