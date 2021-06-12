import React from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {Trash} from "react-feather";

const Team:React.FC = () => {
  return (
      <Col xs={12} sm={5} className='team mx-2 my-2 py-2 px-2'>

        <Row xs={9} sm={8} className='mx-0 my-0'>
          <Col xs={8} sm={8} className='team-name'>
            <h4>team1</h4>
          </Col>
          <Col xs={4} sm={4} className='delete-icon text-right'>
            <i><Trash size='1.3em'/> </i>
          </Col>
        </Row>

        <Row className='mark-box mx-0 px-1'>
          <h5>199</h5>
        </Row>

        <Row className='mark-update-row mx-0'>
          <Form className='mark-Inputs py-3'
          >
            <Form.Group controlId="update-mark">
              <Form.Control type="text" placeholder="type"
                            required
              />
            </Form.Group>
            <Button className='sub-btn float-left mb-3'>SUB</Button>
            <Button className='add-btn float-right mb-3'>ADD</Button>
          </Form>
        </Row>
      </Col>
  )
}

export default Team;