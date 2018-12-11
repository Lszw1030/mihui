
import {combineReducers} from 'redux';
import cartReducer from './cartReducer'
import goodReducer from './goodReducer';
import footerReducer from './footerReducer'
let rootReducer = combineReducers({cartReducer,goodReducer,footerReducer})
export default rootReducer;