import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../paginas/1_Home/Home"
import Login from "../paginas/2_Login/Login"
import Cadastro from "../paginas/3_Cadastro/Cadastro"
import Principal from "../paginas/4_Principal/Principal"
import Filmes from "../paginas/5_Filmes/Filmes"
import CapitaMarvel from "../paginas/5_Filmes/8_CapitaMarvel/CapitaMarvel"
import Erro from "../paginas/6_Erro/Erro"
import Publicacao from "../paginas/7_Publicacao/Publicacao"
import MulherMaravilha from "../paginas/5_Filmes/7_MulherMaravilha/MulherMaravilha"

function Rotas(){
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route index element ={<Home/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="cadastro" element={<Cadastro/>}/>
                <Route path="principal" element={<Principal/>}/>
                <Route path="publicacao" element={<Publicacao/>}/>
                <Route path="filmes" element={<Filmes/>}/>
                <Route path="mulhermaravilha" element={<MulherMaravilha/>}/>
                <Route path="capitamarvel" element={<CapitaMarvel/>}/>
                {/* <Route path="*" element={<Erro/>}/> */}
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Rotas