import axios from "axios";
import { initialCustomerInfo } from "../../model";
import {
  ADD_CUSTOMER,
  DELETE_CUSTOMER,
  GET_ALL_CUSTOMER,
  GET_CUSTOMER_BY_ID,
  UPDATE_CUSTOMER,
} from "../action-types";

export const getAllCustomer = () => {
  return (dispatch) => {
    axios.get(`http://localhost:5005/customer`).then((response) => {
      dispatch({
        type: GET_ALL_CUSTOMER,
        customers: response.data,
      });
    });
  };
};

export const getCustomerById = (id) => {
  return (dispatch) => {
    axios.get(`${"http://localhost:5005/customer"}/${id}`).then((response) => {
      console.log(response.data);
      dispatch({
        type: GET_CUSTOMER_BY_ID,
        selectedCustomer: response.data ? response.data : null,
      });
    });
  };
};

export const bindCustomerInitialState = (selectedData) => {
  console.log(selectedData);
  if (selectedData) {
    return (dispatch) => {
      dispatch({
        type: GET_CUSTOMER_BY_ID,
        selectedCustomer: selectedData,
      });
    };
  } else {
    return (dispatch) => {
      dispatch({
        type: GET_CUSTOMER_BY_ID,
        selectedCustomer: initialCustomerInfo,
      });
    };
  }
};

export const addCustomer = (customer) => {
  return (dispatch) => {
    axios
      .post("http://localhost:5005/customer", customer)
      .then((response) => {
        dispatch({
          type: ADD_CUSTOMER,
          customer,
        });
      })
      .then(() => {
        dispatch(getAllCustomer());
      })
      .catch((err) => console.log(err));
  };
};

export const updateCustomer = (id, customer) => {
  return (dispatch) => {
    axios
      .put(`${`http://localhost:5005/customer`}/${id}`, customer)
      .then((response) => {
        dispatch({
          type: UPDATE_CUSTOMER,
          customer,
        });
      })
      .then(() => {
        dispatch(getAllCustomer());
      })
      .catch((err) => console.log(err));
  };
};

export const deleteCustomer = (id) => {
  return (dispatch) => {
    axios
      .delete(`${"http://localhost:5005/customer"}/${id}`)
      .then((response) => {
        dispatch({
          type: DELETE_CUSTOMER,
        });
      })
      .then(() => {
        dispatch(getAllCustomer());
      })
      .catch((err) => console.log(err));
  };
};
