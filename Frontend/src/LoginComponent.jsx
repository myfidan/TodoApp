import React,{Component} from "react"; 
import AuthenticationService from "./AuthenticationService.js";

class LoginComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            username: "admin",
            password: "",
            hasLoginFailed: false,
            showSuccessMessage: false
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    loginClick = () => {
        /* if(this.state.username === "admin1" && this.state.password === "123"){
            AuthenticationService.registerSuccesfulLogin(this.state.username,this.state.password);
            //this.setState({showSuccessMessage: true});
            //this.setState({hasLoginFailed: false});
            this.props.history.push(`/welcome/${this.state.username}`);
        }
        else{
            this.setState({showSuccessMessage: false});
            this.setState({hasLoginFailed: true});
        } */
/* 
         AuthenticationService.executeBasicAuthenticationService(this.state.username,this.state.password)
        .then(() => {
            AuthenticationService.registerSuccesfulLogin(this.state.username,this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`);
        })
        .catch(() => {
                this.setState({showSuccessMessage: false});
                this.setState({hasLoginFailed: true});
            }
        ) 
 */

        

        AuthenticationService.executeJwtAuthenticationService(this.state.username,this.state.password)
        .then((response) => {
            AuthenticationService.registerSuccesfulLoginForJwt(this.state.username,response.data.token);
            this.props.history.push(`/welcome/${this.state.username}`);
        })
        .catch(() => {
                this.setState({showSuccessMessage: false});
                this.setState({hasLoginFailed: true});
            }
        ) 

    }

    

    render(){
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credential</div>}
                {this.state.showSuccessMessage && <div>Login Success</div>}
                User name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button className="btn btn-success" onClick={this.loginClick}>Login!</button>
                </div>
            </div>
        );
    }
}

export default LoginComponent;