import { ContainerCenter, ContainerGeral } from "../../styledGlobal"
import { BotaoCadastro, CardVermelho, Cardbranco, ContainerCard, EscritaDireita, Input, Textfield, TitutoCadastro } from "./styled"
import imagemCadastro from "../../assets/imagemCadastro.png"
import { ImagemDireita } from "../2_Login/styled"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

function Cadastro(){

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [nome, setNome] = useState('')

    const saveUserinfoLocalStorage = (token)=>{
        localStorage.setItem('token', token)
        localStorage.setItem('email', email)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()


        const credencials = {nome, email, senha}

        axios.post('http://localhost:3008/api/user/create', credencials,{
            headers:{
                'Content-Type': 'application/json',
            }
        })
        .then(response =>{
            alert(response.data.message)
            saveUserinfoLocalStorage(response.data.token)
            navigate('/login')
        })
        .catch(error => console.log(error))
    }

    const navigate = useNavigate()

    // const saveUserinfoLocalStorage = 
    // const goToLogin = ()=>{
    //     navigate('/login')
    // }



    return(
        <>
        <ContainerGeral>
            <ContainerCenter>
                <ContainerCard>

                   <CardVermelho>

                        <EscritaDireita>
                            Cadastre-se para ter acesso aos nossos conteúdos informativos!
                        </EscritaDireita>

                        <ImagemDireita src={imagemCadastro}/>
                    </CardVermelho>

                    <Cardbranco>

                        <TitutoCadastro>
                            Cadastre-se
                        </TitutoCadastro>

                        <form onSubmit={handleSubmit}>
                            <Textfield>
                                <Input type="text" name="nome" placeholder="nome" value={nome} onChange={(e)=>setNome(e.target.value)}>
                                </Input>

                                <Input  
                                type="text" name="email" placeholder="email"  value={email} onChange={(e)=>setEmail(e.target.value)}> 
                                </Input>

                                <Input 
                                type="password" name="senha" placeholder="senha" value={senha} onChange={(e)=>setSenha(e.target.value)} >
                                </Input>

                            </Textfield>
                        

                            <BotaoCadastro type="submit">
                                Cadastrar
                            </BotaoCadastro>
                        </form>
                    </Cardbranco>

                </ContainerCard>
            </ContainerCenter>
        </ContainerGeral>
        </>
    )
}

export default Cadastro