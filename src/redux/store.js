import { createStore , applyMiddleware} from 'redux';
import {logger} from "redux-logger/src";
import thunk from "redux-thunk";

import rootReduser from './redusers/rootReducer';

const store = createStore(rootReduser, applyMiddleware(thunk));

export default store;