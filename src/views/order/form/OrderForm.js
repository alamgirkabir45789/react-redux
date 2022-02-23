import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Input, Label, Row, Table } from "reactstrap";
import { initialState } from "../model";

const OrderForm = (props) => {
  const { fetchOrderInfo, editState } = props;
  const [state, setState] = useState(initialState);
  const [tableData, setTableData] = useState([]);

  const resetState = () => {
    (state.customerName = ""), (state.contactNumber = ""), (state.email = "");
  };

  const resetProduct = () => {
    state.product.map((m) => ((m.name = ""), (m.amount = "")));
  };

  const handleInputChange = (e, id) => {
    const { name, value } = e.target;
    const prev = { ...state };
    prev[name] = value;
    setState(prev);
  };

  const handleNameChange = (e) => {
    const { name, value } = e.target;
    const product = state.product.map((item) => {
      item[name] = value;
      return item;
    });
    setState({ ...state, product });
  };
  const handleRemoveFromProductTable = (id) => {
    const remainData = tableData.filter((item) => item.id !== id);
    setTableData(remainData);
  };
  const handleEditProductTableData = (item) => {
    const data = state.product.map((m) => {
      m.id = item.id;
      m.name = item.name;
      m.amount = item.amount;
      return m;
    });
    setState({ ...state, product: data });
  };
  console.log(tableData)
  const addProduct = () => {
   const prodId=state.product.map(m=>m.id);
   console.log(prodId)
    if (prodId) {
      console.log("res1")
      const payload = state.product.map((pd) => ({
        id: pd.id,
        name: pd.name,
        amount: pd.amount,
      }));
      setTableData([...tableData, ...payload]);
    } else {

      const payload = state.product.map((pd) => ({
        id: Math.floor(Math.random() * 100),
        name: pd.name,
        amount: pd.amount,
      }));
      setTableData([...tableData, ...payload]);
    }

    resetProduct();
  };
  const editInfo = () => {
    if (editState) {
      const prod = editState.product.map((item) => {
        return item;
      });
      const data = {
        id: editState.id,
        customerName: editState.customerName,
        contactNumber: editState.contactNumber,
        email: editState.email,
        product: [
          {
            id: 0,
            name: "",
            amount: 0,
          },
        ],
      };
      setState(data);
      setTableData(prod);
    }
  };

  useEffect(() => {
    editInfo();
  }, [editState]);

  const onSubmit = async () => {
    if (state.id != 0) {
      const payload = {
        id: state.id,
        customerName: state.customerName,
        contactNumber: state.contactNumber,
        email: state.email,
        product: tableData,
      };
      await axios.put("http://localhost:5005/customerInfo/"+state.id, payload);
      alert("Data Updated");
      console.log(JSON.stringify(payload, null, 2));
    } else {
      const payload = {
        id: Math.floor(Math.random() * 100),
        customerName: state.customerName,
        contactNumber: state.contactNumber,
        email: state.email,
        product: tableData,
      };
      await axios.post("http://localhost:5005/customerInfo", payload);
      alert("Data Inserted");
      console.log(JSON.stringify(payload, null, 2));
    }

    fetchOrderInfo();
    resetState();
  };

  return (
    <div>
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
                    value={state?.product?.map((m) => m.name)}
                    onChange={handleNameChange}
                  />
                </div>
                <div>
                  <Label for="amount">Amount</Label>
                  <Input
                    id="amount"
                    name="amount"
                    type="text"
                    value={state?.product?.map((m) => m.amount)}
                    onChange={handleNameChange}
                  />
                </div>
                <div style={{ marginLeft: "5px", marginTop: "30px" }}>
                  <Button
                    type="button"
                    onClick={addProduct}
                    className="bg-info"
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} md={6} sm={6}>
            <div>
              <Table size="sm" bordered striped>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData?.map((pd, index) => (
                    <tr key={index}>
                      <td>{pd.name}</td>
                      <td>{pd.amount}</td>
                      <td className="mr-5">
                        <Button
                          className="bg-primary"
                          type="button"
                          id="removeProduct"
                          onClick={() => handleEditProductTableData(pd)}
                        >
                          Edit
                        </Button>
                        <Button
                          className="bg-danger"
                          type="button"
                          onClick={() => {
                            handleRemoveFromProductTable(pd.id);
                          }}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>

        <div className="mt-2">
          <Button type="button" onClick={onSubmit} className="bg-primary">
            Submit
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default OrderForm;
