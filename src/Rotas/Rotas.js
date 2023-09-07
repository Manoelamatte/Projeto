import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../paginas/1_Home/Home"
import Login from "../paginas/2_Login/Login"
import Cadastro from "../paginas/3_Cadastro/Cadastro"
import Principal from "../paginas/4_Principal/Principal"

function Rotas(){
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route index element ={<Home/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="cadastro" element={<Cadastro/>}/>
                <Route path="principal" element={<Principal/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Rotas