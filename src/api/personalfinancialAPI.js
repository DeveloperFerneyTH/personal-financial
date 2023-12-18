import axios from "axios";

const financialApi = axios.create({
    baseURL: ''
})

export default financialApi