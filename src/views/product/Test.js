import React, { useEffect, useState } from "react";
import { Edit, Trash2 } from "react-feather";
import { Button, Card, Col, Input, Label, Row, Table } from "reactstrap";

const initialState = {
    id: 0,
    customerName: "",
    contactNumber: "",
    email: "",
    product: [{ id: 0, name: "", amount: 0 }],
    productObj: { id: 0, name: '', amount: 0 }
};

const ProductAddForm = ( { myState, setMyState, edit, setEdit } ) => {
    const [state, setState] = useState( initialState );
    const [tableData, setTableData] = useState( [] );
    const [dataEdit, setDataEdit] = useState();
    console.log( state )
    useEffect( () => {
        setState( { ...state, ...edit } )

    }, [edit] )
    const resetForm = () => {
        state.product.amount = 0;
        state.product.name = "";
    };

    const handleAddProductToTable = () => {
        const { product, productObj } = state;
        setState( {
            ...state,
            product: [...product, productObj]
        } )
        resetForm();
    };

    const handleInputArrayObjectChange = ( e ) => {
        const { name, type, value } = e.target;
        const { product, productObj } = state;
        console.log( product );
        const updatedProductObj = {
            ...productObj,
            [name]: value
        }
        setState( {
            ...state,
            productObj: updatedProductObj,
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
    const handleDeleteData = ( id ) => {
        const remainRowData = state.product.filter( ( i ) => i.id !== id );
        console.log( remainRowData );
        /// setState( remainRowData );
    };

    const handleEditDataFromTable = ( item ) => {
        console.log( item )
        const { product, productObj } = state;
        // const updatedItem = product.splice(
        //   product.findIndex( ( p ) => p.id === item.id )
        // )
        // const updatedObjItem = {
        //   ...state,
        //   product: updatedItem
        // }
        // setState( updatedObjItem )

        const updatedObj = {
            ...state,
            productObj: item
        }
        console.log( updatedObj )
        setState( updatedObj )

        // const updateProduct = (
        //   {
        //     customerName: state.customerName,
        //     contactNumber: state.contactNumber,
        //     email: state.email,

        //   }
        // )
    }

    const handleFinalSubmit = ( id ) => {
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
            console.log( submitData );

            setMyState( [...myState, submitData] );
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
                                    value={state.productObj.name}
                                    onChange={( e ) => handleInputArrayObjectChange( e )}
                                />
                            </div>
                            <div>
                                <Label for="amount">Amount</Label>
                                <Input
                                    id="amount"
                                    name="amount"
                                    type="text"
                                    value={state.productObj.amount}
                                    onChange={( e ) => handleInputArrayObjectChange( e )}
                                    onFocus={( e ) => e.target.select()}
                                />
                            </div>
                            <div style={{ marginLeft: "5px", marginTop: "30px" }}>
                                <Button onClick={() => { handleAddProductToTable() }}>
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
                                                                handleDeleteData( item.id );
                                                            }}
                                                        >
                                                            <Trash2 />
                                                        </Button>
                                                    </td>
                                                </tr>
                                            ) )
                                        }
                                        {/* {state?.map( ( i, index ) => (
                      <tr key={i.id}>
                        <td>{i.name}</td>
                        <td>{i.amount}</td>
                        <td className="mr-5">
                          <Button
                            onClick={() => {
                              handleDeleteDataFromTable( i.id );
                            }}
                          >
                            -{" "}
                          </Button>
                        </td>
                      </tr>
                    ) )} */}
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
