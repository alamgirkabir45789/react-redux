import React, { useState } from "react";
import { PlusSquare, Trash2 } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Input, Label, Table } from "reactstrap";
import {
  addCustomer,
  bindCustomerInitialState,
  updateCustomer,
} from "../store/actions";
const CustomerAddhtmlForm = () => {
  const dispatch = useDispatch();
  const { selectedCustomer } = useSelector(({ customers }) => customers);
  console.log(selectedCustomer.product);
  const [product, setProduct] = useState("");
  const [amount, setAmount] = useState(0);
  const [cost, setCost] = useState(0);
  const [productArray, setProductArray] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCustomer.id !== 0) {
      dispatch(
        updateCustomer(selectedCustomer.id, {
          id: selectedCustomer.id,
          name: selectedCustomer.name,
          email: selectedCustomer.email,
          phone: selectedCustomer.phone,
          address: selectedCustomer.address,
          message: selectedCustomer.message,
        })
      );
      alert("Data Updated!");
      dispatch(bindCustomerInitialState(null));
    } else {
      dispatch(
        addCustomer({
          name: selectedCustomer.name,
          email: selectedCustomer.email,
          phone: selectedCustomer.phone,
          address: selectedCustomer.address,
          product: productArray,
          message: selectedCustomer.message,
        })
      );
      alert("Data Inserted ");
    }
    dispatch(bindCustomerInitialState(null));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const prevState = { ...selectedCustomer };
    prevState[name] = value;
    dispatch(bindCustomerInitialState(prevState));
  };

  const handleAddProduct = () => {
    const data = {
      id: Math.floor(Math.random() * 100),
      productName: product,
      amount: amount,
      cost: cost,
    };
    setProductArray([...productArray, data]);
    dispatch(
      bindCustomerInitialState({ ...selectedCustomer, product: productArray })
    );
  };

  const handleRemoveProduct = (pIdx) => {
    console.log(pIdx);
    const _productArray = [...productArray];
    // const clickedItem = _productArray[pIdx];
    _productArray.splice(pIdx, 1);

    // const remainProduct = _productArray.filter(
    //   (item) => item.id != clickedItem.id
    // );
    setProductArray(_productArray);
  };
  return (
    <>
      <div className="d-flex justify-content-around">
        <Card className="p-5">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={selectedCustomer?.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="text"
              value={selectedCustomer?.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              type="text"
              value={selectedCustomer?.phone}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              name="address"
              type="text"
              value={selectedCustomer?.address}
              onChange={handleInputChange}
            />
          </div>

          <div className="d-flex justify-content-between">
            <div>
              <Label htmlFor="product">Product Name</Label>
              <Input
                id="product"
                name="product"
                type="text"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="quantity">Quantity</Label>
              <Input
                id="quantity"
                name="quantity"
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="price">Price</Label>
              <Input
                id="price"
                name="price"
                type="text"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
              />
            </div>
            <div>
              <Button
                className="mt-4 bg-primary"
                type="button"
                onClick={handleAddProduct}
              >
                <PlusSquare />
              </Button>
            </div>
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Input
              id="message"
              name="message"
              type="textarea"
              value={selectedCustomer?.message}
              onChange={handleInputChange}
            />
          </div>
          <div className="float-right mt-3">
            <Button onClick={handleSubmit} type="submit">
              Submit
            </Button>
          </div>
        </Card>
        <Card>
          <Table responsive hover bordered>
            <thead>
              <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {productArray.map((pd, pIdx) => (
                <tr key={pd.id}>
                  <td>{pd.productName}</td>
                  <td>{pd.amount}</td>
                  <td>{pd.cost}</td>
                  <td>
                    <Button
                      className="bg-danger"
                      type="button"
                      onClick={() => handleRemoveProduct(pIdx)}
                    >
                      <Trash2 size={16} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>
      </div>
    </>
  );
};

export default CustomerAddhtmlForm;
