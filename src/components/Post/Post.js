import { ContainerGeral } from "../../styledGlobal"
import { Bolinha, CardDireita, CardEsquerda, CardPost, ImagemMascara, MiniCardizinho, Textinho } from "./styled"
import MascaraLogo from "../../assets/MascaraLogo.png"

function Post(){
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
            </CardPost>
      
        </>
    )
}

export default Post