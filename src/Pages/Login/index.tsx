import { useNavigate  } from "react-router-dom";
import {MdEmail, MdLock} from 'react-icons/md';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import {api} from '../../Services/api'

import Header from '../../Components/Header'
import { Input} from '../../Components/Input'
import { Button } from '../../Components/Button'

import { 
    Column,Container,
    CriarText,EsqueciText,
    Row,SubtitleLogin,
    Title,TitleLogin,
    Wrapper} 
from './styles'

import { useForm } from "react-hook-form";
import { IFormData } from "./types";

const schema = yup
  .object({
    email: yup.string().email('email não é valido').required('campo obrigatório'),
    password: yup.string().min(3,'No Minino 3 caracteres').required('campo obrigatório'),
  })
  .required()

const Login= () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors  } } = useForm<IFormData>({
        resolver:yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = async (formData: IFormData) => {
        try{
            const {data} = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
            if(data.length === 1){
                navigate('/feed')
            }else {
                alert('Email não é valido');
            }
            
        }catch{
            alert('Houve um error,tente novamente.')
        }
    };

    return (
        <>
        <Header/>
        <Container>
            <Column>
                <Title> 
                    A plataforma para você aprender com experts, 
                    dominar as principais tecnologias
                    e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça Seu Cadastro</TitleLogin>
                    <SubtitleLogin>Faça Seu Login e make the change._</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail"  leftIcon={<MdEmail/>} />
                        <Input name="password" errorMessage={errors?.password?.message}  control={control} placeholder="Senha"  type="password" leftIcon={<MdLock />} />
                        <Button title="Entrar" variant='secundary' type="submit"/>
                    </form>
                    <Row>
                        <EsqueciText>Esqueci Minha Senha</EsqueciText>
                        <CriarText>Criar Conta</CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
        </>
    )
}


export default Login