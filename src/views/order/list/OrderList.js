import { PDFViewer } from "@react-pdf/renderer";
import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Button, Card, Table } from "reactstrap";
import { baseAxios } from "../../../services/api-end-points";
import OrderForm from "../form/OrderForm";
import ViewOrder from "./ViewOrder";

const OrderList = () => {
  //#region States
  const [orderInfo, setOrderInfo] = useState([]);
  const [editState, setEditState] = useState();

  //#region UDFs
  const fetchOrderInfo = async () => {
    const res = await baseAxios.get("http://localhost:5005/customerInfo");
    setOrderInfo(res.data);
  };
  //#endregion
  //#region Effects
  useEffect(() => {
    fetchOrderInfo();
  }, []);

  const handleEdit = (customer) => {
    setEditState(customer);
  };
  const handleDelete = async (id) => {
    await axios.delete("http://localhost:5005/customerInfo/" + id);
    alert("Deleted");
    fetchOrderInfo();
  };

  const handlePrint = () => {
    console.log("print");
  };
  return (
    <Fragment>
      <PDFViewer width="100%" height="1000px">
        <ViewOrder data={orderInfo} />
      </PDFViewer>
      <Card className="p-3">
        <OrderForm fetchOrderInfo={fetchOrderInfo} editState={editState} />
      </Card>
      <Card className="m-3">
        <Table size="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer Name</th>
              <th>Contact Number</th>
              <th>Email</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orderInfo.map((oi) => (
              <tr key={oi.id}>
                <td>{oi.id}</td>
                <td>{oi.customerName}</td>
                <td>{oi.contactNumber}</td>
                <td>{oi.email}</td>
                <td>
                  <Table>
                    <tbody>
                      {oi.product.map((p) => (
                        <tr key={p.id}>
                          <td>{p.name}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </td>
                <td>
                  <Table>
                    <tbody>
                      {oi.product.map((p) => (
                        <tr key={p.id}>
                          <td>{p.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </td>
                <td>
                  <Button
                    className="bg-primary"
                    type="button"
                    onClick={() => handleEdit(oi)}
                  >
                    Edit
                  </Button>
                  <Button
                    style={{ marginLeft: "5px" }}
                    className="bg-danger"
                    type="button"
                    onClick={() => handleDelete(oi.id)}
                  >
                    Delete
                  </Button>
                  <Button
                    type="button"
                    style={{ marginLeft: "15px" }}
                    onClick={handlePrint}
                  >
                    Print
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </Fragment>
  );
};

export default OrderList;
