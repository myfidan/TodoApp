import React,{Component} from 'react';
import './App.css';
import "./bootstrap.css"
import Welcome from "./Welcome";
import LoginComponent from "./LoginComponent"
import Error from "./errorComponent"
import ListTodosComponent from "./ListTodosComponent"
import Header from "./Header"
import Footer from "./footer"
import LogoutComponent from './LogoutComponent';


import {BrowserRouter as Router,Route, Switch} from "react-router-dom"
import AuthenticatedRoute from './AuthenticatedRoute';
import TodoComponent from './TodoComponent';

class App extends Component{
  
  render(){

    return (
      <div className="App">
      
        <Router>
        <Header />
          <Switch>
            <Route path="/" exact component={LoginComponent} />
            <Route path="/login" component={LoginComponent} />
            <AuthenticatedRoute path="/welcome/:name" component={Welcome} />
            <AuthenticatedRoute path="/todos/:id" component={TodoComponent} />
            <AuthenticatedRoute path="/todos" component={ListTodosComponent} />
            <AuthenticatedRoute path="/logout" component={LogoutComponent} />
            
            <Route component={Error}/>  
          </Switch>
          <Footer/>
          </Router>
        
      </div>
    );
  }

}

export default App;
