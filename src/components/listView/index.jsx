import React from "react";
import {ListGroupItem, InputGroup, Button, List, Input} from "reactstrap";
import PropTypes from 'prop-types';


const ListView = ({todo, toggleSelect, toggleComplete}) => {
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
            />

        </ListGroupItem>
    );
}


ListView.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
}


export default ListView;