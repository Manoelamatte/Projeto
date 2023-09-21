import Header2 from "../../../components/Header/Header2"
import { Textinho } from "../../../components/Post/styled"
import { ContainerGeral2 } from "../../../styledGlobal"
import { CardCenas, CardInformacoes, FilmeCard1, FilmeCard2, ImgFilmes, Poster, Textinhos, TituloInfo } from "../8_CapitaMarvel/styled"
import mulherGato from "../../../assets/mulherGato.jpg"

function MulherGato(){
    return(
     <>
     <ContainerGeral2>
        <Header2/>

        <FilmeCard1>
            <ImgFilmes/>
        </FilmeCard1>

        <FilmeCard2>
            <CardCenas> 
                oi
            </CardCenas>

            <CardInformacoes>
                <TituloInfo>
                    Ficha Técnica
                </TituloInfo>

                <Poster src={mulherGato}/>

               <Textinhos>
                 Título original: Catwoman
               </Textinhos>

               <Textinhos>
                    Idioma Original: Inglês 
               </Textinhos>

                <Textinhos>
                 Título da tradução brasileira: Mulher-Gato
                </Textinhos>

                <Textinhos>
                  Lançamento: 19 de julho de 2004
                </Textinhos>

                <Textinhos>
                 País: Estados Unidos da América
                </Textinhos>

                <Textinhos>
                 Direção: Jean Christophe Comar
                </Textinhos>

                <Textinhos>
                 Roteiro: John Rogers, John D.Brancato e Michael Ferris
                </Textinhos>

                <Textinhos>
                    Edição: Sylvie Landra 
                </Textinhos>

                <Textinhos>
                    Fotografia: Thierry Arbogast 
                </Textinhos>

                <Textinhos>
                    Música: Klaus Badelt
                </Textinhos>

                <Textinhos>
                    Produção: Denise Di Novi, Edward L e McDonnell
                </Textinhos>

                <Textinhos>
                    Atores principais: Halle Berry (Patience Phillips/Mulher-Gato), Benjamin Bratt (Tom Lone), Sharon Stone (Laurel Hedare), Lambert Wilson (George Hedare), Frances Conroy (Ophelia Powers/Cat Lady), Alex Borstein (Sally), Michael Massee (Armando), Byron Mann (Wesley), Kim Smith (Drina), Peter Wingfield (Dr.Ivan Slavicky) e Berend McKenzie (Lance).
                </Textinhos>

                <Textinhos>
                 Gênero: Ação e fantasia
                </Textinhos>

                <Textinhos>
                    Duração: 1h 44m
                </Textinhos>
            </CardInformacoes>
        </FilmeCard2>
     </ContainerGeral2>
     </>   
    )
}

export default MulherGato