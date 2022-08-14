import styled from "styled-components";

export const Buttons = styled.div`
margin-top: 2vh;
display: flex;
flex-direction: row;
justify-content:space-between;
align-items: center;
`
export const ContainerFormOff = styled.div`
margin-top: 2vh;
display: grid;
grid-template-columns: 1.8fr 0.2fr;
width: 100%;
height: 2vh;
`
export const FormOffTitle = styled.span`
font-family: var(--font);
font-size: 24px;
color: var(--grey-0);
`
export const ContainerForm = styled.div`
margin-top: 3vh;
background-color: var(--grey-2);
border-radius: var(--border-radius);
padding: 3.5vh 3.5vh 3vh 3.5vh;
`
export const FormTitle = styled.span`
font-family: var(--font);
margin-bottom: 2vh;
font-size: var(--title);
color: var(--grey-0)
`