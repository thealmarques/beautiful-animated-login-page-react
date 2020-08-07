import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userState } from './reducers/user.reducers';

const rootReducer = combineReducers({
    userState
});


export default createStore(rootReducer, composeWithDevTools());