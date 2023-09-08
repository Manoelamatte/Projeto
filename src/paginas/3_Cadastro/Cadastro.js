import { ContainerCenter, ContainerGeral } from "../../styledGlobal"
import { BotaoCadastro, CardVermelho, Cardbranco, ContainerCard, EscritaDireita, Input, Textfield, TitutoCadastro } from "./styled"
import imagemCadastro from "../../assets/imagemCadastro.png"
import { ImagemDireita } from "../2_Login/styled"
import { useNavigate } from "react-router-dom"

function Cadastro(){

    const navigate = useNavigate()
    const goToLogin = ()=>{
        navigate('/login')
    }

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

                        <Textfield>
                            <Input  
                            type="text" name="email" placeholder="email"> 
                            </Input>

                            <Input 
                            type="password" name="senha" placeholder="senha">
                            </Input>

                            <Input type="password" name="senha" placeholder="confirme a senha">
                            </Input>
                        </Textfield>

                        <BotaoCadastro onClick={goToLogin}>
                            Cadastrar
                        </BotaoCadastro>
                    </Cardbranco>

                </ContainerCard>
            </ContainerCenter>
        </ContainerGeral>
        </>
    )
}

export default Cadastro