import React from 'react'

import {Wrapper} from './styles'
import Header from './../../components/Header'
type Props = {
  children: React.ReactChild | React.ReactChild[]
}

export default function Layout({ children }: Props) {


  return (
    <>
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
    </>
  );
}

