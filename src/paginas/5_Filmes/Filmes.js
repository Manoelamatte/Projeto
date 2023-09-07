import { ContainerCenter, ContainerGeral } from "../../styledGlobal"
import { BotaoFilmes, CardFilmes, ContainerFilmes1, ContainerFilmes2, ImagemFilmes } from "./styled"
import posterMulherMaravilha from "../../assets/posterMulherMaravilha.jpg"
import capitaMarvel from "../../assets/capitaMarvel.jpg"
import esquadraoSuicida from "../../assets/esquadraoSuicida.jpg"
import homemFerro1 from "../../assets/homemFerro1.jpg"
import homemFerro2 from "../../assets/homemFerro2.jpg"
import mulherGato from "../../assets/mulherGato.jpg"
import quartetofantatisco from "../../assets/quartetofantastico.jpg"
import ligadaJustica from "../../assets/ligadaJustica.jpg"
import Header2 from "../../components/Header/Header2"

function Filmes(){
    return(
        <>
        <ContainerGeral>
            <Header2/>

            <ContainerCenter>
                <CardFilmes>

                    <ContainerFilmes1>
                        <BotaoFilmes>
                            <ImagemFilmes src={mulherGato}/>
                        </BotaoFilmes>

                        <BotaoFilmes>
                            <ImagemFilmes src={quartetofantatisco}/>
                        </BotaoFilmes>

                        <BotaoFilmes>
                            <ImagemFilmes src={homemFerro1}/>
                        </BotaoFilmes>

                        <BotaoFilmes>
                            <ImagemFilmes src={homemFerro2}/>
                        </BotaoFilmes>
                    </ContainerFilmes1>

                    <ContainerFilmes2>

                        <BotaoFilmes>
                            <ImagemFilmes src={esquadraoSuicida}/>
                        </BotaoFilmes>

                        <BotaoFilmes>
                            <ImagemFilmes src={ligadaJustica}/>
                        </BotaoFilmes>

                        <BotaoFilmes>
                            <ImagemFilmes src={posterMulherMaravilha}/>
                        </BotaoFilmes>

                        <BotaoFilmes>
                            <ImagemFilmes src={capitaMarvel}/>
                        </BotaoFilmes>

                    </ContainerFilmes2>

                </CardFilmes>
            </ContainerCenter>
        </ContainerGeral>
        </>
    )
}

export default Filmes