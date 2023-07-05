import { Button } from "./components/Button"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/deafult"
import { GlobalStyle } from "./styles/global"

export function App() {
  return (<ThemeProvider theme={defaultTheme}>
    <GlobalStyle>
      <Button variant="primary"/>
      <Button variant="danger"/>
      <Button variant="secondary"/>
      <Button variant="success"/>
    </GlobalStyle>
    </ThemeProvider>
  )
}

export default App
