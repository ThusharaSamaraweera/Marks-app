import React, {useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";

type AddBoardProps = {
  onTeamAdd:(name:string) => void;
}
const AddBoard:React.FC<AddBoardProps> = (props) => {
  const [newTeamName, setNewTeamName] = useState<string | null>(null);

  const handleOnSubmit = (event:any) => {
    event.preventDefault();
    if(!newTeamName || newTeamName === ''){
      return;
    }
    props.onTeamAdd(newTeamName);
    setNewTeamName(null)
  }

  const handleOnTeamNameChanged = (name: string) => {
    setNewTeamName(name);
  }

  return (
      <Col xs={12} sm={5} className='add-board mt-2'>
        <Row xs={12} className='pl-3'>
          <h2>Add Board</h2>
        </Row>
        <Row xs={12} className='from-row px-3'>
          <Form className='formInputs py-3' onSubmit={handleOnSubmit}
          >
            <Form.Group controlId="teamName">
              <Form.Label>Name of Team</Form.Label>
              <Form.Control type="text" placeholder="Enter the team name"
                            required
                            value={newTeamName ? newTeamName : ''}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                              handleOnTeamNameChanged(event.target.value)}
              />
              </Form.Group>
            <Button className='add-btn float-right mb-3'
                    type='submit'
            >ADD</Button>
          </Form>
        </Row>
      </Col>
  )
}

export default AddBoard;