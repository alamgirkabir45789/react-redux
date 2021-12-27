import axios from "axios"
import { GET_ALL_CUSTOMER } from "../action-types"

export const getAllCustomer = () => {
    return dispatch => {
        axios.get( `http://localhost:5005/customer` ).then( response => {
            dispatch( {
                type: GET_ALL_CUSTOMER,
                customers: response.data
            } )
        } )
    }

}