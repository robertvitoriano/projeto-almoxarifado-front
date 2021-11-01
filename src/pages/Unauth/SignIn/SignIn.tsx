
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setToken } from 'store/modules/auth/reducer'
import logo from 'assets/fazPlasticoIcon.png'

import {
  Wrapper,
  PresentationSection,
  FormSection,
  Logo,
  WelcomeMessage,
  Input,
  LoginButton,
  FormContainer,
  InputContainer,
  InputLabel,
  SignUpLink
} from './styles'
import Swal from 'sweetalert2'
import api from 'services/api'
import LoadingModal from 'components/LoadingModal'


const SignIn = () => {

  const [isLoading, setIsLoading] = useState<boolean>()

  const history = useHistory()

  const dispatch = useDispatch()

  const onFinish = async () => {
    // try {

    //   setIsLoading(true)

    //   const response = await api.post('/users/login');

    //   const { token, user } = response.data;

    //   localStorage.setItem("token", 'Bearer ' + token);
    //   // localStorage.setItem("userId", user._id);
    //   dispatch(setToken(token));
    //   setIsLoading(false)

    //   history.push('/notes')

    // } catch (error: any) {
    //   console.error(error)
    //   setIsLoading(false)

    //   Swal.fire(
    //     'Um erro aconteceu',
    //     String(error.message),
    //     'error'
    //   )
    // }

  };

  const onFinishFailed = () => {
    console.log('Failed');
  };


  return <>
    <Wrapper>
      <PresentationSection>
        <Logo src={logo} />
        <WelcomeMessage>
          OLÁ BEM VINDO AO SISTEMA DO ALMOXARIFADO
        </WelcomeMessage>
      </PresentationSection>
      <FormSection >
        {/* <Input/>
        <Input/>
        <LoginButton onClick={() => onFinish()}>
        </LoginButton> */}
        <FormContainer>
          <InputContainer>
          <InputLabel>EMAIL</InputLabel>
            <Input />
          </InputContainer>,
          <InputContainer>
          <InputLabel>SENHA</InputLabel>
            <Input />
          </InputContainer>
          <LoginButton onClick={() => onFinish()}>Login</LoginButton>
          <SignUpLink to="/">Não tenho cadastro</SignUpLink>
        </FormContainer>
      </FormSection>
    </Wrapper>
  </>
}

export default SignIn