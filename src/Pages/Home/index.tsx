import { useNavigate  } from "react-router-dom";
import { Button } from '../../Components/Button'
import Header from '../../Components/Header'
import Banner from '../../Assets/banner.png'
import {
    Container,
    TextContent,
    Title,
    TitleHighlight} 
from './styles'

const Home= () => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login')
    }

    return (
        <>
        <Header/>
        <Container>
            <div>
                <Title > 
                 <TitleHighlight>
                 Implemente
                 <br/>
                 </TitleHighlight>
                 O seu futuro agora!
                </Title>
                <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
                    desafio profissional, evoluindo em comunidade com os melhores experts.
                </TextContent>
                <Button title="Começar agora" variant='secundary' onClick={(handleClickSignIn)}/>
            </div>
            <div>
                <img src={Banner} alt='Imagem do banner'/>
            </div>
        </Container>
        </>
    )
}


export default Home