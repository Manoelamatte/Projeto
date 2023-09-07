import { ContainerCenter, ContainerGeral } from "../../styledGlobal"
import { CardVermelho, Cardbranco, ContainerCard, Input } from "../3_Cadastro/styled"
import { BotaoDireita, BotaoLogin, ImagemDireita, TextfieldLogin, TextoDireita, Titulo1, Titulo2 } from "./styled"
import imagemLogin from "../../assets/imagemLogin.png"

function Login(){
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

                        <TextfieldLogin>
                            <Input type="text" name="email" placeholder="email">
                            </Input>

                            <Input type="password" name="senha" placeholder="senha">
                            </Input>
                        </TextfieldLogin>

                        <BotaoLogin>
                            Entrar
                        </BotaoLogin>

                    </Cardbranco>
  
                    <CardVermelho>
                        <TextoDireita>
                            Ainda não é cadastrado?
                        </TextoDireita>

                        <BotaoDireita>
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