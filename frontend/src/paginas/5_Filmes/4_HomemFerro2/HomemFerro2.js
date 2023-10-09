import Header2 from "../../../components/Header/Header2"
import { ContainerGeral2 } from "../../../styledGlobal"
import { CardCenas, CardInformacoes, FilmeCard1, FilmeCard2, ImgFilmes, Poster, TituloInfo, Textinhos } from "../8_CapitaMarvel/styled"


function HomemFerro2(){
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

                    <Poster/>

                    <Textinhos>
                    Título original: Iron Man 2
                </Textinhos>

                <Textinhos>
                  Idioma Original: Inglês
                </Textinhos>

                <Textinhos>
                 Título da tradução brasileira: Homem de Ferro 2
                </Textinhos>

                <Textinhos>
                 Lançamento:  30 de abril de 2010
                </Textinhos>

                <Textinhos>
                 País: Estados Unidos da América
                </Textinhos>

                <Textinhos>
                    Direção: Jon Favreau
                </Textinhos>

                <Textinhos>
                 Roteiro: Justin Theroux
                </Textinhos>

                <Textinhos>
                    Edição: Dan Lebental e Glen Scantlebury
                </Textinhos>

                <Textinhos>
                    Fotografia: Matthew Libatique
                </Textinhos>

                <Textinhos>
                 Música: John Debney
                </Textinhos>

                <Textinhos>
                  Produção: Kevin Feige
                </Textinhos>

                <Textinhos>
                 Atores principais: Robert Downey Jr (Tony Stark), Gwyneth Paltrow (Pepper Potts), Don Cheadle (Máquina de Combate), Mickey Rourke (Chicote Negro), Jon Favreau (Happy Hogan), Scarlett Johansson (Viúva Negra), Sam Rockwell (Justin Hammer) e Kate Mara (Bethany Cabe).
                </Textinhos>

                <Textinhos>
                 Gênero: Ação, aventura e ficção científica
                </Textinhos>

                <Textinhos>
                    Duração: 2h 5m  
                </Textinhos>
                </CardInformacoes>
            </FilmeCard2>
        </ContainerGeral2>
        </>
    )
}

export default HomemFerro2