import { combineReducers } from "redux";

import taskReducer from "./tasks";
let rootReducer = combineReducers({
tasks:taskReducer,
})

export default rootReducer;