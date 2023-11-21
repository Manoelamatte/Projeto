import Header2 from "../../../components/Header/Header2"
import { ContainerGeral2 } from "../../../styledGlobal"
import { BolinhaCenas, BotaoStreaming, CardCenas, CardInformacoes, ContainerCenas, ContainerInformacoesCenas, Disponivel, FilmeCard1, FilmeCard2, ImagCenas2, ImgFilmes, MiniCardTitulo, Paragrafocenas, Poster, SimboloFilmes, Textinhos, TituloCenas, TituloInfo } from "../8_CapitaMarvel/styled"
import WallFerro from "../../../assets/WallFerro.png"
import homemFerro1 from "../../../assets/homemFerro1.jpg"
import mascaraHF from "../../../assets/mascaraHF.png"
import CenaJornalista from "../../../cenas/3_HomemFerro/CenaJornalista.png"
import DancaAviao from "../../../cenas/3_HomemFerro/DancaAviao.jpeg"
import Pepper from "../../../cenas/3_HomemFerro/Pepper.jpg"
import cenaLixo from "../../../cenas/3_HomemFerro/cenaLixo.jpeg"

function HomemFerro(){
    return(
        <>
        <ContainerGeral2>
            <Header2/>

            <FilmeCard1>
                <ImgFilmes src={WallFerro}/>        
            </FilmeCard1>

            
            <BotaoStreaming>DISNEY +</BotaoStreaming>
            <Disponivel>Disponível em: </Disponivel>


{/* ....................................................................... */}
            <FilmeCard2>
                <CardCenas>
                    <ContainerCenas>
                        <MiniCardTitulo>
                            <BolinhaCenas>
                                <SimboloFilmes src={mascaraHF}/>
                            </BolinhaCenas>

                            <TituloCenas>O segurança de Tony Stark elogiando a beleza da jornalista </TituloCenas>
                        </MiniCardTitulo>

                        <ContainerInformacoesCenas>
                            <ImagCenas2 src={CenaJornalista}/>
                        </ContainerInformacoesCenas>

                        <Paragrafocenas>
                            Como em qualquer filme de garanhão, o personagem principal é cercado por mulheres tentadoras e com roupas curtas, servindo como objeto sexual aos homens. Nesse mesmo instante, Tony e seu segurança particular apresentam um diálogo bem perturbador. Na cena, a jornalista da revista Vanity Fair se apresenta como Christine Everhart e questiona se pode fazer algumas perguntas ao Sr.Stark Nesse momento para fazê-lo olhar para a mulher, o seu segurança cochila “Ela é linda” e Stark responde “Opa!”. No final, a jornalista termina em sua cama, deixando uma imagem bastante distorcida sobre o profissionalismo feminismo.
                        </Paragrafocenas>
                    </ContainerCenas>

                    <ContainerCenas>
                        <MiniCardTitulo>
                            <BolinhaCenas>
                                <SimboloFilmes src={mascaraHF}/>
                            </BolinhaCenas>

                            <TituloCenas>A secretária de Tony Stark ofendendo a jornalista </TituloCenas>
                        </MiniCardTitulo>

                        <ContainerInformacoesCenas>
                            <ImagCenas2 src={cenaLixo}/>
                        </ContainerInformacoesCenas>

                        <Paragrafocenas>
                            Outro clássico que está presente na construção de filmes machistas, é essa grande rivalidade feminina. Em algumas histórias, essa rivalidade é explorada como uma fonte de conflito e drama, retratando mulheres competindo por amor, poder ou reconhecimento. Esses filmes podem reforçar estereótipos negativos, apresentando mulheres fofoqueiras, manipuladoras e invejosas umas com as outras. Em Homem de Ferro, esse fator é particularmente evidente entre os personagens Pepper e as mulheres que estão intimamente relacionadas com o personagem título, como a jornalista da revista Vanity Fair.
                        </Paragrafocenas>
                    </ContainerCenas>

                    <ContainerCenas>
                        <MiniCardTitulo>
                            <BolinhaCenas>
                                <SimboloFilmes src={mascaraHF}/>
                            </BolinhaCenas>

                            <TituloCenas>Comissárias de bordo dançam para o Tony e seu amigo</TituloCenas>
                        </MiniCardTitulo>

                        <ContainerInformacoesCenas>
                            <ImagCenas2 src={DancaAviao}/>
                        </ContainerInformacoesCenas>

                        <Paragrafocenas>
                            Sucessivamente, apresenta-se o personagem principal e seu amigo bebendo, enquanto as atendentes dançam no Pole Dance, demonstrando sensualidade, sem a metade do uniforme. Em seguida, surgem diversas cenas em que Tony Stark é o herói do filme, ao passo que as mulheres são enquadradas de diversas maneiras eróticas e carnais.
                        </Paragrafocenas>
                    </ContainerCenas>

                    <ContainerCenas>
                        <MiniCardTitulo>
                            <BolinhaCenas>
                                <SimboloFilmes src={mascaraHF}/>
                            </BolinhaCenas>

                            <TituloCenas>Pepper</TituloCenas>
                        </MiniCardTitulo>

                        <ContainerInformacoesCenas>
                            <ImagCenas2 src={Pepper}/>
                        </ContainerInformacoesCenas>
                        
                        <Paragrafocenas>
                                Apesar de ser uma personagem relevante para a trama, como assistente e interesse amoroso de Tony Stark, ela é, muitas vezes representada com estereótipos femininos clássicos. Além de ser frequentemente retratada com roupas inadequadas e com um foco excessivo em sua aparência física, o que acentua a sua sexualidade em detrimento de sua personalidade e das habilidades profissionais.
                            </Paragrafocenas>
                    </ContainerCenas>
                </CardCenas>


                {/* card informações */}
                <CardInformacoes>
                        <TituloInfo>
                        Ficha Técnica
                        </TituloInfo>

                        <Poster src={homemFerro1}/>

                        <Textinhos>
                            Título original: Iron Man
                        </Textinhos>

                        <Textinhos>
                        Idioma Original: Inglês
                        </Textinhos>

                        <Textinhos>
                        Título da tradução brasileira: Homem de Ferro
                        </Textinhos>

                        <Textinhos>
                        Lançamento: 30 de abril de 2008
                        </Textinhos>

                        <Textinhos>
                        País: Estados Unidos da América
                        </Textinhos>

                        <Textinhos>
                            Direção: Jon Favreau
                        </Textinhos>

                        <Textinhos>
                        Roteiro: Mark Fergus, Hawk Ostby, Art Marcum e Matt Holloway
                        </Textinhos>

                        <Textinhos>
                            Edição: Dan Lebental e Glen Scantlebury
                        </Textinhos>

                        <Textinhos>
                            Fotografia: Matthew Libatique
                        </Textinhos>

                        <Textinhos>
                        Música: Ramin Djawadi
                        </Textinhos>

                        <Textinhos>
                        Produção: Avi Arad e Kevin Feige
                        </Textinhos>

                        <Textinhos>
                        Atores principais: Robert Downey Jr (Tony Stark), Jon Favreau (Happy Hogan), Gwyneth Paltrow (Pepper Potts), Terrence Howard (Máquina de Combate), Jeff Bridges (Monge de Ferro), Leslie Bibb (Christine Everhart) e Paul Bettany (Jarvis)
                        </Textinhos>

                        <Textinhos>
                        Gênero: Ação, aventura e ficção científica
                        </Textinhos>

                        <Textinhos>
                            Duração: 2h 6m  
                        </Textinhos>
                </CardInformacoes>
            </FilmeCard2>
        </ContainerGeral2>
        </>
    )
}

export default HomemFerro