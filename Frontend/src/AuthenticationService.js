import axios from "axios";
import { API_URL } from "./Constants";
export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

class AuthenticationService {

    executeBasicAuthenticationService(username,password){
        let basicAuthHeader = 'Basic ' + window.btoa(username +":" +password);
        return axios.get(`${API_URL}/basicauth`,{
            headers: {
                authorization: basicAuthHeader
            }
        });
    }

    executeJwtAuthenticationService(username,password){
        let basicAuthHeader = 'Basic ' + window.btoa(username +":" +password);
        return axios.post(`${API_URL}/authenticate`,{
            username,
            password
        });
    }

    registerSuccesfulLoginForJwt(username,token){
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME,username);
        this.setupAxiosInterceptors(this.createJWTToken(token));
    }

    createJWTToken(token){
        return 'Bearer '+ token;
    }

    registerSuccesfulLogin(username,password){
       

        let basicAuthHeader = 'Basic ' + window.btoa(username +":" +password);
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME,username);
        this.setupAxiosInterceptors(basicAuthHeader);
    }

    logout(){
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        if(user===null) return false;
        return true;
    }

    getLoginUser(){
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        if(user===null) return "";
        return user;
    }


    setupAxiosInterceptors(token){
        

        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn()){
                    config.headers.authorization = token;
                }     
                return config; 
            }
 
        )
    }
}

export default new AuthenticationService();