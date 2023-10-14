import Header2 from "../../../components/Header/Header2"
import { ContainerGeral2 } from "../../../styledGlobal"
import { CardCenas, CardInformacoes, FilmeCard1, FilmeCard2, ImgFilmes, Poster, TituloInfo, Textinhos, BotaoStreaming, ContainerCenas, MiniCardTitulo, BolinhaCenas, TituloCenas } from "../8_CapitaMarvel/styled"
import WallHomemF from "../../../assets/WallHomemF.png"
import homemFerro2 from "../../../assets/homemFerro2.jpg"

function HomemFerro2(){
    return(
        <>
        <ContainerGeral2>
            <Header2/>
            <FilmeCard1>
                <ImgFilmes src={WallHomemF}/>
            </FilmeCard1>

            <BotaoStreaming>DISNEY +</BotaoStreaming>

            {/* .............................. */}

            <FilmeCard2>
                <CardCenas>
                    <ContainerCenas>
                        <MiniCardTitulo>
                            <BolinhaCenas></BolinhaCenas>

                            <TituloCenas>oi</TituloCenas>
                        </MiniCardTitulo>
                    </ContainerCenas>

                    <ContainerCenas>
                        <MiniCardTitulo>
                            <BolinhaCenas></BolinhaCenas>

                            <TituloCenas>oi</TituloCenas>
                        </MiniCardTitulo>
                    </ContainerCenas>

                    <ContainerCenas>
                        <MiniCardTitulo>
                            <BolinhaCenas></BolinhaCenas>

                            <TituloCenas>oi</TituloCenas>
                        </MiniCardTitulo>
                    </ContainerCenas>

                    <ContainerCenas>
                        <MiniCardTitulo>
                            <BolinhaCenas></BolinhaCenas>

                            <TituloCenas>oi</TituloCenas>
                        </MiniCardTitulo>
                    </ContainerCenas>
                </CardCenas>

                {/* card informações */}

                <CardInformacoes>
                    <TituloInfo>
                      Ficha Técnica
                    </TituloInfo>

                    <Poster src={homemFerro2}/>

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