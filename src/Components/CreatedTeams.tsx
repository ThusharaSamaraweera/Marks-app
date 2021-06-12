import React from "react";
import {Row} from "react-bootstrap";
import Team from "./CreatedTeam/Team";

const CreatedTeams: React.FC = () => {


  return (
    <Row className='create-teams mx-0 my-3'>
      <Team/>
      <Team/>
      <Team/>
      <Team/>

    </Row>
  )
}

export default CreatedTeams;