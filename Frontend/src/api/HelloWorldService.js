import axios from "axios";

class HelloWorldService{
    
    executeHelloWorldService(name){
        
        return axios.get(`http://localhost:8080/hello-world-bean/path-variable/${name}`);      
    }

    executeHelloWorldBeanService(){
        return axios.get("http://localhost:8080/hello-world-bean");      
    }
}

export default new HelloWorldService();