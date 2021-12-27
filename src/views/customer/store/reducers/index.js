import { GET_ALL_CUSTOMER } from "../action-types";

const initialState = {
    customers: [],

}

const customerReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case GET_ALL_CUSTOMER:
            return { ...state, customers: action.customers }
        default:
            return state
    }

}
export default customerReducer;