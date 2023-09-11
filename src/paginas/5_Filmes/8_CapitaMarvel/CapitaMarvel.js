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
                        Título Original: Captain Marvel
                    </Textinhos>

                    <Textinhos>
                        Idioma Original: Inglês
                    </Textinhos>

                    <Textinhos>
                        Título da tradução brasileira: Capitã Marvel
                    </Textinhos>

                    <Textinhos>
                        Lançamento: 7 de março de 2019
                    </Textinhos>

                    <Textinhos>
                        País: Estados Unidos da América
                    </Textinhos>

                    <Textinhos> 
                        Direção: Anna Boden e Ryan Fleck
                    </Textinhos>

                    <Textinhos>
                        Roteiro: Anna Boden, Ryan Fleck e Geneva Robertson-Dworet
                    </Textinhos>

                    
                    <Textinhos>
                        Edição: Elliot Graham e Debbie Berman
                    </Textinhos>

                    
                    <Textinhos>
                        Fotografia: Ben Davis
                    </Textinhos>

                    
                    <Textinhos>
                        Música: Pinar Toprak
                    </Textinhos>

                    <Textinhos>
                        Produção: Kevin Feige
                    </Textinhos>

                    <Textinhos>
                        Atores Principais: Brie Larson (Carol Danvers), Samuel L. Jackson (Nick Fury), Ben Mendelsohn (Talos), Djimon Hounsou (Korath), Lee Pace (Ronan), Lashana Lynch (Maria Rambeau), Gemma Chan (Doutora Minerva), Annette Bening (Inteligência Suprema), Clark Gregg (Agente Phil Coulson) e Jude Law (Yon-Rogg)
                    </Textinhos>
                 </CardInformacoes>
           </FilmeCard2>
        </ContainerGeral2>
        </>
    )
}

export default CapitaMarvel