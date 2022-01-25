import React, {useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {Trash} from "react-feather";
import NumberFormat from "react-number-format";
import {ITeam} from "../../Types/MarksTypes";

type TeamProps = {
  team:ITeam
  onAddMarks: (id:number, addMarks: number) => void
  onSubMarks: (id:number, subMarks: number) => void
  onDeleteTeam: (id:number) => void
}


const Team:React.FC<TeamProps> = (props) => {
  const [marks, setMarks] = useState<number | undefined>(undefined)
  const [validated , setValidated] = useState<boolean>(false);

  const handleOnSub = () => {

    if(!marks){
      setValidated(true);
      return;
    }
    setValidated(false);
    props.onSubMarks(props.team.id, marks);
    setMarks(undefined)
  }

  const handleOnAdd = (event:any) => {
    if(!marks){
      setValidated(true);
      return;
    }

    setValidated(false);
    props.onAddMarks(props.team.id, marks);
    setMarks(undefined);
  }

  return (
      <Col xs={12} sm={2} className='team mx-2 my-2 py-2 px-2'>

        <Row xs={9} sm={8} className='mx-0 my-0'>
          <Col xs={8} sm={8} className='team-name'>
            <h4>{props.team.name}</h4>
          </Col>
          <Col xs={4} sm={4} className='delete-icon text-right'>
            <i><Trash size='1.3em' onClick= {() => props.onDeleteTeam(props.team.id) }/> </i>
          </Col>
        </Row>

        <Row className='mark-box mx-0 px-1'>
          <NumberFormat value={props.team.marks} displayType={'text'} thousandSeparator={true} prefix={'point : '} />
        </Row>

        <Row className='mark-update-row mx-0'>
          <Form className='mark-Inputs py-3'
          >
            <Form.Group controlId="marks">
              <NumberFormat thousandSeparator={true}
                            className='form-control'
                            required
                            value={marks ? marks : 'no'}
                            placeholder="enter ..."
                            onValueChange={(values) => {
                              setMarks(values.floatValue)
                              }
                            }
              />
            </Form.Group>
            { validated && <div className='error'>Enter points</div>}
            <Button className='sub-btn float-left mb-3' onClick={handleOnSub}>SUB</Button>
            <Button className='add-btn float-right mb-3' onClick={handleOnAdd}>ADD</Button>
          </Form>
        </Row>
      </Col>
  )
}

export default Team;