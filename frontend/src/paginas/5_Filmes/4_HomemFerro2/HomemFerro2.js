import Header2 from "../../../components/Header/Header2"
import { ContainerGeral2 } from "../../../styledGlobal"
import { CenasHomemFerro, CardCenas, CardInformacoes, FilmeCard1, FilmeCard2, ImgFilmes, Poster, TituloInfo, Textinhos, BotaoStreaming, ContainerCenas, MiniCardTitulo, BolinhaCenas, TituloCenas, SimboloFilmes, ContainerInformacoesCenas, ImagCenas2, CenasViuva, Paragrafocenas, Disponivel } from "../8_CapitaMarvel/styled"
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
            <Disponivel>Disponível em: </Disponivel>

            {/* .............................. */}

            <FilmeCard2>
                <CardCenas>
                    <ContainerCenas>
                        <MiniCardTitulo>
                            <BolinhaCenas>
                                <SimboloFilmes src={mascaraHF}/>
                            </BolinhaCenas>

                            <TituloCenas> Dançarinas durante a festa em homenagem ao Homem de Ferro</TituloCenas>
                        </MiniCardTitulo>

                        <ContainerInformacoesCenas>
                            <ImagCenas2 src={dancarinas}/>
                        </ContainerInformacoesCenas>

                        <Paragrafocenas>
                         Nos primeiros instantes do filme, é apresentada uma celebração em homenagem a Tony Stark ou Homem de Ferro. Em algumas das cenas gravadas durante essa festa, é possível anotar, ao fundo, bailarinas com roupas curtas e colocadas dançando com movimentos sensuais.  No início da cena, as dançarinas estavam dançando de forma normal, mas, com o decorrer das cenas, os movimentos tornaram-se mais eróticos.  Até que o Homem de Ferro chegasse e, enquanto se vangloriava, as bailarinas dançavam para ele de forma sexy e sensual.
                        </Paragrafocenas>
                    </ContainerCenas>

                    <ContainerCenas>
                        <MiniCardTitulo>
                            <BolinhaCenas>
                                <SimboloFilmes src={mascaraHF}/>
                            </BolinhaCenas>

                            <TituloCenas>Tony Stark procurando imagens de sua secretária Natalie</TituloCenas>
                        </MiniCardTitulo>

                        <ContainerInformacoesCenas>
                            <ImagCenas2 src={viuvaNegra}/>
                        </ContainerInformacoesCenas>

                        <Paragrafocenas>
                         Natalie Rushman, conhecida como Viúva Negra, é apresentada por Pepper Potts, secretária e interesse amoroso do principal, através das seguintes palavras: “Ela é do departamento jurídico e pode virar um processo bem caro de assédio sexual se você ficar olhando assim”. Apesar dessa observação, Tony permanece atraído pela jovem, o que o leva a procurar imagens nuas da personagem. A sequência inteira trata a personagem como um objeto ou um pedaço de carne à venda, como ocorre no momento em que Tony afirma “Eu quero uma” e sua secretária responde “Não”. Além disso, a personagem usa roupas extremamente curtas e coladas ao corpo ao longo de todo o filme.
                        </Paragrafocenas>
                    </ContainerCenas>

                    <ContainerCenas>
                        <MiniCardTitulo>
                            <BolinhaCenas>
                                <SimboloFilmes src={mascaraHF}/>
                            </BolinhaCenas>

                            <TituloCenas>Pôster Viúva Negra e Capitão américa </TituloCenas>
                        </MiniCardTitulo>

                           <ContainerInformacoesCenas>
                                <CenasHomemFerro src={posterCapitao_}/>
                                <CenasViuva src={posterViuva}/>
                            </ContainerInformacoesCenas>

                            <Paragrafocenas>
                                O público também percebeu uma significativa diferença nos pôsteres de divulgação dos filmes. Ao contrário dos outros super-heróis masculinos, os quais se destacavam por sua força física, a atriz permanecia sempre em posições que enfatizaram o seu corpo e suas curvas.
                            </Paragrafocenas>
                    </ContainerCenas>

                    <ContainerCenas>
                        <MiniCardTitulo>
                            <BolinhaCenas>
                                <SimboloFilmes src={mascaraHF}/>
                            </BolinhaCenas>

                            <TituloCenas>Natasha Romanoff</TituloCenas>
                        </MiniCardTitulo>

                        <ContainerInformacoesCenas>
                            <ImagCenas2 src={cenaMotorista}/>
                        </ContainerInformacoesCenas>

                        <Paragrafocenas>
                         O motorista de Tony Stark oferece carona à Natalie com o objetivo de que possam chegar com mais rapidez ao local desejado. Natalie, desejando vestir o uniforme de espiã, retira suas roupas rapidamente, enquanto é seguida pelos olhos de Happy, o motorista. Ao perceber o assédio, a personagem replica: “Mantenha os olhos na estrada” e prossegue vestindo suas roupas.
                        </Paragrafocenas>
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