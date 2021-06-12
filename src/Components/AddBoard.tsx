import React from "react";
import {Button, Col, Form, Row} from "react-bootstrap";

const AddBoard:React.FC = () => {
  return (
      <Col xs={12} sm={5} className='add-board mt-2'>
        <Row xs={12} className='pl-3'>
          <h2>Add Board</h2>
        </Row>
        <Row xs={12} className='from-row px-3'>
          <Form className='formInputs py-3'
          >
            <Form.Group controlId="teamName">
              <Form.Label>Name of Team</Form.Label>
              <Form.Control type="text" placeholder=""
                            required
              />
              </Form.Group>
            <Button className='add-btn float-right mb-3'>ADD</Button>
          </Form>
        </Row>
      </Col>
  )
}

export default AddBoard;