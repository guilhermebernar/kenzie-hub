import styled from "styled-components";

export const HeaderDashboard = styled.div`
display: grid;
grid-template-columns: 1.8fr 0.2fr;
width: 100%;
align-items: center;
margin: 2vh 0 2vh 0;
`
export const Infos = styled.div`
margin-top: 2vh;
display: flex;
flex-direction: column;
width: 100%;
`

export const InfoName = styled.span`
font-family: var(--font);
font-size: var(--title);
color: var(--grey-0);
`
export const InfoCourseModule = styled.span`
font-family: var(--font);
font-size: var(--headline);
color: var(--grey-1);
padding-top: 1vh;
`