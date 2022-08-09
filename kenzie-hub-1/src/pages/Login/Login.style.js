import styled from "styled-components";

export const MainLogin = styled.main`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: var(--grey-3);
height: 100vh;
width: 100%;
`
export const HeaderLogin = styled.div`
display: flex;
flex-direction: row;
width: 30vh;
justify-content: center;
align-items: center;
margin-bottom: 2vh;
`

export const ContainerLogin = styled.div`
background-color: var(--grey-2);
padding: 4vh;
border-radius: var(--border-radius);
width: 30vh;
height: 40vh;
`
export const LoginTitle = styled.div`
font-family: var(--font);
font-size: var(--title1);
color: var(--grey-0);
margin-bottom: 2.5vh;
display: flex;
align-items: center;
justify-content: center;
`
export const Question = styled.span`
display: flex;
justify-content: center;
margin-top: 4vh;
margin-bottom: 3vh;
color: var(--grey-1);
font-family: var(--font);
font-size: var(--headline);
`

