import Header2 from "../../../components/Header/Header2"
import { ContainerGeral2 } from "../../../styledGlobal"
import { BolinhaCenas, CardCenas, CardInformacoes, ContainerCenas, ContainerInformacoesCenas, FilmeCard1, FilmeCard2, ImagCenas2, ImgFilmes, MiniCardTitulo, Poster, SimboloFilmes, Textinhos, TituloCenas, TituloInfo } from "../8_CapitaMarvel/styled"
import deadpoolPoster from "../../../assets/deadpoolPoster.jpg"
import wallDeadpool from "../../../assets/wallDeadpool.png"
import MascaraDead from "../../../assets/MascaraDead.png"
import cenaDeadpool from "../../../cenas/6_Deadpool/cenaDeadpool.jpeg"
import MulherAssed from "../../../cenas/6_Deadpool/MulherAssed.jpeg"

function Deadpool(){
    return(
        <>
        <ContainerGeral2>
            <Header2/>

                <FilmeCard1>
                    <ImgFilmes src={wallDeadpool}/>
                </FilmeCard1>

                <FilmeCard2>

                    <CardCenas>
                        <ContainerCenas>
                            <MiniCardTitulo>
                                <BolinhaCenas>
                                    <SimboloFilmes src={MascaraDead}/>
                                </BolinhaCenas>

                                <TituloCenas></TituloCenas>
                            </MiniCardTitulo>

                            <ContainerInformacoesCenas>
                                <ImagCenas2 src={cenaDeadpool}/>
                            </ContainerInformacoesCenas>
                        </ContainerCenas>


                        <ContainerCenas>
                            <MiniCardTitulo>
                                <BolinhaCenas>
                                    <SimboloFilmes  src={MascaraDead}/>
                                </BolinhaCenas>

                                <TituloCenas></TituloCenas>
                            </MiniCardTitulo>

                            <ContainerInformacoesCenas>
                                <ImagCenas2 src={MulherAssed}/>
                            </ContainerInformacoesCenas>
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