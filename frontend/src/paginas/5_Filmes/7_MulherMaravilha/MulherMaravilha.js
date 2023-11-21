import Header2 from "../../../components/Header/Header2"
import { ContainerGeral2 } from "../../../styledGlobal"
import { BolinhaCenas, BotaoStreaming, CardCenas, CardInformacoes, ContainerCenas, ContainerInformacoesCenas, Disponivel, FilmeCard1, FilmeCard2, ImagCenas2, ImgFilmes, MiniCardTitulo, Paragrafocenas, Poster, SimboloFilmes, Textinhos, TituloCenas, TituloInfo } from "../8_CapitaMarvel/styled"
import porterMulherMaravilha from "../../../assets/posterMulherMaravilha.jpg"
import WallMulherM from "../../../assets/WallMulherM.png"
import espada from "../../../assets/espada.png"
import MulherTrincheiras from "../../../cenas/7_MulherMaravilha/MulherTrincheiras.png"
import Congresso from "../../../cenas/7_MulherMaravilha/Congresso.png"
import drVeneno from "../../../cenas/7_MulherMaravilha/drVeneno.jpg"
import gitM from "../../../cenas/7_MulherMaravilha/gifM.gif"
import GifMulher from "../../../cenas/7_MulherMaravilha/GifMulher.gif"

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
            <Disponivel>Disponível em: </Disponivel>


            {/* ............................. */}

            <FilmeCard2>
                <CardCenas>
                    <ContainerCenas>
                        <MiniCardTitulo>
                            <BolinhaCenas>
                                <SimboloFilmes src={espada}/>
                            </BolinhaCenas>

                            <TituloCenas>Mulher Maravilha no campo de batalha</TituloCenas>
                        </MiniCardTitulo>

                        <ContainerInformacoesCenas>
                            <ImagCenas2 src={MulherTrincheiras}/>
                        </ContainerInformacoesCenas>

                        <Paragrafocenas>
                             Ainda que o uniforme seja o mesmo de 1941, com roupas curtas e coladas ao corpo, a diretora não objetifica o seu corpo como nos outros filmes citados anteriormente. Isso se dá ao fato de ser dirigido por uma mulher, Patty Jenkins, que apresenta diversas cenas para revelar o seu uniforme e seus escudos, e de modo algum sensualizando ou realçando as curvas da atriz Gal Gadot. Um fato interessante sobre o uniforme, é que nas histórias em quadrinhos, a saia azul continha estrelas brancas, que faziam referência aos Estados Unidos. No entanto, na versão das grandes telonas, isso foi excluído, não fazendo referência aos EUA nem uma vez.  Apesar disso, o look proporciona-lhe grande mobilidade para lutar. 
                        </Paragrafocenas>
                    </ContainerCenas>

                    <ContainerCenas>
                        <MiniCardTitulo>
                            <BolinhaCenas>
                                <SimboloFilmes src={espada}/>
                            </BolinhaCenas>

                            <TituloCenas> Dra.Isabel Maru</TituloCenas>
                        </MiniCardTitulo>

                        <ContainerInformacoesCenas>
                            <ImagCenas2 src={drVeneno}/>
                        </ContainerInformacoesCenas>

                        <Paragrafocenas>
                            Um aspecto interessante do filme, é que a maior criadora de armas do lado alemão era uma mulher, comandante de Ludendorff, Dra.Isabel Maru, conhecida como Dra. Veneno. Ela criava não somente armas poderosas, como venenos e bombas capazes de matar milhares de pessoas. É importante ver uma mulher tão poderosa capaz de criar coisas grandiosas, independentemente de ser a inimiga. 
                        </Paragrafocenas>
                    </ContainerCenas>

                    <ContainerCenas>
                        <MiniCardTitulo>
                            <BolinhaCenas>
                                <SimboloFilmes src={espada}/>
                            </BolinhaCenas>

                            <TituloCenas>Diana Prince durante um congresso governamental </TituloCenas>
                        </MiniCardTitulo>

                        <ContainerInformacoesCenas>
                            <ImagCenas2 src={Congresso}/>
                        </ContainerInformacoesCenas>

                        <Paragrafocenas>
                            A próxima cena ocorreu durante um congresso em que somente homens atendiam. Steve entra na sala para conversar com o seu antigo comandante acompanhado pela principal. Quando os homens percebem a presença de uma mulher ficam incomodados e paralisados, além de, cochichar horrores sobre uma mulher estar entre eles. Steve até tentou ajudá-la retirando-a daquela sala, mas, na sequência, estão todos reunidos outra vez, mas em uma sala de planos. Nesse momento, Diana expressa sua opinião para o público e eles ficam ofendidos. O espião a chama de “minha secretária” e, assim, ficam descredibilizando as suas falas ainda mais. É um momento bastante difícil, sobretudo porque, até o presente momento, mulheres são crucificadas por expressarem suas opiniões. 
                        </Paragrafocenas>
                    </ContainerCenas>

                    <ContainerCenas>
                        <MiniCardTitulo>
                            <BolinhaCenas>
                                <SimboloFilmes src={espada}/>
                            </BolinhaCenas>

                            <TituloCenas>Cenas de luta</TituloCenas>
                        </MiniCardTitulo>

                          <ContainerInformacoesCenas>
                            <ImagCenas2 src={gitM}/>
                        </ContainerInformacoesCenas>

                        <Paragrafocenas>
                            O longa não se preocupa com a criação de perseguições mirabolantes e desgastantes, mas ainda sim sempre colocando a mulher como protagonista e salvadora da pátria. Ela consegue enfrentar os piores inimigos, silenciando quem a duvidava. A câmera lenta novamente é maravilhosa nesses momentos, proporcionando ótimas sequências. O momento da guerra, em que a principal investe contra as trincheiras dominadas por inimigos, sem medo e revoltada com a indiferença dos soldados ingleses.
                        </Paragrafocenas>
                    </ContainerCenas>

                    <ContainerCenas>
                        <MiniCardTitulo>
                            <BolinhaCenas>
                                <SimboloFilmes src={espada}/>
                            </BolinhaCenas>

                            <TituloCenas>Moda feminina</TituloCenas>
                        </MiniCardTitulo>
        
                        <ContainerInformacoesCenas>
                            <ImagCenas2 src={GifMulher}/>
                        </ContainerInformacoesCenas>

                        <Paragrafocenas>
                            Outro ponto relevante para a narrativa é o momento em que Diana está saindo da ilha escondida com Steve. No momento em que a mãe dela chega e questiona a sua filha o motivo, a personagem principal explica o seu propósito, demonstrando força e determinação como mulher: “Estou disposta a lutar por quem não pode se defender sozinho. Quem eu serei se ficar”. Nessa cena, sua mãe lhe entrega a tiara de sua tia, uma vez que ela era "A maior guerreira da nossa história". Seguidamente, nas cenas em que Diana é levada para comprar roupas mais discretas, o objetivo era fazer uma crítica à moda feminina naquela época, e como era extremamente desconfortável para as mulheres em prol da sexualização.
                        </Paragrafocenas>
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
