import { combineReducers } from "redux";
import contacts from '../../views/contact/store/reducers';
import customers from '../../views/customer/store/reducers';
const rootReducer = combineReducers( {
    contacts,
    customers
} )
export default rootReducer;