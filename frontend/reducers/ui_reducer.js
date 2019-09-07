import { combineReducers } from "redux";
import filterReducer from "./filter_reducer";

const uiReducer = combineReducers({
    bounds: filterReducer
});


export default uiReducer;