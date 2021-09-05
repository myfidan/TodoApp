import React,{Component} from "react"; 
import { Link, Router, withRouter } from "react-router-dom";
import "./bootstrap.css"
import AuthenticationService from "./AuthenticationService.js";
 
class Header extends Component{

    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        return (
         
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="navbar-brand"><a>TodoApp</a></div>
                <ul className="navbar-nav">
                    {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/admin1">Home</Link></li>}
                    {isUserLoggedIn && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
                </ul>
                <ul className="navbar-nav navbar-collapse justify-content-end">
                    {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                    {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                </ul>
            </nav>
        </header>
      
        );
    }
}

export default withRouter(Header);