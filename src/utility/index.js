//Base Url
const {
  REACT_APP_BASE_URL_SERVER_API,
  REACT_APP_BASE_URL_LOCAL_API,
  REACT_APP_BASE_URL_LOCAL_HOST,
  REACT_APP_BASE_URL_SERVER_LOCAL_HOST,
} = process.env;


export const baseUrl =
  process.env.NODE_ENV === "development"
    ? REACT_APP_BASE_URL_SERVER_API
    : REACT_APP_BASE_URL_LOCAL_API;
export const localUrl =
  process.env.NODE_ENV === "production"
    ? REACT_APP_BASE_URL_SERVER_LOCAL_HOST
    : REACT_APP_BASE_URL_LOCAL_HOST;
