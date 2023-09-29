import React from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import vingadores from "../../assets/vingadores.png"
import { Imagem } from "./styled";


function Carrusesel() {
  return (
    <Carousel>
      <div>
        <Imagem src={vingadores} alt="Imagem 1" />
       
      </div>
      <div>
        <Imagem src="" alt="Imagem 2" />
      </div>
      <div>
        <Imagem src="DcH.png" alt="Imagem 3" />
      </div>
    </Carousel>
  );
};

export default Carrusesel;
