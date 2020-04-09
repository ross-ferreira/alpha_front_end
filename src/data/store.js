import { createStore,applyMiddleware,compose } from "redux";
import initialState from './initialState';
import reducer from './reducers/reducer';
import thunk from "redux-thunk";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    reducer, 
    initialState,
    composeEnhancers(applyMiddleware(thunk))

    );


