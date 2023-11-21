import Header2 from "../../../components/Header/Header2"
import { ContainerGeral2 } from "../../../styledGlobal"
import { BolinhaCenas, BotaoStreaming, CardCenas, CardInformacoes, ContainerCenas, ContainerInformacoesCenas, Disponivel, FilmeCard1, FilmeCard2, ImagCenas2, ImgFilmes, MiniCardTitulo, Paragrafocenas, Poster, SimboloFilmes, Textinhos, TituloCenas, TituloInfo } from "../8_CapitaMarvel/styled"
import deadpoolPoster from "../../../assets/deadpoolPoster.jpg"
import wallDeadpool from "../../../assets/wallDeadpool.png"
import MascaraDead from "../../../assets/MascaraDead.png"
import cenaDeadpool from "../../../cenas/6_Deadpool/cenaDeadpool.jpeg"
import MulherAssed from "../../../cenas/6_Deadpool/MulherAssed.jpeg"
import DeadPu from "../../../cenas/6_Deadpool/DeadPu.jpeg"
import cenaMis from "../../../cenas/6_Deadpool/cenaMis.jpeg"


function Deadpool(){
    return(
        <>
        <ContainerGeral2>
            <Header2/>

                <FilmeCard1>
                    <ImgFilmes src={wallDeadpool}/>
                </FilmeCard1>

                <BotaoStreaming>DISNEY +</BotaoStreaming>
                <Disponivel>Disponível em: </Disponivel>

                <FilmeCard2>

                    <CardCenas>
                        <ContainerCenas>
                            <MiniCardTitulo>
                                <BolinhaCenas>
                                    <SimboloFilmes src={MascaraDead}/>
                                </BolinhaCenas>

                                <TituloCenas>Deadpool intimidando uma das vilãs</TituloCenas>
                            </MiniCardTitulo>

                            <ContainerInformacoesCenas>
                                <ImagCenas2 src={cenaDeadpool}/>
                            </ContainerInformacoesCenas>

                            <Paragrafocenas>
                                Na primeira cena, Deadpool está na clínica para iniciar seu tratamento contra o câncer, que, na realidade, se torna um local de experiências ilegais. Nessa cena, o personagem principal começa a intimidar uma das mulheres que trabalham no espaço, expressões como “Você não é forte demais para uma mulher?” e “Qual o do palito de fósforo, adora meter coisas na boca?”, foram expressas pelo protagonista de forma sarcástica e intimidadora, ao passo em que diminuía a força e os princípios morais da mulher, ao comparar sua força com a de um homem, e se justificar dizendo que ela não poderia ser uma mulher, uma vez que era muito forte.
                            </Paragrafocenas>
                        </ContainerCenas>


                        <ContainerCenas>
                            <MiniCardTitulo>
                                <BolinhaCenas>
                                    <SimboloFilmes  src={MascaraDead}/>
                                </BolinhaCenas>

                                <TituloCenas>Um homem assediando a personagem Vanessa</TituloCenas>
                            </MiniCardTitulo>

                            <ContainerInformacoesCenas>
                                <ImagCenas2 src={MulherAssed}/>
                            </ContainerInformacoesCenas>

                            <Paragrafocenas>
                                Outrossim, a primeira interação do personagem principal com sua futura namorada ocorre em um bar. Vestindo roupas curtas e usando uma linguagem carnal, conhecemos Vanessa, uma mulher forte e independente. Na cena em questão, Vanessa e Deadpool estavam se conhecendo, quando um homem agarra Vanessa e diz: “Eu pegaria”. Ela, então, se defende, exigindo que o homem se desculpasse. A maioria das cenas em que Vanessa participa está relacionada à nudes ou à exaltação de seu corpo. Apesar de apresentar alguns destaques relevantes, o foco está inteiramente concentrado em seu corpo e dotes sexuais. Por exemplo, em uma cena no bar, o longa dá uma ênfase desnecessária à sua nádega. 
                            </Paragrafocenas>
                        </ContainerCenas>

                        <ContainerCenas>
                            <MiniCardTitulo>
                                <BolinhaCenas>
                                    <SimboloFilmes  src={MascaraDead}/>
                                </BolinhaCenas>

                                <TituloCenas> Wade Wilson em uma casa de adultos</TituloCenas>
                            </MiniCardTitulo>

                            <ContainerInformacoesCenas>
                                <ImagCenas2 src={DeadPu}/>
                            </ContainerInformacoesCenas>

                            <Paragrafocenas>
                                 No entanto, uma das cenas mais desagradáveis do longa-metragem se desenrola em uma casa de adultos. Ao longo da cena, é possível notar mulheres dançando sem roupas para os homens. Porém o problema está na quantidade de cenas em que se concentram nas mulheres dançando sem roupa, ou na grande ênfase dada aos seus corpos nus. Em diversos momentos, a câmera se concentra nos corpos das mulheres, mostrando-lhes sensualizando para os homens que estavam presentes na cena. Essa cena apenas reforça a objetificação das mulheres nos filmes, bem como o papel que lhes é atribuído como um objeto de prazer para os homens.
                            </Paragrafocenas>
                        </ContainerCenas>

                        <ContainerCenas>
                            <MiniCardTitulo>
                                <BolinhaCenas>
                                    <SimboloFilmes src={MascaraDead}/>
                                </BolinhaCenas>

                                <TituloCenas>Expressões machistas e sexistas</TituloCenas>
                            </MiniCardTitulo>

                            <ContainerInformacoesCenas>
                               <ImagCenas2 src={cenaMis}/>
                            </ContainerInformacoesCenas>

                            <Paragrafocenas>
                                É crucial destacar as diversas expressões machistas e sexistas presentes no filme. Uma cena de grande destaque ocorre durante a batalha final do filme, quando a amiga super-heroína de Deadpool, Negasonic, o auxilia na luta contra os vilões. Os poderes de Negasonic no filme se concentram na criação de explosões com o corpo. Dessa forma, os roteiristas, com o objetivo de tornar o filme mais divertido, colocaram Deadpool para pronunciar a seguinte frase: “Tenho pena de quem quiser comê-la na formatura”, sempre associando a mulher a algo sexual.
                            </Paragrafocenas>
                        </ContainerCenas>

                    </CardCenas>


    

                    <CardInformacoes>
                        <TituloInfo>
                            Ficha Técnica
                        </TituloInfo>

                        <Poster src={deadpoolPoster}/>

                        <Textinhos>
                             Título original: Deadpool
                        </Textinhos>

                        <Textinhos>
                             Idioma Original: Inglês 
                        </Textinhos>

                        <Textinhos>
                            Título da tradução brasileira: Deadpool
                        </Textinhos>

                        <Textinhos>
                             Lançamento: 11 de fevereiro de 2016
                        </Textinhos>

                        <Textinhos>
                             País: Estados Unidos da América
                        </Textinhos>

                        <Textinhos>
                            Direção: Tim Miller
                        </Textinhos>

                        <Textinhos>
                             Roteiro: Rhett Reese e Paul Wernick
                        </Textinhos>

                        <Textinhos>
                            Edição: Julian Clarke
                        </Textinhos>

                        <Textinhos>
                            Fotografia: Ken Seng
                        </Textinhos>            

                        <Textinhos>
                             Música: Junkie XL
                        </Textinhos>            

                        <Textinhos>
                            Produção: Simon Kinberg, Ryan Reynolds e Lauren Shuler Donner
                        </Textinhos>

                        <Textinhos>
                             Atores principais: Ryan Reynolds (Deadpool), Morena Baccarin (Vanessa), Ed Skrein (Ajax), T. J. Miller (Fuinha), Gina Carano (Pó de Anjo), Leslie Uggams (Al Cega) e Brianna Hildebrand (Negasonic)
                        </Textinhos>

                        <Textinhos>
                            Gênero: Comédia de ação
                        </Textinhos>

                        <Textinhos>
                            Duração: 1h 50m
                        </Textinhos>
                    </CardInformacoes>
                </FilmeCard2>
        </ContainerGeral2>
        </>
    )
}

export default Deadpool