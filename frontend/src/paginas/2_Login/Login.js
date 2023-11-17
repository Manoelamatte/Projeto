import { ContainerCenter, ContainerGeral } from "../../styledGlobal"
import { CardVermelho, Cardbranco, ContainerCard, Input } from "../3_Cadastro/styled"
import { BotaoDireita, BotaoLogin, ImagemDireita, TextfieldLogin, TextoDireita, Titulo1, Titulo2 } from "./styled"
import imagemLogin from "../../assets/imagemLogin.png"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

function Login(){

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')


    const saveUserinfoLocalStorage = (email, token, id, nome)=>{
        localStorage.setItem('token', token)
        localStorage.setItem('email', email)
        localStorage.setItem('id', id)
        localStorage.setItem('nome', nome)

        console.log(nome)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()


        const credencials = {email, senha}
        axios.post('http://localhost:3008/api/auth/login', credencials,{
            
            headers:{
                'Content-Type': 'application/json',

            }
        })
        .then(response =>{
            alert(response.data.message)
            // saveUserinfoLocalStorage(response.data.token)
             // recuperando informações depois que usario logou
             const token = response.data.data[0].token;
             const email = response.data.data[0].email;
             const id = response.data.data[0].id;
             const nome = response.data.data[0].nome
             
             //função para salvar informalções depois que o usuario logu
             saveUserinfoLocalStorage(email, token, id, nome)
            navigate('/principal')
        })
        .catch(error => console.log(error))
    }

    const navigate = useNavigate()

    const goToCadastro = ()=>{
        navigate('/cadastro')
    }


    return(
        <>
        <ContainerGeral>
            <ContainerCenter>
                <ContainerCard>

                   <Cardbranco>

                         <Titulo1>
                           Olá,
                         </Titulo1>

                         <Titulo2>
                            Seja Bem Vindo de Volta!
                         </Titulo2>

                    <form onSubmit={handleSubmit}>
                        <TextfieldLogin>
                            <Input type="text" name="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}>
                            </Input>

                            <Input type="password" name="senha" placeholder="senha" value={senha} onChange={(e)=>setSenha(e.target.value)}>
                            </Input>
                        </TextfieldLogin>

                        <BotaoLogin type="submit">
                            Entrar
                        </BotaoLogin>

                    </form>
                    </Cardbranco>
  
                    <CardVermelho>
                        <TextoDireita>
                            Ainda não é cadastrado?
                        </TextoDireita>

                        <BotaoDireita onClick={goToCadastro}>
                            Cadastre-se
                        </BotaoDireita>

                        <ImagemDireita src={imagemLogin}/>
                    </CardVermelho>

                </ContainerCard>
            </ContainerCenter>
        </ContainerGeral>
        </>
    )
}

export default Login