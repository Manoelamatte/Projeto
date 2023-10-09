import { Container3, ContainerCenter, ContainerGeral, ContainerGeral2 } from "../../styledGlobal"
import { BotaoFilmes, CardFilmes, ContainerFilmes1, ContainerFilmes2, ContainerFilmesGeral, Imagem, ImagemFilmes, SubtituloFilmes, TituloFilmes } from "./styled"
import posterMulherMaravilha from "../../assets/posterMulherMaravilha.jpg"
import capitaMarvel from "../../assets/capitaMarvel.jpg"
import esquadraoSuicida from "../../assets/esquadraoSuicida.jpg"
import homemFerro1 from "../../assets/homemFerro1.jpg"
import homemFerro2 from "../../assets/homemFerro2.jpg"
import mulherGato from "../../assets/mulherGato.jpg"
import quartetofantatisco from "../../assets/quartetofantastico.jpg"
import ligadaJustica from "../../assets/ligadaJustica.jpg"
import Header2 from "../../components/Header/Header2"
import { useNavigate } from "react-router-dom"
import vingadores from "../../assets/vingadores.png"

function Filmes(){

    const navigate = useNavigate()

    const goToCapitaMarvel = ()=>{
        navigate('/capitamarvel')
    }

    const goToMulherGato =()=>{
        navigate('/mulhergato')
    }

    const goToQuarteto =()=>{
        navigate('/quartetofantastico')
    }

    const goToHomemFerro = ()=>{
        navigate('/homemferro')
    }

    const goToHomemFerro2 = ()=>{
        navigate('/homemferro2')
    }

    const goToMulherMaravilha = ()=>{
        navigate('/mulhermaravilha')
    }

    return(
        <>
        <Container3>
            <Header2/>

            {/* <Carousel/> */}
            <Imagem src={vingadores}/>
            <TituloFilmes>Filmes Marvel </TituloFilmes>
            <SubtituloFilmes>Explore os filmes utilizados no Projeto</SubtituloFilmes>

            <ContainerCenter>
                <ContainerFilmesGeral>
                <CardFilmes>

                    <ContainerFilmes1>
                        <BotaoFilmes onClick={goToMulherGato}>
                            <ImagemFilmes src={mulherGato}/>
                            Mulher Gato (2004)
                        </BotaoFilmes>

                        <BotaoFilmes onClick={goToQuarteto}>
                            <ImagemFilmes src={quartetofantatisco}/>
                            Quarteto Fantástico (2005)
                        </BotaoFilmes>

                        <BotaoFilmes onClick={goToHomemFerro}>
                            <ImagemFilmes src={homemFerro1}/>
                            Homem de Ferro (2008)
                        </BotaoFilmes>

                        <BotaoFilmes onClick={goToHomemFerro2}>
                            <ImagemFilmes src={homemFerro2}/>
                            Homem de Ferro 2 (2010)
                        </BotaoFilmes>
                    </ContainerFilmes1>

                    <ContainerFilmes2>

                        <BotaoFilmes>
                            <ImagemFilmes src={esquadraoSuicida}/>
                            Esquadrão Suicida (2016)
                        </BotaoFilmes>

                        <BotaoFilmes>
                            <ImagemFilmes src={ligadaJustica}/>
                            
                        </BotaoFilmes>

                        <BotaoFilmes onClick={goToMulherMaravilha}>
                            <ImagemFilmes src={posterMulherMaravilha}/>
                            Mulher Maravilha (2017)
                        </BotaoFilmes>

                        <BotaoFilmes onClick={goToCapitaMarvel}>
                            <ImagemFilmes src={capitaMarvel}/>
                            Capitã Marvel (2019)
                        </BotaoFilmes>

                    </ContainerFilmes2>

                </CardFilmes>
                </ContainerFilmesGeral>
            </ContainerCenter>
        </Container3>
        </>
    )
}

export default Filmes