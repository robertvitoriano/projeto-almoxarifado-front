import { PhoneBreakPoint, DesktopBreakPoint } from 'components/responsive_utilities/'
import {
  WelcomeMessage,
  Content,
  Wrapper,
  LogoutButton,
  GobackButton,
  GobackButtonEmpty
} from './styles'
import { useLocation } from 'react-router-dom'

import logoutIcon from 'assets/logout.png'
import goBackIcon from 'assets/left-arrow.png'

import React from 'react'
const Header = () => {

  const location = useLocation()

  const isHome = location.pathname === '/'

  return (
    <>
      <DesktopBreakPoint>
        <h1>fdfd</h1>
      </DesktopBreakPoint>
      <PhoneBreakPoint>
        <Wrapper>
          <Content>
            {isHome?<GobackButtonEmpty/>:<GobackButton src={goBackIcon}  />}
            <WelcomeMessage>Olá João Cláudio Palett </WelcomeMessage>
            <LogoutButton src={logoutIcon} />
          </Content>
        </Wrapper>
      </PhoneBreakPoint>
    </>)
}

export default Header