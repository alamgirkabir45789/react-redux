import { baseAxios } from "../../../../services/api-end-points"
import { accountApi } from "../../../../services/api-end-points/accounts"
import { basicContactInfo } from "../../model"
import { ADD_CONTACT, DELETE_CONTACT, GET_ALL_CONTACTS, GET_CONTACT_BY_ID, UPDATE_CONTACT } from '../action-types'

export const getAllContacts = () => {
    return dispatch => {
        baseAxios.get( `${accountApi.contact.root}` ).then( response => {
            console.log( 'response', response.data )
            dispatch( {
                type: GET_ALL_CONTACTS,
                contacts: response.data
            } )
        } )
    }
}

export const getContactById = ( id ) => {
    return dispatch => {
        baseAxios.get( `${accountApi.contact.root}/${id}` ).then( response => {
            console.log( response.data )
            dispatch( {
                type: GET_CONTACT_BY_ID,
                selectedContact: response.data ? response.data : null
            } )
        } )
    }
}
export const bindContactBasicInfo = ( selectedData ) => {
    if ( selectedData ) {
        return dispatch => {
            dispatch( {
                type: GET_CONTACT_BY_ID,
                selectedContact: selectedData
            } )
        }
    }
    else {
        return dispatch => {
            dispatch( {
                type: GET_CONTACT_BY_ID,
                selectedContact: basicContactInfo
            } )
        }
    }

}

export const addContact = ( contact ) => {
    return dispatch => {
        baseAxios.post( accountApi.contact.root, contact ).then( response => {
            dispatch( {
                type: ADD_CONTACT,
                contact
            } )
        } ).then( () => {
            dispatch( getAllContacts() );
        } ).catch( err => console.log( err ) )
    }
}

export const updateContact = ( id, contact ) => {
    console.log( "update" )
    console.log( JSON.stringify( contact, null, 2 ) )
    return dispatch => {
        baseAxios.put( `${accountApi.contact.root}/${id}`, contact ).then( response => {
            console.log( response.data )
            dispatch( {
                type: UPDATE_CONTACT,
                contact
            } )
            dispatch( getAllContacts() )
        } )
    }
}

export const deleteContact = ( id ) => {

    return dispatch => {
        baseAxios.delete( `${accountApi.contact.root}/${id}` ).then( response => {
            dispatch( {
                type: DELETE_CONTACT

            } )
        } ).then( () => {
            dispatch( getAllContacts() );
        } ).catch( err => console.log( err ) )
    }
}