import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
// import Signin from "./components/Signin";

// Components
// import TaskTable from "./components/TaskTable";
import { signout } from "./store/actions/authActions";
// import { fetchTasks } from "./store/actions/taskActions";

// Styling
// import "./App.css";
import { GlobalStyle, theme } from "./styles";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <button class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">
        Click me
      </button>
      {user && (
        <>
          <h1>Welcome, {user.username}</h1>
        </>
      )}
      <button className="btn btn-green" onClick={() => dispatch(signout())}>
        Logout
      </button>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-gray-500">You have a new message!</p>
        </div>
      </div>
      {/* {user ? (
        <Rectangle>
          <Title>TO DO LIST</Title>
          <TaskTable user={user} />
        </Rectangle>
      ) : (
        <Signin />
      )} */}
    </ThemeProvider>
  );
}

export default App;
