import axios from "axios"

const baseURL = "http://localhost:8005/api"

const apiClient = axios.create({
    baseURL,
    headers:{
        "Content-Type":"application/json",
    }
}
)

export default apiClient