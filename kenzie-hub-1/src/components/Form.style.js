import styled from "styled-components";

export const FormDefaut = styled.form`
display:flex;
flex-direction:column;
justify-content: space-between;

input {
background-color: var(--grey-2);
border: 1px solid var(--grey-0);
border-radius: var(--border-radius);
margin: 0 0 0.5vh 0;
outline: none;
color: var(--grey-0);
height: 3.5vh;
font-size: var(--headline);
font-family: var(--font);
}
option {
background-color: var(--grey-2);
border: 1px solid var(--grey-0);
border-radius: var(--border-radius);
margin: 0 0 0.5vh 0;
outline: none;
color: var(--grey-0);
height: 3.5vh;
font-size: var(--headline);
font-family: var(--font);
}
select {
background-color: var(--grey-2);
border: 1px solid var(--grey-0);
border-radius: var(--border-radius);
margin: 0 0 0.5vh 0;
outline: none;
color: var(--grey-0);
height: 3.5vh;
font-size: var(--headline);
font-family: var(--font);
}
label {
font-size: var(--headline);
font-family: var(--font);
color: var(--grey-0);
margin: 0 0 0.5vh 0;
}
p {
font-size: var(--headline);
font-family: var(--font);
color: var(--grey-1);
margin: 0 0 0.5vh 0;
}
`