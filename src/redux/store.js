import { createStore , applyMiddleware} from 'redux';
import {logger} from "redux-logger/src";
import thunk from "redux-thunk";

import rootReduser from './redusers/rootReduser';

const store = createStore(rootReduser, applyMiddleware(thunk, logger));

export default store;