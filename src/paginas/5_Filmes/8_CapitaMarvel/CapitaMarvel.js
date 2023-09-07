import Header2 from "../../../components/Header/Header2"
import { ContainerGeral2 } from "../../../styledGlobal"
import { CardInformacoes, FilmeCard1, FilmeCard2, ImgFilmes, Textinhos, TituloInfo } from "./styled"
import fundocapitaMarvel from "../../../assets/fundocapitaMarvel.png"
import capitaMarvelFundo from "../../../assets/capitaMarvelFundo.jpg"

function CapitaMarvel(){
    return(
        <>
        <ContainerGeral2>
            <Header2/>
           <FilmeCard1>
                 <ImgFilmes src={capitaMarvelFundo}/>
           </FilmeCard1>

           <FilmeCard2>
            oi
                 <CardInformacoes>
                    <TituloInfo>
                        Ficha Técnica
                    </TituloInfo>

                    <Textinhos>
                        País: Estados Unidos
                    </Textinhos>
                 </CardInformacoes>
           </FilmeCard2>
        </ContainerGeral2>
        </>
    )
}

export default CapitaMarvel