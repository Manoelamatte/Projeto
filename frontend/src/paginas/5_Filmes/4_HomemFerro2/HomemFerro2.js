import Header2 from "../../../components/Header/Header2"
import { ContainerGeral2 } from "../../../styledGlobal"
import { CenasHomemFerro, CardCenas, CardInformacoes, FilmeCard1, FilmeCard2, ImgFilmes, Poster, TituloInfo, Textinhos, BotaoStreaming, ContainerCenas, MiniCardTitulo, BolinhaCenas, TituloCenas, SimboloFilmes, ContainerInformacoesCenas, ImagCenas2, IMGCenas, CenasViuva } from "../8_CapitaMarvel/styled"
import WallHomemF from "../../../assets/WallHomemF.png"
import homemFerro2 from "../../../assets/homemFerro2.jpg"
import mascaraHF from "../../../assets/mascaraHF.png"
import viuvaNegra from "../../../cenas/4_HomemFerro2/viuvaNegra.jpeg"
import dancarinas from "../../../cenas/4_HomemFerro2/dancarinas.jpeg"
import posterCapitao_ from "../../../cenas/4_HomemFerro2/posterCapitao_.jpg"
import posterViuva from "../../../cenas/4_HomemFerro2/posterViuva.jpg"
import cenaMotorista from "../../../cenas/4_HomemFerro2/cenaMotorista.png"

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
                            <BolinhaCenas>
                                <SimboloFilmes src={mascaraHF}/>
                            </BolinhaCenas>

                            <TituloCenas>oi</TituloCenas>
                        </MiniCardTitulo>

                        <ContainerInformacoesCenas>
                            <ImagCenas2 src={dancarinas}/>
                        </ContainerInformacoesCenas>
                    </ContainerCenas>

                    <ContainerCenas>
                        <MiniCardTitulo>
                            <BolinhaCenas>
                                <SimboloFilmes src={mascaraHF}/>
                            </BolinhaCenas>

                            <TituloCenas>oi</TituloCenas>
                        </MiniCardTitulo>

                        <ContainerInformacoesCenas>
                            <ImagCenas2 src={viuvaNegra}/>
                        </ContainerInformacoesCenas>

                    </ContainerCenas>

                    <ContainerCenas>
                        <MiniCardTitulo>
                            <BolinhaCenas>
                                <SimboloFilmes src={mascaraHF}/>
                            </BolinhaCenas>

                            <TituloCenas>oi</TituloCenas>
                        </MiniCardTitulo>

                           <ContainerInformacoesCenas>
                                <CenasHomemFerro src={posterCapitao_}/>
                                <CenasViuva src={posterViuva}/>
                            </ContainerInformacoesCenas>
                    </ContainerCenas>

                    <ContainerCenas>
                        <MiniCardTitulo>
                            <BolinhaCenas>
                                <SimboloFilmes src={mascaraHF}/>
                            </BolinhaCenas>

                            <TituloCenas>oi</TituloCenas>
                        </MiniCardTitulo>

                        <ContainerInformacoesCenas>
                            <ImagCenas2 src={cenaMotorista}/>
                        </ContainerInformacoesCenas>
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