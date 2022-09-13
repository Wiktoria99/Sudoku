import "./App.css";

import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material";

import theme from "./App.styles";
import SudokuBoard from "../components/SudokuBoard/SudokuBoard";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <SudokuBoard />
      </Container>
    </ThemeProvider>
  );
}

export default App;
