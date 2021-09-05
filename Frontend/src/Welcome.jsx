import React,{Component} from "react"; 
import { Link } from "react-router-dom";
import HelloWorldService from "./api/HelloWorldService";

class Welcome extends Component{

    constructor(props){
        super(props);
        this.state = {
            welcomeMsg : ''
        }
    }

    handleClick = () => {
        HelloWorldService.executeHelloWorldService(this.props.match.params.name)
        .then(response => this.handleSuccessfulResponse(response) )
        .catch(error => this.handleError(error));

        //HelloWorldService.executeHelloWorldBeanService()
        //.then(response => this.handleSuccessfulResponse(response) )
        

    }

    handleSuccessfulResponse = (response) => {
        console.log(response.data);
        this.setState({welcomeMsg: response.data.msg})
    }

    handleError = (err) => {
        console.log(err);
        let errorMsg= ''
        if(err.message){
            errorMsg += err.message;
        }

        if(err.response && err.response.data){
            errorMsg += err.response.data.message;
        }
        
        this.setState({welcomeMsg: errorMsg})
    }

    render() {
        return (
            <div>
                <h1>Welcome</h1>
                <div className="container">Welcome {this.props.match.params.name}. This is your <Link to="/todos">Todo</Link> list</div>
                <div>
                    Click this for retrieve data from backend
                    <button className="btn btn-success" onClick={this.handleClick}>Click Me</button>
                </div>
                <div className="container">
                    {this.state.welcomeMsg}
                </div>
        
            </div>


        );
    }
}

export default Welcome;