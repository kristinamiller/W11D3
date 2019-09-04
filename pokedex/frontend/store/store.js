import {createStore} from "redux";
// import rootReducer from "../reducers/root_reducer";
// import logger from "redux-logger";

const configureStore = (reducer, preloadedState = {}, middleware) => createStore(reducer, preloadedState, middleware);

export default configureStore;