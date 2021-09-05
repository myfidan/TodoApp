import axios from "axios";
import { JPA_API_URL,API_URL } from "../Constants";

class TodoDataService{
    retriveAllTodos(name){
        return axios.get(`${JPA_API_URL}/users/${name}/todos`);      
    }

    deleteTodo(name,id){
        return axios.delete(`${JPA_API_URL}/users/${name}/todos/${id}`);  
    }

    getTodo(name,id){
        return axios.get(`${JPA_API_URL}/users/${name}/todos/${id}`);
    }

    updateTodo(name,id,todo){
        return axios.put(`${JPA_API_URL}/users/${name}/todos/${id}`,todo);
    }

    postTodo(name,todo){
        return axios.post(`${JPA_API_URL}/users/${name}/todos`,todo);
    }


}

export default new TodoDataService();