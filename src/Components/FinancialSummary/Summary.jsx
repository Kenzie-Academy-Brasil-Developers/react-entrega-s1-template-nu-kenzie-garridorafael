import { useState } from "react";
import { ValueCard } from "./ListValuesCard/ListValues";
import { StyledSection } from "./StyledSumary";
import { StyledTitle } from "./StyledSumary";
import { StyledNotice } from "./StyledSumary";
import { StyledContainer } from "../../styles/globalStyle";

export function Summary({ valueList, setFormValues }) {
  const removeValueFromList = (valueId) => {
    setFormValues((valueList) =>
      valueList.filter((value) => value.id !== valueId)
    );
  };

  return (
    <StyledSection>
      <StyledContainer>
        <StyledTitle>Resumo Financeiro</StyledTitle>
        {valueList.length === 0 ? (
          <StyledNotice>Você ainda não possui nenhum lançamento</StyledNotice>
        ) : (
          <ul>
            {valueList.map((value) => (
              <ValueCard
                key={value.id}
                value={value}
                removeValueFromList={removeValueFromList}
              />
            ))}
          </ul>
        )}
      </StyledContainer>
    </StyledSection>
  );
}
