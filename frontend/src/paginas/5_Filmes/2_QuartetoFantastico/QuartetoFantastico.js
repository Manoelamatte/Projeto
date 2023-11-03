import Header2 from "../../../components/Header/Header2"
import { ContainerGeral2 } from "../../../styledGlobal"
import WallQuartF from "../../../assets/WallQuartF.png"
import { BolinhaCenas, BotaoStreaming, CardCenas, CardInformacoes, ContainerCenas, ContainerInformacoesCenas, FilmeCard1, FilmeCard2, ImagCenas2, ImgFilmes, MiniCardTitulo, Poster, SimboloFilmes, Textinhos, TituloCenas, TituloInfo } from "../8_CapitaMarvel/styled"
import quartetofantatisco from "../../../assets/quartetofantastico.jpg"
import fogoMascara from "../../../assets/fogoMascara.png"
import QuartetoPoster from "../../../cenas/2_QuartetoFantastico/QuartetoPoster.jpg"
import CenaUniforme from "../../../cenas/2_QuartetoFantastico/CenaUniforme.webp"
import CenaChris from "../../../cenas/2_QuartetoFantastico/CenaChris.jpg"
import cenaBeijo from "../../../cenas/2_QuartetoFantastico/cenaBeijo.png"

function Quartetofantatisco(){
    return(
        <>
            <ContainerGeral2>
                <Header2/>

                    <FilmeCard1>
                        <ImgFilmes src={WallQuartF}/>
                    </FilmeCard1>

                    <BotaoStreaming>DISNEY +</BotaoStreaming>



              {/* ......................... */}

                    <FilmeCard2>
                        <CardCenas>
                            <ContainerCenas>
                                <MiniCardTitulo>
                                    <BolinhaCenas>
                                          <SimboloFilmes src={fogoMascara}/>
                                    </BolinhaCenas>

                                    <TituloCenas>oi</TituloCenas>
                                </MiniCardTitulo>

                                <ContainerInformacoesCenas>
                                    <ImagCenas2 src={QuartetoPoster}/>
                                </ContainerInformacoesCenas>
                            </ContainerCenas>


                            <ContainerCenas>
                                <MiniCardTitulo>
                                    <BolinhaCenas>
                                        <SimboloFilmes src={fogoMascara}/>
                                    </BolinhaCenas>

                                    <TituloCenas>oi</TituloCenas>
                                </MiniCardTitulo>

                                <ContainerInformacoesCenas>
                                    <ImagCenas2 src={CenaUniforme}/>
                                </ContainerInformacoesCenas>
                            </ContainerCenas>

                            <ContainerCenas>
                                <MiniCardTitulo>
                                    <BolinhaCenas>
                                          <SimboloFilmes src={fogoMascara}/>
                                    </BolinhaCenas>

                                    <TituloCenas>oi</TituloCenas>
                                </MiniCardTitulo>

                                
                            </ContainerCenas>

                            <ContainerCenas>
                                <MiniCardTitulo>
                                    <BolinhaCenas>
                                          <SimboloFilmes src={fogoMascara}/>
                                    </BolinhaCenas>

                                    <TituloCenas>oi</TituloCenas>
                                </MiniCardTitulo>

                                <ContainerInformacoesCenas>
                                    <ImagCenas2 src={cenaBeijo}/>
                                </ContainerInformacoesCenas>
                            </ContainerCenas>

                            <ContainerCenas>
                                <MiniCardTitulo>
                                    <BolinhaCenas>
                                          <SimboloFilmes src={fogoMascara}/>
                                    </BolinhaCenas>

                                    <TituloCenas>Tocha Humana</TituloCenas>
                                </MiniCardTitulo>

                                <ContainerInformacoesCenas>
                                    <ImagCenas2 src={CenaChris}/>
                                </ContainerInformacoesCenas>
                            </ContainerCenas>
                        </CardCenas>



                        {/* card informações */}

                        <CardInformacoes>
                               <TituloInfo>Ficha Técnica</TituloInfo>

                               <Poster src={quartetofantatisco}/>

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

                                <Textinhos>
                                    Gênero: Ação e ficção científica 
                                </Textinhos>

                                <Textinhos>
                                Duração: 2h 4m 
                                </Textinhos>
                          </CardInformacoes>
                    </FilmeCard2>
            </ContainerGeral2>
        </>
    )
}

export default Quartetofantatisco