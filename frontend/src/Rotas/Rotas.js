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
import MulherGato from "../paginas/5_Filmes/1_MulherGato/MulherGato"
import Quartetofantatisco from "../paginas/5_Filmes/2_QuartetoFantastico/QuartetoFantastico"
import HomemFerro from "../paginas/5_Filmes/3_HomemFerro/HomemFerro"
import HomemFerro2 from "../paginas/5_Filmes/4_HomemFerro2/HomemFerro2"
import EsquadraoSuicida from "../paginas/5_Filmes/5_EsquadraoSuicida/EsquadraoSuicida"
import Deadpool from "../paginas/5_Filmes/6_Deadpool/Deadpool"
import Comentarios from "../paginas/8_Comentarios/Comentarios"

function Rotas(){
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route index                    element ={<Home/>}/>
                <Route path="login"             element={<Login/>}/>
                <Route path="cadastro"          element={<Cadastro/>}/>
                <Route path="/principal"        element={<Principal/>}/>
                <Route path="publicacao"        element={<Publicacao/>}/>
                <Route path="filmes"            element={<Filmes/>}/>
                <Route path="/comentarios/:id"  element={<Comentarios/>}/> 
                {/* :id */}
                <Route path="mulhergato"        element={<MulherGato/>}/>
                <Route path="quartetofantastico" element={<Quartetofantatisco/>}/>
                <Route path="homemferro"        element={<HomemFerro/>}/>
                <Route path="homemferro2"       element={<HomemFerro2/>}/>
                <Route path="esquadraosuicida"  element={<EsquadraoSuicida/>}/>
                <Route path="deadpool"          element={<Deadpool/>}/>
                <Route path="mulhermaravilha"   element={<MulherMaravilha/>}/>
                <Route path="capitamarvel"      element={<CapitaMarvel/>}/>
                <Route path="*"                 element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Rotas