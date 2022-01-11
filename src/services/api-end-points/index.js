import axios from "axios";
import { baseUrl } from "../../utility";


export const baseAxios=axios.create({
    baseURL:baseUrl
});