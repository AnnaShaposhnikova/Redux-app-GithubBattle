import {combineReducers} from "redux";

import { popularReduser } from "./popularReduser";

const rootReduser = combineReducers({
    popularReduser: popularReduser,
}, );

export default rootReduser;