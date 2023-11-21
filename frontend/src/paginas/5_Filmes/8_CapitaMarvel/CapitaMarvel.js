import Header2 from "../../../components/Header/Header2"
import { ContainerGeral2 } from "../../../styledGlobal"
import { BolinhaCenas, BotaoStreaming, CardCenas, CardInformacoes, ContainerCenas, ContainerInformacoesCenas, Disponivel, FilmeCard1, FilmeCard2, ImagCenas2, ImgFilmes, MiniCardTitulo, Paragrafocenas, Poster, SimboloFilmes, Textinhos, TituloCenas, TituloInfo } from "./styled"
import capitaMarvel from "../../../assets/capitaMarvel.jpg"
import wallCapitaM from "../../../assets/wallCapitaM.png"
import capitaMascara from "../../../assets/capitaMascara.png"
import cenaMotoqueiro from "../../../cenas/8_CapitaMarvel/cenaMotoqueiro.jpeg"
import uniformeCapita from "../../../cenas/8_CapitaMarvel/uniformeCapita.jpeg"
import NickeCarol from "../../../cenas/8_CapitaMarvel/NickeCarol.png"
import MariaRam from "../../../cenas/8_CapitaMarvel/MariaRam.jpeg"
import capitaGif from "../../../cenas/8_CapitaMarvel/capitaGIF.gif"
import comandante from "../../../cenas/8_CapitaMarvel/comandante.jpeg"

