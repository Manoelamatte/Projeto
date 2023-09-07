import Header from "../../components/Header/Header"
import { ContainerCenter, ContainerGeral2 } from "../../styledGlobal"
import { ContainerMiniDivis, Divisinhas, MiniDivis } from "./styled"

function Home(){
    return(
        <>
        <ContainerGeral2>
            <Header/>
                oi
                <ContainerMiniDivis>
                    <MiniDivis>
                        <Divisinhas>
                            Autora:
                        </Divisinhas>
                    </MiniDivis>

                    <MiniDivis>
                        <Divisinhas>
                            Github
                        </Divisinhas>
                    </MiniDivis>

                    <MiniDivis>
                        <Divisinhas>
                            Projeto:
                        </Divisinhas>
                    </MiniDivis>
                </ContainerMiniDivis>
        </ContainerGeral2>
        </>
    )
}

export default Home