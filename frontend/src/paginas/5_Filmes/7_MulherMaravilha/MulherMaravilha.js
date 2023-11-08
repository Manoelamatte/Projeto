import Header2 from "../../../components/Header/Header2"
import { ContainerGeral2 } from "../../../styledGlobal"
import { BolinhaCenas, BotaoStreaming, CardCenas, CardInformacoes, ContainerCenas, ContainerInformacoesCenas, FilmeCard1, FilmeCard2, ImagCenas2, ImgFilmes, MiniCardTitulo, Poster, SimboloFilmes, Textinhos, TituloCenas, TituloInfo } from "../8_CapitaMarvel/styled"
import porterMulherMaravilha from "../../../assets/posterMulherMaravilha.jpg"
import WallMulherM from "../../../assets/WallMulherM.png"
import espada from "../../../assets/espada.png"
import MulherTrincheiras from "../../../cenas/7_MulherMaravilha/MulherTrincheiras.png"
import Congresso from "../../../cenas/7_MulherMaravilha/Congresso.png"
import drVeneno from "../../../cenas/7_MulherMaravilha/drVeneno.jpg"

function MulherMaravilha(){

    
    // function goToStreaming(){
    //     window.location.href = "https://www.hbomax.com/br/pt"
    // }

    return(
        <>
        <ContainerGeral2>
            <Header2/>
            <FilmeCard1>
                <ImgFilmes src={WallMulherM}/>
            </FilmeCard1>

            <BotaoStreaming>HBO MAX</BotaoStreaming>


            {/* ............................. */}

            <FilmeCard2>
                <CardCenas>
                    <ContainerCenas>
                        <MiniCardTitulo>
                            <BolinhaCenas>
                                <SimboloFilmes src={espada}/>
                            </BolinhaCenas>

                            <TituloCenas>oi</TituloCenas>
                        </MiniCardTitulo>

                        <ContainerInformacoesCenas>
                            <ImagCenas2 src={MulherTrincheiras}/>
                        </ContainerInformacoesCenas>
                    </ContainerCenas>

                    <ContainerCenas>
                        <MiniCardTitulo>
                            <BolinhaCenas>
                                <SimboloFilmes src={espada}/>
                            </BolinhaCenas>

                            <TituloCenas>oi</TituloCenas>
                        </MiniCardTitulo>

                        <ContainerInformacoesCenas>
                            <ImagCenas2 src={drVeneno}/>
                        </ContainerInformacoesCenas>
                    </ContainerCenas>

                    <ContainerCenas>
                        <MiniCardTitulo>
                            <BolinhaCenas>
                                <SimboloFilmes src={espada}/>
                            </BolinhaCenas>

                            <TituloCenas>oi</TituloCenas>
                        </MiniCardTitulo>

                        <ContainerInformacoesCenas>
                            <ImagCenas2 src={Congresso}/>
                        </ContainerInformacoesCenas>
                    </ContainerCenas>

                    <ContainerCenas>
                        <MiniCardTitulo>
                            <BolinhaCenas>
                                <SimboloFilmes src={espada}/>
                            </BolinhaCenas>

                            <TituloCenas>oi</TituloCenas>
                        </MiniCardTitulo>
                    </ContainerCenas>

                    <ContainerCenas>
                        <MiniCardTitulo>
                            <BolinhaCenas>
                                <SimboloFilmes src={espada}/>
                            </BolinhaCenas>

                            <TituloCenas>oi</TituloCenas>
                        </MiniCardTitulo>
                    </ContainerCenas>
                </CardCenas>

                {/* card informações  */}

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
