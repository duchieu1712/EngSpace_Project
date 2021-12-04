import {
    applyMiddleware,
    combineReducers,
    compose,
    createStore
} from 'redux';
import thunk from "redux-thunk";
import userReducer from './Reducers/userReducer';
import topicReducer from './Reducers/topicReducer';
import courseReducer from './Reducers/courseReducer';
import folderReducer from './Reducers/folderReducer';
import forumReducer from './Reducers/forumReducer';

const enhanceCompose = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootReducer = combineReducers({
    userReducer,
    topicReducer,
    courseReducer,
    folderReducer,
    forumReducer
})

const store = createStore(
    rootReducer,
    enhanceCompose
);
export default store;