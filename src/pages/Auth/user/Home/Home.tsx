
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

  return <>
    <Wrapper>
    </Wrapper>
  </>
}

export default Home