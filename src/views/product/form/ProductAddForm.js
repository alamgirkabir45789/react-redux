import axios from "axios";
import React, { useEffect, useState } from "react";
import { Edit, Trash2 } from "react-feather";
import { Button, Card, Col, Input, Label, Row, Table } from "reactstrap";
const initialState = {
  id: 0,
  customerName: "",
  contactNumber: "",
  email: "",
  product: [{ id: 0, name: "", amount: 0 }],
};

const ProductAddForm = ( { myState, setMyState, edit, setEdit ,fetchCustomerInfo} ) => {
  //State
  const [state, setState] = useState( initialState );
  const [tableData, setTableData] = useState( [] );

  //#region Effects
  useEffect( () => {
    setState( { ...state, ...edit } )

  }, [edit] )

  //#region Events
  const resetForm = () => {
    state.product.amount = 0;
    state.product.name = "";
  };

  const handleAddProductToTable = () => {    
    const updatedProduct = state.product.map( ( p ) => ( {
      id: Math.floor( Math.random() * 100 ),
      name: p.name,
      amount: p.amount,
    } ) );
    setTableData( [...tableData, ...updatedProduct] );
    resetForm();
  };

  const handleInputArrayObjectChange = ( e ) => {
    const { name,  value } = e.target;
    const { product } = state;
    const updatedProduct = product.map( ( p ) => {
      p[name] = value;
      return p;
    } );
    setState( {
      ...state,
      product: updatedProduct,
    } );
  };

  const handleInputChange = ( e ) => {
    const { name, value } = e.target;
    setState( {
      ...state,
      [name]: value,
    } );
  };

  const handleDeleteDataFromTable = ( id ) => {
    const remainData = [...tableData];
    remainData.splice(
      remainData.findIndex( ( x ) => x.id === id ),
      1
    );
    setTableData( remainData );
  };
  const handleDeleteData =async (stId,itemId ) => {
 
const res=await axios.delete('http://localhost:5005/customerInfo/product/'+itemId); 
console.log(res)
    // const remainRowData = state.product.filter( ( i ) => i.id !== id );
    /// setState( remainRowData );
  };

  const handleEditDataFromTable = ( item ) => {
    const updateProduct =[
      state.product.id=item.id,
      state.product.name=item.name,
      state.product.amount=item.amount
    ]
    setState({...state,updateProduct})
   
  }

  const handleFinalSubmit =async ( id ) => {
    const submitArray = tableData.map( ( i ) => ( {
      id: i.id,
      name: i.name,
      amount: i.amount,
    } ) );

    if ( state.id !== 0 ) {
      const updateData = (
        {
          customerName: state.customerName,
          contactNumber: state.contactNumber,
          email: state.email,

        }
      )

    } else {
      const submitData = {
        id: Math.floor( Math.random() * 100 ),
        customerName: state.customerName,
        contactNumber: state.contactNumber,
        email: state.email,
        product: submitArray,
      };
      console.log( JSON.stringify(submitData,null,2) );

await axios.post('http://localhost:5005/customerInfo',submitData);
alert("Inserted!!!")
fetchCustomerInfo();
    }

    //setMyState( [...myState, ...submitArray] )
    setState( initialState );
    resetForm();
    setTableData( null );
  };

  return (
    <Card className="p-5">
      <Row>
        <Col lg={6} md={6} sm={6}>
          <div>
            <div>
              <Label for="customerName">Customer Name</Label>
              <Input
                id="customerName"
                name="customerName"
                type="text"
                value={state.customerName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label for="contactNumber">Contact No</Label>
              <Input
                id="contactNumber"
                name="contactNumber"
                type="text"
                value={state.contactNumber}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label for="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={state.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="d-flex">
              <div style={{ marginRight: "5px" }}>
                <Label for="name">Product Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={state.product.name}
                  onChange={( e ) => handleInputArrayObjectChange( e )}
                />
              </div>
              <div>
                <Label for="amount">Amount</Label>
                <Input
                  id="amount"
                  name="amount"
                  type="text"
                  value={state.product.amount}
                  onChange={( e ) => handleInputArrayObjectChange( e )}
                  onFocus={( e ) => e.target.select()}
                />
              </div>
              <div style={{ marginLeft: "5px", marginTop: "30px" }}>
                <Button type="submit" onClick={handleAddProductToTable}>
                  +
                </Button>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={6} md={6} sm={6}>
          <div>
            {
              state.id !== 0 ? (
                <Table size="sm" bordered striped>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Amount</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      state?.product?.map( ( item, index ) => (
                        <tr key={item.id}>
                          <td>{item.name}</td>
                          <td>{item.amount}</td>
                          <td className="mr-5">
                            <Button
                              onClick={() => {
                                handleEditDataFromTable( item );
                              }}
                            >
                              <Edit />
                            </Button>
                            <Button
                              onClick={() => {
                                handleDeleteData(item.id );
                              }}
                            >
                              <Trash2 />
                            </Button>
                          </td>
                        </tr>
                      ) )
                    }
                 
                  </tbody>
                </Table>
              ) : (
                <Table size="sm" bordered striped>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Amount</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData?.map( ( item, index ) => (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.amount}</td>
                        <td className="mr-5">
                          <Button
                            onClick={() => {
                              handleDeleteDataFromTable( item.id );
                            }}
                          >
                            -{" "}
                          </Button>
                        </td>
                      </tr>
                    ) )}
                  </tbody>
                </Table>
              )
            }

          </div>
        </Col>
      </Row>

      <div className="mt-2">
        <Button
          type="submit"
          onClick={( e ) => {
            handleFinalSubmit( e );
          }}
        >
          Submit
        </Button>
      </div>
      <pre>{JSON.stringify( state, null, 2 )}</pre>
    </Card>
  );
};

export default ProductAddForm;
