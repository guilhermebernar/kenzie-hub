import styled from "styled-components";

export const HeaderDashboard = styled.div`
display: flex;
flex-direction: row;
width: 100%;
justify-content: space-between;
align-items: center;
margin: 2vh 0 2vh 0;
`
export const Infos = styled.div`
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