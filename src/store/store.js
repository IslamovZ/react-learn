import {createStore} from 'redux';
import rootReducer from './reducers/rootReducer'
import initialStore from './initialStore';

export default createStore(rootReducer, initialStore)