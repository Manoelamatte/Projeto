import Header from "../../components/Header/Header"
import { ContainerCenter, ContainerGeral2 } from "../../styledGlobal"
import { ContainerMiniDivis, ContainerSobre, Divisinhas, ImagemHome, ImgH, ImgHomeSobre, InputHome, MiniDivis, SobreOq, TextoSobre, TitulosHome } from "./styled"
import style from "./style.css"
import { Content, Slides } from "../../components/Carrossel/styled"
import Carrossel from "../../components/Carrossel/Carrossel"
import imagemAutora from "../../assets/imagemAutora.png"
import Marvel from "../../assets/Marvel.jpg"
import MarvelH from "../../assets/MarvelH.png"
import dcW from "../../assets/dcW.jpg"
import DcH from "../../assets/DcH.png"
import heroinasMavelHQ from "../../assets/heroinasMavelHQ.jpg"


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

                {/* <Carrossel/> */}

                <ContainerSobre>
                    <SobreOq>
                        <h1>Sobre o projeto:</h1>
                        <TextoSobre>
                            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                        </TextoSobre>
                    </SobreOq>

                    <ImagemHome>
                        <ImgHomeSobre src={heroinasMavelHQ}/>
                    </ImagemHome>
                       
                </ContainerSobre>


                 <ContainerMiniDivis>
                    <MiniDivis>
                        <ImgH src={imagemAutora}/>

                        <TitulosHome>
                            Sobre a autora
                        </TitulosHome>  
                    </MiniDivis>
        
                    <MiniDivis>
                    
                    </MiniDivis>

                    <MiniDivis>
                    
                    </MiniDivis>
                </ContainerMiniDivis> 

   
        </ContainerGeral2>
        </>
    )
}

export default Home