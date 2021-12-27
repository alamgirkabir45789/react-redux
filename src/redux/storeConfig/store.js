import { applyMiddleware, compose, createStore } from "redux";
import createDebounce from "redux-debounced";
import thunk from 'redux-thunk';
import rootReducer from "../reducers/rootReducers";
// ** init middleware
const middleware = [thunk, createDebounce()];

// ** Dev Tools
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

// ** Create store
const store = createStore( rootReducer, {}, composeEnhancers( applyMiddleware( ...middleware ) ) );

export { store };

