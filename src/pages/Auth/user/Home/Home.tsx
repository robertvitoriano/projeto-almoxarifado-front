
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setToken } from 'store/modules/auth/reducer'
import logo from 'assets/fazPlasticoIcon.png'

import {
  Wrapper
} from './styles'
import Swal from 'sweetalert2'
import api from 'services/api'
import LoadingModal from 'components/LoadingModal'


const Home = () => {

  const [isLoading, setIsLoading] = useState<boolean>()

  const history = useHistory()

  const dispatch = useDispatch()

  const handleSignIn = async () => {
    try {

      setIsLoading(true)

      const response = await api.post('/users/login');

      const { token, user } = response.data;

      localStorage.setItem("token", 'Bearer ' + token);
      // localStorage.setItem("userId", user._id);
      dispatch(setToken(token));
      setIsLoading(false)

      history.push('/notes')

    } catch (error: any) {
      console.error(error)
      setIsLoading(false)

      Swal.fire(
        'Um erro aconteceu',
        String(error.message),
        'error'
      )
    }

  };


  return <>
    <Wrapper>
      {isLoading && <LoadingModal show />}

    </Wrapper>
  </>
}

export default Home