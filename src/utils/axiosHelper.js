import axios from 'axios'

const rootUrl = "http://localhost:8000/api/v1"
const userUrl = rootUrl + "/user";

console.log("hi, form acios");
export const postUser = (formData) => {
    try{
        return axios.post(userUrl, formData)
        console.log("iam from axios ")

    }catch(error){
        return {
            status : "error",
            message: error.message,
        }
    }
 
}

export const loginUser = (formData) => {
   try {
    return axios.post(userUrl + "/login", formData)
    
   } catch (error) {
    return {
        status: "error",
        message: error.message,
    }
    
   }
}