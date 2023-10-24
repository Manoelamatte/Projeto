import Header2 from "../../../components/Header/Header2"
import { ContainerGeral2 } from "../../../styledGlobal"
import { BolinhaCenas, BotaoStreaming, CardCenas, CardInformacoes, ContainerCenas, ContainerInformacoesCenas, FilmeCard1, FilmeCard2, Gifs, IMGCenas, ImagCenas2, ImgFilmes, MiniCardTitulo, Poster, SimboloFilmes, Textinhos, TituloCenas, TituloDisponivel, TituloInfo } from "../8_CapitaMarvel/styled"
import mulherGato from "../../../assets/mulherGato.jpg"
import WallMulherG from "../../../assets/WallMulherG.png"
import uniformeMG from "../../../assets/uniformeMG.jpg"
import Cena2Uniforme from "../../../assets/Cena2Uniforme.webp"
import Gatomascara from "../../../assets/Gatomascara.png"
import lambidaCena from "../../../cenas/1_MulherGato/lambidaCena.jpeg"
import sally from "../../../cenas/1_MulherGato/sally.jpg"
import Tom from "../../../cenas/1_MulherGato/Tom.jpeg"
// import bundaMG from "../../../cenas/1_MulherGato/bundaMG.gif"

function MulherGato(){
    return(
     <>
     <ContainerGeral2>
        <Header2/>

        <FilmeCard1>
            <ImgFilmes src={WallMulherG}/>
        </FilmeCard1>

            <BotaoStreaming>HBO MAX</BotaoStreaming>

{/* ................................................................................... */}


        <FilmeCard2>
            <CardCenas> 
                
                <ContainerCenas>
                    <MiniCardTitulo>
                        <BolinhaCenas>
                            <SimboloFilmes src={Gatomascara}/>
                        </BolinhaCenas>

                        <TituloCenas>Uniforme Mulher gato</TituloCenas>
                    </MiniCardTitulo>

                        <ContainerInformacoesCenas>
                            <IMGCenas src={uniformeMG}/> 
                            <IMGCenas src={Cena2Uniforme}/> 
                        </ContainerInformacoesCenas>

                        oi
                </ContainerCenas>

                <ContainerCenas>
                    <MiniCardTitulo>
                        <BolinhaCenas>
                             <SimboloFilmes src={Gatomascara}/>
                        </BolinhaCenas>

                    </MiniCardTitulo>

                        <ContainerInformacoesCenas>
                            <ImagCenas2 src={lambidaCena}/>
                        </ContainerInformacoesCenas>
                </ContainerCenas>

                <ContainerCenas>
                    <MiniCardTitulo>
                        <BolinhaCenas>
                            <SimboloFilmes src={Gatomascara}/>
                        </BolinhaCenas>
                    </MiniCardTitulo>

                    <ContainerInformacoesCenas>
                        {/* <Gifs src={bundaMG}/> */}
                    </ContainerInformacoesCenas>
                </ContainerCenas>

                <ContainerCenas>
                    <MiniCardTitulo>
                        <BolinhaCenas>
                            <SimboloFilmes src={Gatomascara}/>
                        </BolinhaCenas>
                    </MiniCardTitulo>

                    <ContainerInformacoesCenas>
                        <ImagCenas2 src={Tom}/>
                    </ContainerInformacoesCenas>
                </ContainerCenas>

                <ContainerCenas>
                    <MiniCardTitulo>
                        <BolinhaCenas>
                            <SimboloFilmes src={Gatomascara}/>
                        </BolinhaCenas>
                    </MiniCardTitulo>

                    <ContainerInformacoesCenas>
                        <ImagCenas2 src={sally}/>
                    </ContainerInformacoesCenas>
                </ContainerCenas>

            </CardCenas>



            {/* card informações */}

            <CardInformacoes>
                    <TituloInfo>
                        Ficha Técnica
                    </TituloInfo>

                    <Poster src={mulherGato}/>

                <Textinhos>
                    Título original: Catwoman
                </Textinhos>

                <Textinhos>
                        Idioma Original: Inglês 
                </Textinhos>

                    <Textinhos>
                    Título da tradução brasileira: Mulher-Gato
                    </Textinhos>

                    <Textinhos>
                    Lançamento: 19 de julho de 2004
                    </Textinhos>

                    <Textinhos>
                    País: Estados Unidos da América
                    </Textinhos>

                    <Textinhos>
                    Direção: Jean Christophe Comar
                    </Textinhos>

                    <Textinhos>
                    Roteiro: John Rogers, John D.Brancato e Michael Ferris
                    </Textinhos>

                    <Textinhos>
                        Edição: Sylvie Landra 
                    </Textinhos>

                    <Textinhos>
                        Fotografia: Thierry Arbogast 
                    </Textinhos>

                    <Textinhos>
                        Música: Klaus Badelt
                    </Textinhos>

                    <Textinhos>
                        Produção: Denise Di Novi, Edward L e McDonnell
                    </Textinhos>

                    <Textinhos>
                        Atores principais: Halle Berry (Patience Phillips/Mulher-Gato), Benjamin Bratt (Tom Lone), Sharon Stone (Laurel Hedare), Lambert Wilson (George Hedare), Frances Conroy (Ophelia Powers/Cat Lady), Alex Borstein (Sally), Michael Massee (Armando), Byron Mann (Wesley), Kim Smith (Drina), Peter Wingfield (Dr.Ivan Slavicky) e Berend McKenzie (Lance).
                    </Textinhos>

                    <Textinhos>
                    Gênero: Ação e fantasia
                    </Textinhos>

                    <Textinhos>
                        Duração: 1h 44m
                    </Textinhos>
            </CardInformacoes>
        </FilmeCard2>
     </ContainerGeral2>
     </>   
    )
}

export default MulherGato