import { basicContactInfo } from "../../model";
import { ADD_CONTACT, DELETE_CONTACT, GET_ALL_CONTACTS, GET_CONTACT_BY_ID, UPDATE_CONTACT } from "../action-types";

const initialState = {
    contacts: [],
    selectedContact: basicContactInfo
}



const contactReducer = ( state = initialState, action ) => {
    // eslint-disable-next-line default-case
    switch ( action.type ) {
        case GET_ALL_CONTACTS:
            return { ...state, contacts: action.contacts }
        case GET_CONTACT_BY_ID:
            return {
                ...state,
                selectedContact: action.selectedContact
            }
        case ADD_CONTACT:
            return {
                ...state,

            }
        case DELETE_CONTACT:
            return {
                ...state
            }
        case UPDATE_CONTACT:
            return {
                ...state
            }
        default:
            return state;
    }
}
export default contactReducer;