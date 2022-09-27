import axios from "axios";
import { useContext } from "react";

import { AppContext } from "../context/AppContext";
const GetToken = ()=>{
    const {token} = useContext(AppContext);

    return token;
}
 const instance = axios.create({
    baseURL: 'https://gru.wbl.mybluehostin.me/api'
})
export default instance