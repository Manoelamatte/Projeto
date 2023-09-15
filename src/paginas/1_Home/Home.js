import Header from "../../components/Header/Header"
import { ContainerCenter, ContainerGeral2 } from "../../styledGlobal"
import { ContainerMiniDivis, Divisinhas, InputHome, MiniDivis } from "./styled"
import style from "./style.css"
import Marvel from "../../assets/Marvel.jpg"
import MarvelH from "../../assets/MarvelH.png"
import dc from "../../assets/dc.jpg"
import DcH from "../../assets/DcH.png"
import { Content, Slides } from "../../components/Carrossel/styled"



function Home(){
    return(
        <>
        <ContainerGeral2>
            <Header/>
                
           <Content>
                <Slides>
                <InputHome type="radio" name="slide" id="slide1" checked/>
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
                    <img src={dc} alt="dc"/>
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

                

                 <ContainerMiniDivis>
                    <MiniDivis>
                       
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