function CapitaMarvel(){
    return(
        <>
        <ContainerGeral2>
            <Header2/>
           <FilmeCard1>
                 <ImgFilmes src={wallCapitaM}/>
           </FilmeCard1>



          
            <BotaoStreaming>DISNEY +</BotaoStreaming>
            <Disponivel>Disponível em: </Disponivel>
           <FilmeCard2>

                <CardCenas>
                    <ContainerCenas>
                        <MiniCardTitulo>
                            <BolinhaCenas>
                                <SimboloFilmes src={capitaMascara}/>
                            </BolinhaCenas>

                            <TituloCenas>Uniforme da Capitã Marvel</TituloCenas>
                        </MiniCardTitulo>

                        <ContainerInformacoesCenas>
                            <ImagCenas2 src={uniformeCapita}/>
                        </ContainerInformacoesCenas>

                        <Paragrafocenas>
                            O uniforme da heroína é o ponto mais relevante, na cena, percebemos que a roupa não tem como objetivo delinear e marcar as suas curvas e dotes físicos, mas sim de deixá-la confortável e protegê-la durante suas lutas. A capitã usa dois uniformes ao longo do filme, a principal mudança são as cores. No início, as cores eram verdes e pretas, mas, no final, a capitã alterou as suas roupas para as cores da bandeira dos Estados Unidos, o que significou uma forma de identificação, mostrando que agora ela pertence a algum lugar, que seria o Planeta Terra. Dessa forma, é possível notar que a adaptação de Capitã Marvel para o cinema sofreu diversas alterações em relação à sexualização das mulheres no Universo Marvel. 
                        </Paragrafocenas>
                    </ContainerCenas>

                    <ContainerCenas>
                        <MiniCardTitulo>
                            <BolinhaCenas>
                                 <SimboloFilmes src={capitaMascara}/>
                            </BolinhaCenas>

                            <TituloCenas>Maria Rambeau</TituloCenas>
                        </MiniCardTitulo>

                        <ContainerInformacoesCenas>
                          <ImagCenas2 src={MariaRam}/>
                        </ContainerInformacoesCenas>

                        <Paragrafocenas>
                            Aqui temos Maria Rambeau, uma mulher negra e mãe solteira, que representa a luta pelo preconceito da sociedade contra o diferente ou fora do padrão. A personagem é resiliente e forte, se colocando em situações de que nunca fez parte, a fim de ajudar a sua melhor amiga. O longa não trata a personagem como um objeto nem o alívio cômico, na verdade é mostrado força e determinação, reforçando a independência e perseverança de uma mulher, sem precisar ser salva por homens desagradáveis, detestáveis e agressivos.
                        </Paragrafocenas>
                    </ContainerCenas>

                    <ContainerCenas>
                        <MiniCardTitulo>
                            <BolinhaCenas>
                                 <SimboloFilmes src={capitaMascara}/>
                            </BolinhaCenas>

                            <TituloCenas>Carol e Nick lavando a louça enquanto conversam </TituloCenas>
                        </MiniCardTitulo>

                         <ContainerInformacoesCenas>
                               <ImagCenas2 src={NickeCarol}/>
                         </ContainerInformacoesCenas>

                         <Paragrafocenas>
                            Um dos principais motivos para este longa ser extraordinário é a amizade entre Carol e Nick Fury, agente de elite da S.H.I.E.L.D (Supreme Headquarters, International Espionage, Law-enforcement Division) que não é sexualizada e nem romantizada. A relação deles é a diversão do filme, são como irmãos brigando por tudo. Eles se apoiam, ajudam mutuamente e aconselham-se mutuamente. O filme não tenta impor um relacionamento nem um clima romântico, deixando muito claro a amizade deles. Uma discussão polêmica entre diversos filmes, uma vez que a sociedade estabeleceu que não é possível manter um relacionamento de amizade simultâneo entre os gêneros, onde apenas o interesse sincero exista, uma vez que sempre haverá um que se interessa amorosamente pelo outro. 
                         </Paragrafocenas>
                    </ContainerCenas>

                    <ContainerCenas>
                        <MiniCardTitulo>
                            <BolinhaCenas>
                                  <SimboloFilmes src={capitaMascara}/>
                            </BolinhaCenas>

                            <TituloCenas>Comandante Yon-Rogg</TituloCenas>
                        </MiniCardTitulo>

                        <ContainerInformacoesCenas>
                             <ImagCenas2 src={comandante}/>
                        </ContainerInformacoesCenas>

                        <Paragrafocenas>
                            Outro aspecto relacionado ao abuso, é a forma como os seus colegas da Inteligência, como o comandante Yon-Rogg, tentavam convencê-la de que sua força vinha de seus poderes, sem eles ela não seria nada. Cenas de treinamento comprovaram isso, onde Yon reafirmava que ela não tinha controle de suas emoções e seu poder, o que a enfraqueceria. Reforçando o abuso psicológico.
                        </Paragrafocenas>
                    </ContainerCenas>

                    <ContainerCenas>
                        <MiniCardTitulo>
                            <BolinhaCenas>
                                  <SimboloFilmes src={capitaMascara}/>
                            </BolinhaCenas>

                            <TituloCenas>O sonho de pilotar</TituloCenas>
                        </MiniCardTitulo>

                        <ContainerInformacoesCenas>
                            <ImagCenas2 src={capitaGif}/>
                        </ContainerInformacoesCenas>

                        <Paragrafocenas>
                         A personagem tinha o desejo de pilotar aviões e ver o mundo lá de cima desde a tenra idade, mas era sempre criticada por seus colegas e família. Os roteiristas ainda apresentam cenas nojentas, onde os soldados do exército e o coronel riem e debocham da principal pelo fato de ser uma mulher tentando fugir do padrão estabelecido pela sociedade de 1995 e lutando em desacordo com a predominância de passividade esperada do gênero feminino. E sempre com o mesmo discurso de que a mulher não pertence àquele espaço. 
                        </Paragrafocenas>
                    </ContainerCenas>

                    <ContainerCenas>
                        <MiniCardTitulo>
                            <BolinhaCenas>
                                  <SimboloFilmes src={capitaMascara}/>
                            </BolinhaCenas>

                            <TituloCenas>Motoqueiro tentando atrair a atenção de Carol</TituloCenas>
                        </MiniCardTitulo>

                        <ContainerInformacoesCenas>
                            <ImagCenas2 src={cenaMotoqueiro}/>
                        </ContainerInformacoesCenas>

                        <Paragrafocenas>
                         Quando Carol chegou à Terra, estava se esforçando para ler o mapa em suas mãos, quando um motociclista se aproximou, tentando chamar a sua atenção, chamando de vários apelidos desnecessários ou fazendo barulho ao acelerar a moto. Logo que ele desiste, começa a chamá-la de aberração e entra no bar indignado por ser ignorado pela vítima. Essa cena é interessante, pois os roteiristas trouxeram o assédio, uma situação que a maioria das mulheres já enfrentou e identificou-se com a personagem. Reforçando o desconforto e a ideia de que todos deveriam gostar de lidar com esse tipo de problema. Danvers tem a brilhante ideia de se vingar e pegar emprestado a motocicleta do assediador.
                        </Paragrafocenas>
                    </ContainerCenas>
                </CardCenas>

                {/* card informações */}

                 <CardInformacoes>

                    <TituloInfo>
                        Ficha Técnica
                    </TituloInfo>

                    <Poster src={capitaMarvel}/>

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

export default CapitaMarvel