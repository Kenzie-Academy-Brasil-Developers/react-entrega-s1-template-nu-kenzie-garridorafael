import { useState } from "react"
import { GlobalStyle, StyledContainer } from "./styles/globalStyle"
import { Header } from "./Components/Header/Header"
import { Form } from "./Components/Form/Form"
import { Summary } from "./Components/FinancialSummary/Summary"
import { Value } from "./Components/TotalValue/TotalValue"

function App() {
  const [valueList, setFormValues] = useState([])

  return (
    <>
      <GlobalStyle />
      <Header />
        <StyledContainer>
      <main>
          <div>
            <Form setFormValues={setFormValues} />
            {valueList.length > 0 && <Value valueList={valueList} />}
          </div>
          <Summary valueList={valueList} setFormValues={setFormValues} />
      </main>
        </StyledContainer>
    </>
  )
}

export default App
