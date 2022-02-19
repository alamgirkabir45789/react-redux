import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, CardBody, CardHeader, Table } from "reactstrap";
import ProductAddForm from "../form/ProductAddForm";

const ProductList = () => {
  const [myState, setMyState] = useState(  );
  const [edit, setEdit] = useState( [] );
  const [tableData, setTableData] = useState([])
  const fetchCustomerInfo =async () => { 
    const res=await axios.get('http://localhost:5005/customerInfo');
   setTableData(res.data)

   }
   useEffect(() => {
     fetchCustomerInfo();
   }, [])
   
  const handleDeleteRowData =async ( item ) => {
    console.log(JSON.stringify(item,null,2))
    try {
      await axios.delete('http://localhost:5005/customerInfo',{params:{id:item.id}})
alert("Data Deleted");
    } catch (error) {
      console.log(error)
    }

fetchCustomerInfo();

    // const remainRowData = myState.filter( ( i ) => i.id !== id );
    // setMyState( remainRowData );
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
          fetchCustomerInfo={fetchCustomerInfo}
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
            {tableData?.map( ( item, index ) => (
              <tr key={item.id}>
                <td>{index+1}</td>
                <td>{item.customerName}</td>
                <td>{item.contactNumber}</td>
                <td>{item.email}</td>

                <td className="border-bottom-1" style={{ color: "green" }}>
                  {item.product.map( ( p ,pId) => (
                    <tr key={p.id}>
                     <ul>                      
                       <li>{p.name}</li>
                     </ul>
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
                      handleDeleteRowData( item );
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
