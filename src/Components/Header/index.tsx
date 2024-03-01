import Logo from '../../Assets/logo-dio.png'
import {
    BuscarInputContainer,
    HeaderContainer,
    Input,
    Menu,
    MenuRigth,
    Row,
    Wrapper
} from './styles'

import { Button } from '../Button/index';
import { UserPicture } from '../Card/styles';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';



const Header = () => {
  const {user} = useAuth();
  return (
    <Wrapper>
        <HeaderContainer>
            <Row>
              <Link to={'/'}>
                <img src={Logo} alt='Logo' />
              </Link>
                {user.id ? (
                <>
                    <BuscarInputContainer>
                        <Input placeholder='Buscar...'/>
                    </BuscarInputContainer>
                    <Menu>Cursos</Menu>
                    <Menu>Liva Code</Menu>
                    <Menu>global</Menu>
                </>
                ) : null}
            </Row>
            <Row>
            {user.id ? (
                <UserPicture src="https://avatars.githubusercontent.com/u/45412450?v=4"/>
              ) : (
              <>
                <MenuRigth href="/">Home</MenuRigth>
                <Link to={'/login'} ><Button title="Entrar" /></Link>
                <Button title="Cadastrar" />
              </>)}
            </Row>
        </HeaderContainer>
    </Wrapper>
  )
}
export default Header;