import React from "react";
import {Container, Row} from "react-bootstrap";
import Title from "../src/Components/Title";
import AddBoard from "./Components/AddBoard";
import CreatedTeams from "./Components/CreatedTeams";

const MarksApp:React.FC = () => {

  return (
    <Container fluid>
      <Title/>
      <Row xs={12} md={7} className='mt-2 mx-0'>
        <AddBoard/>
      </Row>
      <CreatedTeams/>

    </Container>
  )
}

export default MarksApp;