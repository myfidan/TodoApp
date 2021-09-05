import React,{Component} from "react"; 
import TodoDataService from "./api/TodoDataService";
import AuthenticationService from "./AuthenticationService";
import moment from "moment";

class ListTodosComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            todos: [
                // {id:1,description: "Learn React",done:false, date:new Date()},
                //{id:2,description: "Watch youtube videos",done:false, date:new Date()},
               // {id:3,description: "Graduate",done:false, date:new Date()},
            ],
            message: null
        }
    }

    componentDidMount(){
        this.refreshTodo();
    }


    refreshTodo = () => {
        let username = AuthenticationService.getLoginUser();
        TodoDataService.retriveAllTodos(username)
        .then(
            response => {
                console.log(response.data)
                this.setState({todos: response.data})
            }
        )
        .catch();
    }


    deleteTodoClicked = (id) => {
        let username = AuthenticationService.getLoginUser();
        TodoDataService.deleteTodo(username,id)
        .then((response) =>
        {
            this.setState({message: `Todo element ${id} deleted`})
            this.refreshTodo();
        })
        .catch();
    }

    updateTodoClicked = (id) => {
        this.props.history.push(`/todos/${id}`);
    }

    addTodoClick = () => {
        this.props.history.push(`/todos/-1`);
    }

    render() {
        return (
        <div className="container">
            <h1>List Todos</h1>
            {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Done?</th>
                            <th>Date</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map( todo =>
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                                    <td><button  onClick={() => this.updateTodoClicked(todo.id)} className="btn btn-success">Update</button></td>
                                    <td><button  onClick={() => this.deleteTodoClicked(todo.id)} className="btn btn-warning">Delete</button></td>
                                </tr>
                            )
                        }
                        
                    </tbody>
                </table>
                <div className="row">
                    <button className="btn btn-success" onClick={this.addTodoClick}>Add</button>
                </div>
            </div>
        </div>
        );
    }
}

export default ListTodosComponent;