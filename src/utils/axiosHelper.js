import axios from 'axios'

const rootUrl = "http://localhost:8000/api/v1"
const userUrl = rootUrl + "/user";
const bookUrl = rootUrl + "/book";

export const postUser = (formData) => {
    try{
        return axios.post(userUrl, formData)
        

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

// for the teachers backend dashboard 
export const addBook = (formData) => {
    try {
        return axios.post(bookUrl, formData);
        console.log("iam from axios: book testing")
        
    } catch (error) {
        return{
            status: "error",
            message: error.message,
        }
        
    }
}

// for retreving books 
export const viewBook = async()  => {
    try {
        const {data} = await axios.get(bookUrl)
        return data;
        
    } catch (error) {
        return{
            status:"error",
            message: error.message
        }
        
    }

}