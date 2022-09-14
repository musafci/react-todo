import React from "react";
import shortid from "shortid";
import ListView from "../listView";
import TableView from "../tableView";
import CreateTodoForm from "../create-todo-form";
import Controller from "../controllers";
import {Modal, ModalBody, ModalHeader} from "reactstrap";


class Todos extends React.Component {

    state = {
        todos: [
            {
                id: 'aaa',
                text: 'todo one',
                description: 'simple description one',
                time: new Date(),
                isComplete: false,
                isSelect: false
            },
            {
                id: 'bbb',
                text: 'todo two',
                description: 'simple description two',
                time: new Date(),
                isComplete: false,
                isSelect: false
            },
        ],
        isOpenTodoForm: false,
        searchTerm: '',
    };


    toggleSelect = todoId => {
        const todos = [...this.state.todos];
        const todo = todos.find(t => t.id == todoId);
        todo.isSelect = !todo.isSelect;

        this.setState({ todos });
    }

    toggleComplete = todoId => {
        const todos = [...this.state.todos];
        const todo = todos.find(t => t.id == todoId);
        todo.isComplete = !todo.isComplete;

        this.setState({ todos });
    }

    toggleForm = () => {
        this.setState({
            isOpenTodoForm: !this.state.isOpenTodoForm
        })
    }

    handleSearch = () => {

    }

    createTodo = todo => {
        todo.id = shortid.generate();
        todo.time = new Date();
        todo.isComplete = false;
        todo.isSelect = false;

        const todos = [todo, ...this.state.todos];
        this.setState({todos});
        this.toggleForm();
    }


    render() {
        return(
            <div>
                <h1 className="display-4 text-center mb-5">React Todo</h1>
                
                <Controller
                    term={this.state.searchTerm}
                    toggleForm={this.toggleForm}
                    handleSearch={this.handleSearch}
                />

                <div>
                    <ListView 
                        todos={this.state.todos} 
                        toggleSelect={this.toggleSelect} 
                        toggleComplete={this.toggleComplete}
                    />
                </div>

                <div>
                    <TableView
                        todos={this.state.todos} 
                        toggleSelect={this.toggleSelect} 
                        toggleComplete={this.toggleComplete}
                    />
                </div>
                
                <Modal
                    isOpen={this.state.isOpenTodoForm}
                    toggle={this.toggleForm}
                >
                    <ModalHeader toggle={this.toggleForm}>
                        Create New Todo Item
                    </ModalHeader>

                    <ModalBody>
                        <CreateTodoForm createTodo={this.createTodo} />
                    </ModalBody>

                </Modal>
            </div>
        );
    }
}


export default Todos;