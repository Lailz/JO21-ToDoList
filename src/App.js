import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import Signin from "./components/Signin";

// Components
import TaskTable from "./components/TaskTable";
import { signout } from "./store/actions/authActions";
import { fetchTasks } from "./store/actions/taskActions";

// Styling
// import "./App.css";
import { GlobalStyle, Rectangle, theme, Title } from "./styles";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {user && (
        <>
          <h1>Welcome, {user.username}</h1>
          <button onClick={() => dispatch(signout())}>Logout</button>
        </>
      )}
      {user ? (
        <Rectangle>
          <Title>TO DO LIST</Title>
          <TaskTable user={user} />
        </Rectangle>
      ) : (
        <Signin />
      )}
    </ThemeProvider>
  );
}

export default App;
