import { Container3, ContainerCenter, ContainerGeral, ContainerGeral2 } from "../../styledGlobal"
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
import { useNavigate } from "react-router-dom"
import Carousel from "../../components/Carousel/Carousel"

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

            <Carousel/>

            <ContainerCenter>
                <CardFilmes>

                    <ContainerFilmes1>
                        <BotaoFilmes onClick={goToMulherGato}>
                            <ImagemFilmes src={mulherGato}/>
                        </BotaoFilmes>

                        <BotaoFilmes onClick={goToQuarteto}>
                            <ImagemFilmes src={quartetofantatisco}/>
                        </BotaoFilmes>

                        <BotaoFilmes onClick={goToHomemFerro}>
                            <ImagemFilmes src={homemFerro1}/>
                        </BotaoFilmes>

                        <BotaoFilmes onClick={goToHomemFerro2}>
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

                        <BotaoFilmes onClick={goToMulherMaravilha}>
                            <ImagemFilmes src={posterMulherMaravilha}/>
                        </BotaoFilmes>

                        <BotaoFilmes onClick={goToCapitaMarvel}>
                            <ImagemFilmes src={capitaMarvel}/>
                        </BotaoFilmes>

                    </ContainerFilmes2>

                </CardFilmes>
            </ContainerCenter>
        </Container3>
        </>
    )
}

export default Filmes