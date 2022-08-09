import styled from "styled-components";

export const ButtonPink = styled.button`
display: flex;
justify-content: center;
align-items: center;
background-color: var(--color-primary);
border-color: var(--color-primary);
border: 1px;
border-radius: var(--border-radius);
padding: 0.8vh;
color: var(--grey-0);
font-family: var(--font);
font-size: var(--headline-bold);
margin-top: 0.5vh;
transition: 0.3s;
&:hover{
  background-color: var(--color-primary-negative)
}
`
export const ButtonLightGray= styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: var(--grey-1);
border-color: var(--grey-1);
border: 1px;
border-radius: var(--border-radius);
padding: 0.8vh;
color: var(--grey-0);
font-family: var(--font);
font-size: var(--headline);
height: 3.5vh;
margin-top: 0.5vh;
transition: 0.3s;
&:hover{
  background-color: var(--grey-3)
}
`
export const ButtonDarkGray= styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: var(--grey-2);
border-color: var(--grey-2);
border: 1px;
border-radius: var(--border-radius);
padding: 0.8vh;
color: var(--grey-0);
font-family: var(--font);
font-size: var(--headline);
height: 2vh;
margin-top: 0.5vh;
transition: 0.3s;
&:hover{
  background-color: var(--grey-1)
`