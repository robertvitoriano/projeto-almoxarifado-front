import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'

import {
  Wrapper,
} from './styles'

import api from 'services/api'
const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory()


  const onFinish = async (values: any) => {
    try {
      setIsLoading(true);
      await api.post('/users', values);
      setIsLoading(false);
      //@ts-ignore
      const email = document.getElementsByName('email')[0].value;
      const emailClient = email.split('@')[1].split('.')[0]

      Swal.fire({
        title: "Cadastro iniciado",
        text: `Em breve um e-mail será enviado para ${email}, confirme seu e-mail, finalize o cadastro e comece a criar !`,
        icon: "success",
        confirmButtonText: 'Abrir E-mail !'
      }).then(() => window.open(
        `https://${emailClient}.com`,
        '_blank'
      )).then(() => history.push('/'))

    } catch (error) {
      console.error(error)
      Swal.fire(
        'Cancelled',
        String(error),
        'error'
      )
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
     <Wrapper>

     </Wrapper>
    </>
  )
}

export default SignIn