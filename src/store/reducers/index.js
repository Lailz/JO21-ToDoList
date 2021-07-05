import { combineReducers } from "redux";
import taskReducer from "./taskReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  authReducer,
  taskReducer,
});

export default rootReducer;
