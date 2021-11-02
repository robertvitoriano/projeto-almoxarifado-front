
import styled from 'styled-components'
import {Link} from 'react-router-dom'
export const Wrapper = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height:100vh;
background-color: white;
`
export const PageTitleSection = styled.div`
height:25vh;
display: flex;
align-items: center;
justify-content: center;
background-color: white;
`
export const Content = styled.div`
background-color: #455448;
height:100vh;
`
export const PageTitle = styled.h1``

export const HomePageItemsContainer = styled.div`
display: flex;
justify-content:space-evenly;
margin-top: 10vh;

`

export const HomePageItem = styled.div`
background-color: #54b823;
color:white;
font-weight: bold;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
height: 15vh;
width: 30%;
font-size: smaller;
border-radius: 10%;
text-align: center;
`
export const HomePageItemTitle = styled.p``

export const HomePageItemIcon = styled.img`
width:30px;
`

// #54b823