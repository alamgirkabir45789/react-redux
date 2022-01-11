import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, CardBody, CardHeader, Table } from 'reactstrap';
import ContactForm from '../form/ContactForm';
import { deleteContact, getAllContacts, getContactById } from '../store/actions';

const ContactList = () => {
    const dispatch = useDispatch();
    const { contacts } = useSelector( ( { contacts } ) => contacts )

    useEffect( () => {
        dispatch(
            getAllContacts()
        )
    }, [dispatch] )

    return (
        <Card className="m-2">
            <CardBody >
                <CardHeader className="text-center">
                    Contact List
                </CardHeader>
                <div className="p-5 ">
                    <ContactForm />
                </div>
                <Card className="mt-3">
                    <Table hover striped className='text-center' bordered>
                        <thead>
                            <tr >
                                <th>Name</th>
                                <th>Age</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contacts?.map( ( i, index ) => (
                                    <tr key={index} >
                                        <td>{i.name}</td>
                                        <td>{i.age}</td>
                                        <td >
                                            <Button style={{ marginRight: '10px', backgroundColor: 'green' }} onClick={() => dispatch( getContactById( i.id ) )}>Edit</Button>
                                            <Button className="bg-warning" onClick={() => dispatch( deleteContact( i.id ) )}>Delete</Button>
                                        </td>
                                    </tr>
                                ) )
                            }
                        </tbody>
                    </Table>
                </Card>
            </CardBody>
        </Card>
    )
}

export default ContactList
