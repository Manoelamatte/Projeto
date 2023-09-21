import { Carousel } from "react-responsive-carousel";
import Marvel from "../../assets/Marvel.jpg"
import MarvelH from "../../assets/MarvelH.png"
import DcH from "../../assets/DcH.png"
import { ImagemC } from "./styled";
import dcW from "../../assets/dcW.jpg"

function Carrossel(){
    return(
        <>
       <Carousel>
            <div>
                <ImagemC src={Marvel} alt="Image1" />
            </div>
        
            <div>
               <ImagemC src={MarvelH} alt="Imagem 2" />
            </div>

            <div>
                <ImagemC src={dcW} alt="Imagem 3" />
            </div>

            <div>
                <ImagemC src={DcH} alt="Imagem 3" />
            </div>
    </Carousel>
        </>
    )
}

export default Carrossel