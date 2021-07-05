import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";
import { fetchTasks } from "./actions/taskActions";
import { checkForToken } from "./actions/authActions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer, // reducer function
  composeEnhancers(applyMiddleware(thunk))
);

// This will run ONE TIME ONLY when the app first loads
store.dispatch(fetchTasks());
store.dispatch(checkForToken());

export default store;
