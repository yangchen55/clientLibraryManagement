import axios from 'axios'

const rootUrl = "http://localhost:8000/api/v1"
const userUrl = rootUrl + "/user";
const bookUrl = rootUrl + "/book";
const transUrl = rootUrl + "/trans";



const getUserIdFromStorage = () => {
    const user = sessionStorage.getItem("user")
    // console.log(user)
    if(user){
        const userObj = JSON.parse(user)
        // console.log(userObj._id);
        return userObj?._id;
    }
    return;
}

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
export const addBook = async(formData) => {
    try {
        const userId = getUserIdFromStorage();
        if(!userId){
            return {
                status: "error",
                message: "You must be logged in "
            }
        }

        const {data}  = await axios.post(bookUrl, formData,
            {
                headers:{
                    Authorization: userId
                }
            }
            )
            console.log("from axios",data)
            return data;
        // console.log("iam from axios: book testing")
        
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
        const userId = getUserIdFromStorage();
        if(!userId){
            return {
                status: "error",
                message : "you must be logged in  "
            }
        }
        const {data} = await axios.get(bookUrl, {
            headers:{
                Authorization: userId,
            },
        })
        // console.log(data)
        return data;
        
    } catch (error) {
        return{
            status:"error",
            message: error.message
        }
        
    }

}


export const deleteBook = async(_idsArg) => {
    try {
        const userId = getUserIdFromStorage(); 
        console.log("from delete axios testing");
        if(!userId){
            return {
                status: "error",
                message: "you must be logged in"
            }
        }
        const {data}  = await axios.delete(bookUrl, {data:_idsArg, headers:{Authorization : userId},})
        return data;
        

    } catch (error) {
        return{
            status:"error",
            message: error.message
        }

        
    }
}


// for transaction 
export const viewTransaction = async() => {
    try {
        const {data} = await axios.get(transUrl)
        return data
        return{
            status:"i am from transaction"
        
        }

        
    } catch (error) {
        return{
            status:"error hdfjhk",
            message: error.message
        }
        
    }
}
export const addTransaction = async(formData) => {
    try {
        // const userId = getUserIdFromStorage();
        // if(!userId){
        //     return {
        //         status: "error",
        //         message: "You must be logged in "
        //     }
        // }

        const {data}  = await axios.post(transUr
            )
            // console.log("from axios",data)
            return data;
        // console.log("iam from axios: book testing")
        
    } catch (error) {
        return{
            status: "error",
            message: error.message,
        }
        
    }
}
