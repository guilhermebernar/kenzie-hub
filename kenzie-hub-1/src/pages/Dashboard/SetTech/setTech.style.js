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
align-items: center;
margin-bottom: 3vh;
`
export const FormOffTitle = styled.span`
font-family: var(--font);
font-size: 24px;
color: var(--grey-0);
`
export const BlurScreen = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  filter: blur(10px);
  position: absolute;
`
export const ContainerForm = styled.div`
margin-top: 3vh;
background-color: var(--grey-2);
border-radius: var(--border-radius);
padding: 3.5vh 3.5vh 3vh 3.5vh;
@media (min-width: 768px){
  margin-top: 25vh;
  position: absolute;
  box-shadow: 0 0 5px 1000px #00000060;
}
`
export const FormTitle = styled.span`
font-family: var(--font);
margin-bottom: 2vh;
font-size: var(--title);
color: var(--grey-0)
`
