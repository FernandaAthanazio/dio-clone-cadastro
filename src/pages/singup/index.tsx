import { useNavigate  } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { api } from '../../services/api';

import { MdEmail, MdLock, MdPerson } from 'react-icons/md'

import { Container, Title, Column, TitleLogin, SubtitleLogin, CriarText, Row, SubtitleRow, Wrapper } from './styles';
import { IFormData } from "./types";

const schema = yup
    .object({
        email: yup
            .string()
            .email('email não é válido')
            .required('Campo obrigatório'),
    password: yup
        .string()
        .min(3, 'No mínimo 3 caracteres')
        .required('Campo obrigatório',)
})
.required();

const SingUp = () => {
    const navigate = useNavigate();

    const {
        control,
        handleSubmit,
        formState: { errors  },
    } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const handleClickSignIn = () => {
        navigate('/login');
    };

    const onSubmit = async (formData: IFormData) => {
        try{
            const { data } = await api.get(
                `users?email=${formData.email}&senha=${formData.password}`
            );
            if(data.length === 1){
                navigate('/feed')
            } else {
                alert('E-mail ou senha inválido.');
            }
        } catch{
            alert('Houve um erro, tente novamente.')
        }
    };

    return (
        <>
            <Header />
                <Container>
                    <Column>
                        <Title>
                            A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                        </Title>
                    </Column>
                    <Column>
                    <Wrapper>
                        <TitleLogin>Comece agora grátis</TitleLogin>
                        <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Input
                                    name="nome"
                                    errorMessage={errors?.email?.message}
                                    control={control}
                                    placeholder="Nome completo"
                                    leftIcon={<MdPerson />}
                                />
                                <Input
                                    name="email"
                                    errorMessage={errors?.email?.message}
                                    control={control}
                                    placeholder="E-mail"
                                    leftIcon={<MdEmail />}
                                />
                                <Input
                                    name="password"
                                    errorMessage={errors?.password?.message}
                                    control={control}
                                    placeholder="Password"
                                    type="password"
                                    leftIcon={<MdLock />}
                                />
                            <Button title="Criar minha conta" variant="secondary" type="submit" onClick={handleClickSignIn}/>
                                <SubtitleRow>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                                </SubtitleRow>
                            </form>    
                            <Row>
                                <p>Já tenho conta. <CriarText onClick={handleClickSignIn}>Fazer login</CriarText></p>
                            </Row>
                    </Wrapper>
                    </Column>
                </Container>      
        </>
    )
}

export { SingUp };