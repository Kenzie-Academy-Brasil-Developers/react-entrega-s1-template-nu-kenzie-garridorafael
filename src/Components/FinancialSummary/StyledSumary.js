import styled from "styled-components"

export const StyledSection = styled.section`
width: 100%;
max-width: 700px;
align-self: flex-start;
justify-self: flex-start;
display: flex;
flex-direction: column;
margin-top: 1.25rem;
margin-bottom: 20px;

ul{
    display: flex;
    flex-direction: column;
    gap: 12px;
}
`

export const StyledTitle = styled.h3`
font-weight: 700;
font-family: "Nunito";
font-size: 16px;
margin-bottom: 16px;
`

export const StyledNotice = styled.p`
font-weight: 700;
line-height: 34px;
font-size: 1.375rem;
`