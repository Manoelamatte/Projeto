import Header from "../../components/Header/Header"
import {ContainerGeral2 } from "../../styledGlobal"
import { CardSobre, ContainerSobre, InputHome, CardTituloHome, TituloHome } from "./styled"
import style from "./style.css"
import { Content, Slides } from "../../components/Carrossel/styled"
import Marvel from "../../assets/Marvel.jpg"
import MarvelH from "../../assets/MarvelH.png"
import dcW from "../../assets/dcW.jpg"
import DcH from "../../assets/DcH.png"
import Footer from "../../components/Footer/Footer"


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
                        {/* <TituloHome>Sobre:</TituloHome> */}
                    </CardTituloHome>
                </CardSobre>

                <CardSobre>
                      <CardTituloHome>
                        {/* <TituloHome>Sobre:</TituloHome> */}
                      </CardTituloHome>
                </CardSobre>
            </ContainerSobre>

            {/* <Footer/> */}
        </ContainerGeral2>
        </>
    )
}

export default Home