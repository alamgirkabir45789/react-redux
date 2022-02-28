import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import Select from "react-select";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Table,
} from "reactstrap";
import defaultImg from "../../../assets/images/download.png";

const styles = {
  preview: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    height: "300px",
    width: "300px",
  },
  image: {
    boxSizing: "border-box",
    height: "300px",
    width: "300px",
    display: "block",
  },
  remove: {
    cursor: "pointer",
    padding: "10px",
    background: "red",
    color: "white",
    border: "none",
  },
};
const productCategoryDropdown = [
  { label: "Electronics", value: "Electronics" },
  { label: "Accessories", value: "Accessories" },
  { label: "Garments", value: "Garments" },
];
const initialState = {
  id: 0,
  productName: "",
  productCategory: "",
  productPrice: "",
  productImage: "",
  fileName: "",
  URL: "",
  productStatus: false,
};
const Home = () => {
  //#region States
  const [state, setState] = useState(initialState);
  const [product, setProduct] = useState([]);
  const [productCategory, setProductCategory] = useState(null);
  const [selectedImage, setSelectedImage] = useState();
  //#region UDS
  const resetState = () => {
    (state.productName = ""), (state.productPrice = "");
  };
  //#region Effect
  const getProduct = async () => {
    const res = await axios.get("http://localhost:5005/product");
    setProduct(res.data);
  };

  useEffect(() => {
    console.log("render");
    getProduct();
    setSelectedImage(selectedImage);
  }, [selectedImage]);

  //#region Events
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const prev = { ...state };
    prev[name] =
      type === "number" ? Number(value) : type === "checkbox" ? checked : value;
    setState(prev);
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      productName: state.productName,
      productCategory: productCategory.value,
      productPrice: state.productPrice,
      productImage: state.productImage,
      productStatus: state.productStatus,
    };
    if (state.id > 0) {
      await axios.put("http://localhost:5005/product/"+ state.id,payload);
      alert("Updated!!!");
    } else {
      await axios.post("http://localhost:5005/product", payload);
      alert("Inserted!!!");
    }

    setProductCategory(productCategory);
    setSelectedImage(selectedImage);
    console.log(JSON.stringify(payload, null, 2));
    resetState();
    getProduct();
  };
  const handleProductCategoryChange = (data) => {
    setProductCategory(data);
  };
  const onImageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const fileURL = URL.createObjectURL(file);
      // const fileName = file.name;

      let reader=new FileReader();
      reader.readAsDataURL(file);
      console.log(reader.onload(e.target.result))

      setState({ ...state, productImage: fileURL });
      setSelectedImage(file);
      setSelectedImage(fileURL);
      //  setSelectedImage(e.target.files[0]);
    }
  };

  const removeSelectedImage = () => {
    setSelectedImage();
  };

  const handleEditProduct = (item) => {
    console.log(item);
    const selectedProductCategory = productCategoryDropdown.find(
      (pd) => pd.value === item.productCategory
    );
    const updatedImage = item.productImage;
    console.log(updatedImage);
    const data = {
      id: item.id,
      productName: item.productName,
      productPrice: item.productPrice,
      productStatus: item.productStatus,
      productImage: item.productImage,
    };
    setState(data);
    setProductCategory(selectedProductCategory);
    setSelectedImage(updatedImage);
  };

  const handleDeleteProduct = async (id) => {
    await axios.delete("http://localhost:5005/product/" + id);
    alert("Deleted!!");
    getProduct();
  };
  return (
    <Fragment>
      {/* <PDFDownloadLink document={<PDFView/>} fileName='FORM'>
{({loading})=>(loading?<button>Loading Document...</button>:<button>Download</button>)}
     </PDFDownloadLink>
      <PDFView/> */}
      <div className="p-3">
        <Row>
          <Col lg={6} sm={6} xs={6} xl={6}>
            <Form onSubmit={handleFormSubmit}>
              <FormGroup>
                <Label for="productName">Product Name</Label>
                <Input
                  type="text"
                  id="productName"
                  name="productName"
                  value={state.productName}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="productCategory">Product Category</Label>
                <Select
                  id="productCategory"
                  name="productCategory"
                  isClearable
                  isSearchable
                  options={productCategoryDropdown}
                  classNamePrefix="select"
                  value={productCategory}
                  onChange={handleProductCategoryChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="productPrice">Product Price</Label>
                <Input
                  type="number"
                  id="productPrice"
                  name="productPrice"
                  value={state.productPrice}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="productImage">Product Image</Label>
                <Input
                  accept="image/*"
                  type="file"
                  id="productImage"
                  name="productImage"
                  onChange={onImageChange}
                />
              </FormGroup>
              {selectedImage ? (
                <div
                  style={{
                    boxSizing: "content-box",
                    width: "300px",
                    height: "300px",
                    textAlign: "center",
                    padding: "10px",
                    border: "3px solid green",
                  }}
                >
                  <img
                    height="300px"
                    width="300px"
                    src={selectedImage}
                    //src={URL.createObjectURL(selectedImage)}
                    alt="No Image"
                  />
                  <button
                    onClick={removeSelectedImage}
                    style={{
                      marginTop: "25px",
                      background: "red",
                      color: "white",
                      border: "none",
                    }}
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <div
                  style={{
                    boxSizing: "content-box",
                    width: "300px",
                    height: "300px",
                    textAlign: "center",
                    padding: "10px",
                    border: "3px solid silver",
                  }}
                >
                  <img
                    height="300px"
                    width="300px"
                    src={defaultImg}
                    alt="No Image"
                  />
                </div>
              )}
              <FormGroup>
                <Input
                  type="checkbox"
                  id="productStatus"
                  name="productStatus"
                  value={state.productStatus}
                  checked={state.productStatus}
                  onChange={handleInputChange}
                />
                <Label for="productStatus" style={{ marginLeft: "10px" }}>
                  In Stock
                </Label>
              </FormGroup>
              <Button type="submit" className="bg-primary">
                Submit
              </Button>
            </Form>
          </Col>
          <Col lg={6} sm={6} xs={6} xl={6}>
            <Table>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Product Category</th>
                  <th>Product Price</th>
                  <th>Product Status</th>
                  <th>Product Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {product.map((item) => (
                  <tr key={item.id}>
                    <td>{item.productName}</td>
                    <td>{item.productCategory}</td>
                    <td>{item.productPrice}</td>
                    <td>{item.productStatus ? "In Stock" : "Out of Stock"}</td>
                    <td>
                      <img
                        height="50px"
                        width="100px"
                        src={item.productImage}
                        alt=""
                      />
                    </td>
                    <td>
                      <Button
                        type="button"
                        className="bg-primary"
                        onClick={() => handleEditProduct(item)}
                      >
                        Edit
                      </Button>
                      <Button
                        onClick={() => handleDeleteProduct(item.id)}
                        type="button"
                        className="bg-danger"
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default Home;
