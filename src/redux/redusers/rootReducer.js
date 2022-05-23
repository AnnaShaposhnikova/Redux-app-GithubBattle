import {combineReducers} from "redux";

import { popularReducer } from "./popularReducer";
import { battleReducer } from "./battleReducer";

const rootReducer = combineReducers({
    popularReducer: popularReducer,
    battleReducer: battleReducer,
}, );

export default rootReducer;