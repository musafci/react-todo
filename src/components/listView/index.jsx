import React from "react";
import {ListGroupItem, Button, Input, ListGroup} from "reactstrap";
import PropTypes from 'prop-types';

// List Item Component
const ListItem = ({todo, toggleSelect, toggleComplete}) => {
    return(

        <ListGroupItem className="d-flex align-item-center">
            
            <Input
                type="checkbox"
                id={todo.id}
                checked={todo.isSelect}
                onChange={()=> toggleSelect(todo.id)}
            />

            <div className="mx-3">
                <h4>{todo.text}</h4>
                <p>{todo.time.toDateString()}</p>
            </div>

            <Button
                className="ml-auto"
                color={todo.isComplete ? 'danger' : 'success'}
                onClick={()=> toggleComplete(todo.id)}
            >
                {todo.isComplete ? 'Completed' : 'Running'}
            </Button>

        </ListGroupItem>
    );
}


ListItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
}


// List view component
const ListView = ({todos, toggleSelect, toggleComplete}) => {
    return(
        <ListGroup>
            {todos.map(todo => (
                <ListItem
                    key={todo.id}
                    todo={todo}
                    toggleSelect={toggleSelect}
                    toggleComplete={toggleComplete}
                />
            ))}
        </ListGroup>
    );
}


ListView.propTypes = {
    todos: PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
}

export default ListView;