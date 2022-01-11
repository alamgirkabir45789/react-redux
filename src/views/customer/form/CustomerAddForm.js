import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, Input, Label } from 'reactstrap';
import { addCustomer, bindCustomerInitialState, updateCustomer } from '../store/actions';

const CustomerAddhtmlForm = () => {
    const dispatch = useDispatch();
    const { selectedCustomer } = useSelector( ( { customers } ) => customers )

    console.log(selectedCustomer)
  const handleSubmit=(e)=>{
      e.preventDefault();
      if(selectedCustomer.id !==0){
        dispatch(updateCustomer(
            selectedCustomer.id,{
                id:selectedCustomer.id,
                name:selectedCustomer.name,
                email:selectedCustomer.email,
                phone:selectedCustomer.phone,
                address:selectedCustomer.address,
                message:selectedCustomer.message
            }
        ))
        alert('Data Updated!');
       dispatch(bindCustomerInitialState(null))

      }else{
      

          dispatch(
            addCustomer({
                name:selectedCustomer.name,
                email:selectedCustomer.email,
                phone:selectedCustomer.phone,
                address:selectedCustomer.address,
                message:selectedCustomer.message
            })
        )
        alert('Data Inserted ')
      }
      dispatch(bindCustomerInitialState(null))
  }

    const handleInputChange = ( e ) => {
        const { name, value } = e.target;
        const prevState = { ...selectedCustomer };
        prevState[name] = value;
        console.log( prevState )
        dispatch( bindCustomerInitialState( prevState ) )
    }

    return (
        <Card className="p-5">
            <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" type="text" value={selectedCustomer?.name} onChange={handleInputChange} />
            </div>
            <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="text" value={selectedCustomer?.email} onChange={handleInputChange} />
            </div>
            <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" type="text" value={selectedCustomer?.phone} onChange={handleInputChange} />
            </div>
            <div>
                <Label htmlFor="address">Address</Label>
                <Input id="address" name="address" type="text" value={selectedCustomer?.address} onChange={handleInputChange} />
            </div>
            <div>
                <Label htmlFor="message">Message</Label>
                <Input id="message" name="message" type="textarea" value={selectedCustomer?.message} onChange={handleInputChange} />
            </div>
            <div className='float-right mt-3'>
                <Button onClick={handleSubmit} type='submit'>Submit</Button>
            </div>
        </Card>
    )
}

export default CustomerAddhtmlForm
