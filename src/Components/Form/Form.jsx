import { StyledForm } from "./styledForm"
import { StyledDescription } from "./styledForm"
import { StyledSmall } from "./styledForm"
import { StyledInput } from "./styledForm"
import { StyledSelect } from "./styledForm"
import { StyledButton } from "./styledForm"
import { v4 as uuidv4 } from "uuid"
import { useState } from "react"

export function Form({ setFormValues }) {
  const [description, setDescription] = useState("")
  const [value, setValue] = useState("")
  const [typeValue, setTypeValue] = useState("")

  const addValueToList = () => {
    const newValue = { id: uuidv4(), description, value, typeValue }
    setFormValues((prevValues) => [...prevValues, newValue])
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    addValueToList()
    setDescription("")
    setValue("")
    setTypeValue("")
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <div>
          <StyledDescription htmlFor="description">Descrição</StyledDescription>
          <StyledInput
            type="text"
            name="description"
            id="description"
            value={description}
            placeholder="Digite aqui sua descrição"
            required
            onChange={(e) => setDescription(e.target.value)}
          />
          <StyledSmall>Ex: Compra de roupas</StyledSmall>
        </div>

        <div>
          <StyledDescription htmlFor="value">Valor (R$)</StyledDescription>
          <StyledInput
            type="number"
            name="value"
            id="value"
            value={value}
            placeholder="Digite aqui o valor"
            required
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        <div>
          <StyledDescription>Tipo de Valor</StyledDescription>
          <StyledSelect
            name="typeValue"
            id="typeValue"
            value={typeValue}
            required
            onChange={(e) => setTypeValue(e.target.value)}
          >
            <option value="">Selecione uma opção</option>
            <option value="Entrada">Entrada</option>
            <option value="Despesa">Despesa</option>
          </StyledSelect>
        </div>

        <StyledButton>Inserir Valor</StyledButton>
      </StyledForm>
    </>
  );
}
