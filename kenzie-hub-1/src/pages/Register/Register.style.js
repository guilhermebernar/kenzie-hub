import styled from "styled-components";

export const MainRegister = styled.main`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: var(--grey-3);
height: 100vh;
width: 100%;
`

export const ContainerRegister = styled.div`
background-color: var(--grey-2);
padding: 4vh;
border-radius: var(--border-radius);
width: 30vh;
height: 65vh;
@media (min-width: 425px) {
height: 70vh;
}
`

export const HeaderRegister = styled.div`
display: flex;
flex-direction: row;
width: 30vh;
justify-content: space-between;
align-items: center;
margin-bottom: 2vh;
`

export const RegisterTitle = styled.div`
font-family: var(--font);
font-size: var(--title1);
color: var(--grey-0);
margin-bottom: 2.5vh;
display: flex;
align-items: center;
justify-content: center;
`
export const RegisterSubTitle = styled.span`
display: flex;
justify-content: center;
margin-top: 4vh;
margin-bottom: 3vh;
color: var(--grey-1);
font-family: var(--font);
font-size: var(--headline);
`

export const FormFields = styled.div`
display: flex;
flex-direction: column;
`

export const ContainerButton = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`