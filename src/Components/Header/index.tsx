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
import { IHeader } from './types';


const Header = ({autenticado}: IHeader) => {
  return (
    <Wrapper>
        <HeaderContainer>
            <Row>
                <img src={Logo} alt='Logo' />
                {autenticado ? (
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
            {autenticado ? (
                <UserPicture src="https://avatars.githubusercontent.com/u/45412450?v=4"/>
              ) : (
              <>
                <MenuRigth href="/">Home</MenuRigth>
                <Button title="Entrar" />
                <Button title="Cadastrar" />
              </>)}
            </Row>
        </HeaderContainer>
    </Wrapper>
  )
}
export default Header;