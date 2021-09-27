import axios from "axios";  
  
export default axios.create({  
  baseURL: "https://localhost:3000/",  
  headers: {  
    "content-type": "application/json"  
  }  
}); 