import http from "./Http-comman";  
class FlickrService {  
     
    getAll() {  
        return http.get("/list");  
      }  
        
}  
export default new FlickrService();