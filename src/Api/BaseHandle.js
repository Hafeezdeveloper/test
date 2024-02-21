import axios from "axios";


const BaseHandler = axios.create({
    baseURL:""
})

let GetApi = (endPoint) =>{
    return BaseHandler.get(endPoint)
}

let PostApi = (endPoint,body) =>{
    return BaseHandler.post(`${endPoint}`,body)
}

let PutApi = (endPoint,id,body) =>{
    return BaseHandler.put(`${endPoint}/${id}`,body)
}


const DeleteApi = (endpoint,id,body) =>{
    return BaseHandler.delete(`${endpoint}/${id}`,body)
}

export {GetApi,PostApi,PutApi,DeleteApi}
