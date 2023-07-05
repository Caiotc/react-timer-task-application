import { Button } from "./components/Button"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/deafult"

export function App() {
  return (<ThemeProvider theme={defaultTheme}>
    <Button variant="primary"/>
    <Button variant="danger"/>
    <Button variant="secondary"/>
    <Button variant="success"/>
    </ThemeProvider>
  )
}

export default App
