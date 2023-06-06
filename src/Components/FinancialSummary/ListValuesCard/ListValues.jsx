import { StyledNotice } from "../StyledSumary"
import { StyledList } from "./StyledListValuesCard"


export const ValueCard = ({ value, removeValueFromList }) => {
    return (
      <StyledList type={value.typeValue}>
        <h4>{value.description}</h4>
        <div>
          <span>{value.typeValue}</span>
          <div>
            <span>{value.value && new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(value.value)}</span>
            <button onClick={() => removeValueFromList(value.id)}>Excluir</button>
          </div>
        </div>
      </StyledList>
    );
  };