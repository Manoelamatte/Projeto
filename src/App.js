
import Filmes from "./paginas/5_Filmes/Filmes";
import { GlobalStyle } from "./styledGlobal";
import Login from "./paginas/2_Login/Login";
import CapitaMarvel from "./paginas/5_Filmes/8_CapitaMarvel/CapitaMarvel";
import Home from "./paginas/1_Home/Home";
import { Route } from "react-router-dom";
import Rotas from "./Rotas/Rotas";
import Erro from "./paginas/6_Erro/Erro";


function App() {
  return (
    <>
    <GlobalStyle/>
    <Rotas/>
  
    </>
  );
}

export default App;
