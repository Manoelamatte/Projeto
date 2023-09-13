import Header2 from "../../../components/Header/Header2"
import { ContainerGeral2 } from "../../../styledGlobal"
import { CardCenas, CardInformacoes, FilmeCard1, FilmeCard2, ImgFilmes, Poster, Textinhos, TituloInfo } from "../8_CapitaMarvel/styled"
import porterMulherMaravilha from "../../../assets/posterMulherMaravilha.jpg"

function MulherMaravilha(){
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

                    <Poster src={porterMulherMaravilha}/>
                  
                    <Textinhos>
                     Título original: Wonder Woman
                    </Textinhos>

                    <Textinhos>
                     Idioma Original: Inglês 
                    </Textinhos>

                    <Textinhos>
                     Título da tradução brasileira: Mulher-Maravilha
                    </Textinhos>

                    <Textinhos>
                     Lançamento: 1 de junho de 2017 
                    </Textinhos>

                    <Textinhos>
                     País: Estados Unidos da América
                    </Textinhos>

                    <Textinhos>
                     Direção: Patty Jenkins 
                    </Textinhos>

                    <Textinhos>
                     Roteiro: Allan Heinberg 
                    </Textinhos>

                <Textinhos>
                Edição: Martin Walsh 
                </Textinhos>

                <Textinhos>
                Fotografia: Matthew Jensen 
                </Textinhos>

                <Textinhos>
                Música: Rupert Gregson Williams 
                </Textinhos>

                <Textinhos>
                Produção: Charles Roven, Deborah Snyder, Zack Snyder e Richard Suckle
                </Textinhos>

                <Textinhos>
                Atores principais: Gal Gadot (Mulher-Maravilha), Chris Pine (Steve Trevor), Robin Wright (Antíope), Danny Huston (Erich Ludendorff), David Thewlis (Sir Patrick), Connie Nielsen (Hipólita) e Elena Anaya (Dr. Maru)
                </Textinhos>

                <Textinhos>
                Gênero: Ação, aventura, fantasia e guerra 
                </Textinhos>

                <Textinhos>
                Duração: 2h 21m 
                </Textinhos>
                </CardInformacoes>
            </FilmeCard2>
        </ContainerGeral2>
        </>
    )
}

export default MulherMaravilha
