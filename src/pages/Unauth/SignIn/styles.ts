import styled from 'styled-components'
import {Link} from 'react-router-dom'
export const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100vw;
height:100vh;
background-color: white;
`
export const PresentationSection = styled.div`
background-color: white;
padding: 51px;
display: flex;
flex-direction: column;
align-items: center;
height:40vh;
`
export const WelcomeMessage = styled.h1`
font-size: 1.5rem;
`

export const Logo = styled.img`

height:15vh;

`

export const FormSection = styled.div`
background-color: #455448;
padding:  3rem;
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height:65vh;
`
export const Input = styled.input`
background-color: rgb(235, 235, 235);
height: 3.8rem;
width: 100%;
border-radius: 10px;
outline:none;
font-size: 2rem;
`

export const LoginButton = styled.div`
background-color: #54b823;
color:white;
font-weight:bolder;
font-size: 1.2rem;
padding: 1rem 3rem;
border-radius: 10px;
&:hover{
  cursor: pointer;
}
`
export const FormContainer = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content:space-between;
`
export const InputContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
font-family: Arial, Helvetica, sans-serif;

`
export const InputLabel = styled.label`
font-weight: bold;
color:white;
`
export const SignUpLink = styled.div`
font-weight: bold;
color:white;
text-decoration: none;
`