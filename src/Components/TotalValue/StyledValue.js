import styled from "styled-components"

export const StyledSectionValue = styled.section`
border: 1px solid var(--color-grey-2);
width: 22.1875rem;
height: 6rem;
display: flex;
flex-direction: column;
gap: 20px;
padding: 10px 20px;
justify-self: center;
align-self: flex-start;
align-items: flex-start;
margin-top: 1.875rem;
box-sizing: border-box;

span{
    font-size: 12px;
    line-height: 22px;
}
` 
export const StyledTitle = styled.h4`
font-weight: 700;
line-height: 30px;
`
export const StyledSpan = styled.span`
color: var(--color-color-primary);
font-weight: 700;
line-height: 30px;
`

export const DivValue = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
box-sizing: border-box;
`