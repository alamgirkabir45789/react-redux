import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input, Label } from 'reactstrap';
import { addContact, bindContactBasicInfo, updateContact } from '../store/actions';


const ContactForm = () => {
    const dispatch = useDispatch()
    const { selectedContact } = useSelector( ( { contacts } ) => contacts )


    console.log( selectedContact )


    const handleSubmit = () => {
        if ( selectedContact.id !== 0 ) {
            dispatch(
                updateContact( selectedContact.id, {
                    id: selectedContact.id,
                    name: selectedContact.name,
                    age: selectedContact.age
                } )
            )

        } else {

            dispatch(
                addContact( {

                    name: selectedContact.name,
                    age: selectedContact.age
                } )
            )
        }
        dispatch( bindContactBasicInfo( null ) )

    }


    const handleInputChange = ( e ) => {
        const { name, value } = e.target;
        const prevState = { ...selectedContact };
        prevState[name] = value;
        dispatch( bindContactBasicInfo( prevState ) )
    }


    return (
        <div className="container" style={{ height: '200px', width: '400px' }}>
            <div>
                <Label htmlFor="name">Name</Label>
                <Input bsSize="sm" type="text" name="name" id="name" value={selectedContact?.name} onChange={handleInputChange} />
            </div>
            <div>
                <Label htmlFor="age">Age</Label>
                <Input bsSize="sm" type="number" name="age" id="age" value={selectedContact?.age} onChange={handleInputChange} />
            </div>
            <div className="float-right mt-3 ">
                {
                    selectedContact?.id !== 0 ? (
                        <Button className="bg-success" type="submit" onClick={( e ) => handleSubmit( e )}
                        >Update</Button>
                    ) : (
                        <Button className="bg-info" type="submit" onClick={( e ) => handleSubmit( e )}
                        >Save</Button>
                    )
                }

            </div>
        </div>
    )
}

export default ContactForm
