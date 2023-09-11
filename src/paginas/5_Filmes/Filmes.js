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
import { useNavigate } from "react-router-dom"
import MulherMaravilha from "./7_MulherMaravilha/MulherMaravilha"

function Filmes(){

    const navigate = useNavigate()

    const goToCapitaMarvel = ()=>{
        navigate('/capitamarvel')
    }

    const goToMulherMaravilha = ()=>{
        navigate('mulhermaravilha')
    }

   const goToMulherGato = ()=>{
    navigate('mulhergato')
   }
    return(
        <>
        <ContainerGeral>
            <Header2/>

            <ContainerCenter>
                <CardFilmes>

                    <ContainerFilmes1>
                        <BotaoFilmes onClick={goToMulherGato}>
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

                        <BotaoFilmes onClick={goToMulherMaravilha}>
                            <ImagemFilmes src={posterMulherMaravilha}/>
                        </BotaoFilmes>

                        <BotaoFilmes onClick={goToCapitaMarvel}>
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