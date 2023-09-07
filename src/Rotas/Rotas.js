import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../paginas/1_Home/Home"
import Login from "../paginas/2_Login/Login"
import Cadastro from "../paginas/3_Cadastro/Cadastro"
import Principal from "../paginas/4_Principal/Principal"
import Filmes from "../paginas/5_Filmes/Filmes"
import CapitaMarvel from "../paginas/5_Filmes/8_CapitaMarvel/CapitaMarvel"

function Rotas(){
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route index element ={<Home/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="cadastro" element={<Cadastro/>}/>
                <Route path="principal" element={<Principal/>}/>
                <Route path="filmes" element={<Filmes/>}/>
                <Route path="capitamarvel" element={<CapitaMarvel/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Rotas