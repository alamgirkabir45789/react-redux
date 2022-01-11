import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, CardBody, CardHeader, Table } from 'reactstrap';
import CustomerAddForm from '../form/CustomerAddForm';
import { deleteCustomer, getAllCustomer, getCustomerById } from '../store/actions';

const CustomerList = () => {
    const dispatch = useDispatch();
    const { customers } = useSelector( ( { customers } ) => customers )
    console.log( customers )

   

    useEffect( () => {
        dispatch(
            getAllCustomer()
        )
    }, [dispatch] )
    return (
        <Card className="m-2">
            <CardBody >
                <CardHeader className="text-center">
                    Customer List
                </CardHeader>
                <div className="p-5 ">
                    <CustomerAddForm />
                </div>
                <Card className="mt-3">
                    <Table >
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Email</th>

                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                customers?.map( ( i, index ) => (
                                    <tr key={index}>
                                        <td>{i.name}</td>
                                        <td>{i.phone}</td>
                                        <td>{i.email}</td>
                                        <td>{i.address}</td>
                                        <td>{i.message}</td>

                                        <td >
                                            <Button style={{ marginRight: '10px', backgroundColor: 'green' }}onClick={()=>dispatch(getCustomerById(i.id))}>Edit</Button>
                                            <Button className="bg-warning" onClick={()=>dispatch(deleteCustomer(i.id))}>Delete</Button>
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

export default CustomerList
