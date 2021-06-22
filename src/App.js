import { useDispatch } from "react-redux";
import { ThemeProvider } from "styled-components";

// Components
import TaskTable from "./components/TaskTable";
import { fetchTasks } from "./store/actions";

// Styling
// import "./App.css";
import { GlobalStyle, Rectangle, theme, Title } from "./styles";

function App() {
  const dispatch = useDispatch();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Rectangle>
        <button onClick={() => dispatch(fetchTasks())}>Send Request</button>
        <Title>TO DO LIST</Title>
        <TaskTable />
      </Rectangle>
    </ThemeProvider>
  );
}

export default App;
