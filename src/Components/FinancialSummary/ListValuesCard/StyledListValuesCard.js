import styled from "styled-components"

export const StyledList = styled.li`
    width: 100%;
    height: 9.75rem;
    background-color: var(--color-grey-1);
    border-left: 4px solid var(--color-color-secondary);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    padding-left: 14px;
    padding-top: 12px;
    gap: 12px;

    div{
        display: flex;
        flex-direction: column;
        gap: 10px;
        color: var(--color-grey-4);
    }

    button{
        width: 3rem;
        height: 1.1875rem;
        background-color: var(--color-grey-2);
        border-radius: 2px;
        border: none;
        font-size: .625rem;
        line-height: 14px;
    }

    span{
        font-size: .75rem;
        line-height: 22px;
    }
`
