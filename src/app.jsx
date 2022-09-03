import React from "react";
import {Container, Row, Col} from "reactstrap";
import Todo from "./components/todo";

function App() {
    return(
        <Container className="my-3">
            <Row>
                <Col>
                    <Todo/>
                </Col>
            </Row>
        </Container>
    );
}

export default App;