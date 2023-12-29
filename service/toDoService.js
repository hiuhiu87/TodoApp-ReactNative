import axios from "axios";

class ToDoService {

    getToDoList() {
        return axios.get("http://192.168.1.31:8080/api/todo/all");
    }

    addToDoList(todo) {
        return axios.post("http://192.168.1.31:8080/api/todo/create", todo);
    }

    updateToDoList(todo) {
        return axios.put("http://192.168.1.31:8080/api/todo/update", todo);
    }

}

const toDoService = new ToDoService();

export default toDoService;