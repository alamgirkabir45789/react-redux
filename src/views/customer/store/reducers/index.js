import { initialCustomerInfo } from "../../model";
import { ADD_CUSTOMER, DELETE_CUSTOMER, GET_ALL_CUSTOMER, GET_CUSTOMER_BY_ID, UPDATE_CUSTOMER } from "../action-types";

const initialState = {
    customers: [],
    selectedCustomer:initialCustomerInfo

}

const customerReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case GET_ALL_CUSTOMER:
            return { ...state, customers: action.customers }

        case GET_CUSTOMER_BY_ID:
                return{
                    ...state,
                    selectedCustomer:action.selectedCustomer
                }
         case ADD_CUSTOMER:
                return{
                    ...state
                }
         case UPDATE_CUSTOMER:
                return{
                    ...state
                }
         case DELETE_CUSTOMER:
                return{
                    ...state
                }
        default:
            return state
    }

}
export default customerReducer;