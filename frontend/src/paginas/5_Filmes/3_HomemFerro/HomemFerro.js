import Header2 from "../../../components/Header/Header2"
import { ContainerGeral2 } from "../../../styledGlobal"
import { BolinhaCenas, BotaoStreaming, CardCenas, CardInformacoes, ContainerCenas, FilmeCard1, FilmeCard2, ImgFilmes, MiniCardTitulo, Poster, SimboloFilmes, Textinhos, TituloCenas, TituloInfo } from "../8_CapitaMarvel/styled"
import WallFerro from "../../../assets/WallFerro.png"
import homemFerro1 from "../../../assets/homemFerro1.jpg"
import mascaraHF from "../../../assets/mascaraHF.png"

function HomemFerro(){
    return(
        <>
        <ContainerGeral2>
            <Header2/>

            <FilmeCard1>
                <ImgFilmes src={WallFerro}/>        
            </FilmeCard1>

            
            <BotaoStreaming>DISNEY +</BotaoStreaming>


{/* ....................................................................... */}
            <FilmeCard2>
                <CardCenas>
                    <ContainerCenas>
                        <MiniCardTitulo>
                            <BolinhaCenas>
                                <SimboloFilmes src={mascaraHF}/>
                            </BolinhaCenas>

                            <TituloCenas>oi</TituloCenas>
                        </MiniCardTitulo>
                    </ContainerCenas>

                    <ContainerCenas>
                        <MiniCardTitulo>
                            <BolinhaCenas>
                                <SimboloFilmes src={mascaraHF}/>
                            </BolinhaCenas>

                            <TituloCenas>oi</TituloCenas>
                        </MiniCardTitulo>
                    </ContainerCenas>

                    <ContainerCenas>
                        <MiniCardTitulo>
                            <BolinhaCenas>
                                <SimboloFilmes src={mascaraHF}/>
                            </BolinhaCenas>

                            <TituloCenas>oi</TituloCenas>
                        </MiniCardTitulo>
                    </ContainerCenas>

                    <ContainerCenas>
                        <MiniCardTitulo>
                            <BolinhaCenas>
                                <SimboloFilmes src={mascaraHF}/>
                            </BolinhaCenas>

                            <TituloCenas>oi</TituloCenas>
                        </MiniCardTitulo>
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