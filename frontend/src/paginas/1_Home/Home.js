import Header from "../../components/Header/Header"
import {ContainerGeral2 } from "../../styledGlobal"
import { CardSobre, ContainerSobre, InputHome, CardTituloHome, TituloHome, ParagrafoSobre, BotaoIcones, IconesSobre, ContainerIcones, FotoAutora, CardFoto, CardFinal } from "./styled"
import style from "./style.css"
import { Content, Slides } from "../../components/Carrossel/styled"
import Marvel from "../../assets/Marvel.jpg"
import MarvelH from "../../assets/MarvelH.png"
import dcW from "../../assets/dcW.jpg"
import DcH from "../../assets/DcH.png"
import Footer from "../../components/Footer/Footer"
import fotoPerfil from "../../assets/fotoPerfil.png"
import iconeGithub from "../../assets/iconeGithub.png"
import instagram from "../../assets/instagram.png"
import documento from "../../assets/documento.png"

function Home(){
    return(
        <>
        <ContainerGeral2>
            <Header/>
                
           <Content>
                <Slides>
                <InputHome type="radio" name="slide" id="slide1" />
                <InputHome type="radio" name="slide" id="slide2"/>
                <InputHome type="radio" name="slide" id="slide3"/>
                <InputHome type="radio" name="slide" id="slide4"/>

                <div class="slide s1">
                    <img src={Marvel} alt="marvel"/>
                </div>

                <div class="slide">
                    <img src={MarvelH} alt="girl power"/>
                </div>

                <div class="slide">
                    <img src={dcW} alt="dc"/>
                </div>

                <div class="slide">
                    <img src={DcH} alt="girl power dc"/>
                </div>
                </Slides>

            <div class="navegation">
                <label class="bar" for="slide1"></label>
                <label class="bar" for="slide2"></label>
                <label class="bar" for="slide3"></label>
                <label class="bar" for="slide4"></label>
            </div>
            </Content>

           {/* fim carrossel */}

                
            <ContainerSobre>
                <CardSobre>
                    <CardTituloHome>
                        <TituloHome>
                            DE ONDE VEIO O CINE FEMINISMO?
                        </TituloHome>
                    </CardTituloHome>

                    <ParagrafoSobre>
                      O projeto se concentra na análise das representações das mulheres em 8 filmes que compõem os 
                      Universos Cinematográficos Marvel e DC, analisando aspectos como figurinos, narrativas, enquadramentos
                      e os seus papéis nos filmes. Sendo assim, o objetivo geral deste trabalho é desenvolver uma ferramenta 
                      educativa para fornecer análises críticas e reflexivas sobre as cenas sexualizadas de personagens femininas
                      em filmes de super-heróis.  Além disso, promover um espaço de discussão construtiva sobre a representação de gênero nas produções da Marvel e DC.
                      </ParagrafoSobre>
                </CardSobre>

                <CardFoto>
                    <FotoAutora src={fotoPerfil}/>
                </CardFoto>
            </ContainerSobre>

            <CardFinal>
                <ContainerIcones>
                    <IconesSobre src={instagram}/>
                </ContainerIcones>

                <ContainerIcones>
                     <IconesSobre src={iconeGithub}/>
                </ContainerIcones>
                    
                <ContainerIcones>
                  <IconesSobre src={documento}/>
                </ContainerIcones>
            </CardFinal>
        </ContainerGeral2>
        </>
    )
}

export default Home