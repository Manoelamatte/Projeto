import Header2 from "../../../components/Header/Header2";
import { ContainerGeral2 } from "../../../styledGlobal";
import { BolinhaCenas, BotaoStreaming, CardCenas, CardInformacoes, ContainerCenas, FilmeCard1, FilmeCard2, ImgFilmes, MiniCardTitulo, Poster, Textinhos, TituloInfo } from "../8_CapitaMarvel/styled";
import wallEsquadrao from "../../../assets/wallEsquadrao.png"
import esquadraoSuicida from "../../../assets/esquadraoSuicida.jpg"

function EsquadraoSuicida(){
    return(
        <>
        <ContainerGeral2>
            <Header2/>

            <FilmeCard1>
                <ImgFilmes src={wallEsquadrao}/>
            </FilmeCard1>

                <BotaoStreaming>HBO MAX</BotaoStreaming>

            <FilmeCard2>
                <CardCenas>
                    <ContainerCenas>
                        <MiniCardTitulo>
                            <BolinhaCenas>

                            </BolinhaCenas>
                        </MiniCardTitulo>
                    </ContainerCenas>
                </CardCenas>

                <CardInformacoes>
                    <TituloInfo>
                        Ficha Técnica
                    </TituloInfo>

                    <Poster src={esquadraoSuicida}/>

                    <Textinhos>
                     Título original: Suicide Squad
                    </Textinhos>

                    <Textinhos>
                     Idioma Original: Inglês 
                    </Textinhos>

                    <Textinhos>
                     Título da tradução brasileira: Esquadrão Suicida
                    </Textinhos>

                    <Textinhos>
                     Lançamento: 5 de agosto de 2016
                    </Textinhos>

                    <Textinhos>
                     País: Estados Unidos da América
                    </Textinhos>

                    <Textinhos>
                     Direção: David Ayer
                    </Textinhos>

                    <Textinhos>
                     Roteiro: David Ayer
                    </Textinhos>

                    <Textinhos>
                     Edição: John Gilroy
                    </Textinhos>

                    <Textinhos>
                     Fotografia: Roman Vasyanov
                    </Textinhos>

                    <Textinhos>
                     Música: Steven Price
                    </Textinhos>

                    <Textinhos>
                     Produção: Charles Roven e Richard Suckle
                    </Textinhos>

                    <Textinhos>
                     Atores principais:
                    </Textinhos>

                    <Textinhos>
                     Gênero: ação, aventura, fantasia e ficção científica
                    </Textinhos>

                    <Textinhos>
                     Duração: 
                    </Textinhos>

                </CardInformacoes>
            </FilmeCard2>
        </ContainerGeral2>
        </>
    )
}

export default EsquadraoSuicida