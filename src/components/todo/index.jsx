import React from "react";
import ListView from "../listView";
import TableView from "../tableView";

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
        ]
    };


    toggleSelect = todoId => {

    }

    toggleComplete = todoId => {

    }


    render() {
        return(
            <div>
                <h1 className="display-4 text-center mb-5">React Todo</h1>
                
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
                
            </div>
        );
    }
}


export default Todos;