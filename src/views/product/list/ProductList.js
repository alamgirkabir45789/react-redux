import React, { useState } from "react";
import { Button, Card, CardBody, CardHeader, Table } from "reactstrap";
import ProductAddForm from "../form/ProductAddForm";
const data = [
  {
    id: 1,
    customerName: "Alamgir",
    contactNumber: "014578925",
    email: "alamgir@gmail.com",
    product: [
      { id: 1, name: "PC", amount: 4004 },
      { id: 2, name: "Laptop", amount: 544 },
    ],
  },
  {
    id: 2,
    customerName: "Kabir",
    contactNumber: "014578925",
    email: "kabir@gmail.com",
    product: [
      { id: 1, name: "Mobile", amount: 644 },
      { id: 2, name: "Wrist Watch", amount: 944 },
    ],
  },
];
const ProductList = () => {
  const [myState, setMyState] = useState( data );
  const [edit, setEdit] = useState( [] );

  const handleDeleteRowData = ( id ) => {
    const remainRowData = myState.filter( ( i ) => i.id !== id );
    console.log( remainRowData );
    setMyState( remainRowData );
  };
  const handleEditRowData = ( item ) => {
    setEdit( item );
  };

  return (
    <Card className="m-3 p-3">
      <CardBody>
        <CardHeader>Product Information</CardHeader>
      </CardBody>
      <div>
        <ProductAddForm
          myState={myState}
          setMyState={setMyState}
          edit={edit}
          setEdit={setEdit}
        />
      </div>
      <div className="mt-3">
        <Table size="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer Name</th>
              <th>Contact Number</th>
              <th>Email</th>
              <th>Product Name</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myState?.map( ( item, index ) => (
              <tr key={index + 1}>
                <td>{index}</td>
                <td>{item.customerName}</td>
                <td>{item.contactNumber}</td>
                <td>{item.email}</td>

                <td className="border-bottom-1" style={{ color: "green" }}>
                  {item.product.map( ( p ) => (
                    <tr key={p.id}>
                      <td >{p.name}

                      </td>
                    </tr>
                  ) )}
                </td>
                <td>
                  {item.product.map( ( p ) => (
                    <tr key={p.id}>
                      <td >{p.amount}

                      </td>
                    </tr>
                  ) )}
                </td>

                <td >
                  <Button

                    onClick={() => {
                      handleEditRowData( item );
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => {
                      handleDeleteRowData( item.id );
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ) )}
          </tbody>
        </Table>
      </div>
    </Card>
  );
};

export default ProductList;
