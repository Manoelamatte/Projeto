import { ContainerErro, H1Erro, ImagemUnicornio, Paragrafo } from "./styled"
import hulk from "../../assets/hulk.png"
import { ContainerCenter } from "../../styledGlobal"

function Erro(){
    return(
        <>
        <ContainerCenter>

       
        <ContainerErro>
             <ImagemUnicornio src={hulk}/>

             <H1Erro>
                OPS! PÁGINA NÃO ENCONTRADA :(
             </H1Erro>

             <Paragrafo>
                Acho que você escolheu a porta errada!
             </Paragrafo>

        </ContainerErro>
        </ContainerCenter>
        </>
    )
}

export default Erro