import { useState } from "react";
import { ThemeProvider } from "styled-components";

// Components
import TaskTable from "./components/TaskTable";

// Styling
// import "./App.css";
import { GlobalStyle, Rectangle, theme, Title } from "./styles";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Rectangle>
        <Title>TO DO LIST</Title>
        <TaskTable />
      </Rectangle>
    </ThemeProvider>
  );
}

export default App;
