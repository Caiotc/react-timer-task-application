import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/deafult";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}
