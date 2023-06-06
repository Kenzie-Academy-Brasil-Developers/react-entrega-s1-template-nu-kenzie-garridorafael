import { StyledSectionValue } from "./StyledValue"
import { StyledTitle } from "./StyledValue"
import { StyledSpan } from "./StyledValue"
import { DivValue } from "./StyledValue"

export function Value({ valueList }){

    let totalValue = 0

  valueList.forEach((item) => {
    if(item.typeValue === "Entrada"){
    totalValue += Number(item.value)
    }else{
        totalValue -= Number(item.value)
    }
  })


    return(
       <StyledSectionValue>
            <DivValue>
                <StyledTitle>Valor Total:</StyledTitle>
                <StyledSpan>{totalValue && new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(totalValue)}</StyledSpan>
            </DivValue>
            <span>O valor se refere ao saldo</span>
       </StyledSectionValue>
    )
}