import styled from "styled-components"

export const StyledForm = styled.form`
border: 1px solid var(--color-grey-2);
width: 22.1875rem;
height: 27.125rem;
display: flex;
flex-direction: column;
gap: 20px;
padding: 30px 20px;
justify-self: center;
align-items: flex-start;
margin-top: 1.875rem;
font-family: 'Inter', sans-serif;
box-sizing: border-box;
`

export const StyledDescription = styled.label`
font-size: .75rem;
line-height: 22px;
color: var(--color-grey-4);
`

export const StyledSmall = styled.small`
font-size: .75rem;
line-height: 22px;
color: var(--color-grey-5);
`

export const StyledInput = styled.input`
background-color: var(--color-grey-1);
width: 19.625rem;
height: 3.3rem;
border: 2px solid var(--color-grey-1);
border-radius: 8px;
padding-left: 10px;
font-size: 1rem;
box-sizing: border-box;
margin: 5px 0;
`

export const StyledSelect = styled.select`
background-color: var(--color-grey-1);
width: 19.625rem;
height: 3.3rem;
border: 2px solid var(--color-grey-1);
border-radius: 8px;
padding-left: 10px;
color: var(--color-grey-3);
font-size: .75rem;
`

export const StyledButton = styled.button`
background-color: var(--color-color-primary);
width: 19.625rem;
height: 3.3rem;
border: 2px solid var(--color-color-primary);
border-radius: 8px;
color: var(--color-grey-1);
font-family: 'Inter', sans-serif;
font-size: 1rem;
font-weight: 500;

:hover{
    cursor: pointer;
    background-color: var(--color-color-primary-2);
    border: 2px solid var(--color-color-primary-2);
}
`
