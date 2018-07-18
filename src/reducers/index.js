import { combineReducers } from "redux";
import DisplayTxtReducer from "./DisplayTxtReducer";

const rootReducer = combineReducers({
    txtdisplay: DisplayTxtReducer
});

export default rootReducer;