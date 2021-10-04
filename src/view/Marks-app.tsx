import React, {useState} from "react";
import {Container, Row} from "react-bootstrap";
import Title from "../Components/Title";
import AddBoard from "../Components/AddBoard";
import CreatedTeams from "../Components/CreatedTeams";
import {ITeam} from "../Types/MarksTypes";

const MarksApp: React.FC = () => {
  const allTeams:ITeam[] = [
    {id: 1, name: "team1", marks: 100},
    {id: 2, name: "team2", marks: 200},
    {id: 3, name: "team3", marks: 400},
    {id: 4, name: "team4", marks: 400}
  ]

  const [teams, setTeams] = useState<ITeam[]>(allTeams);
  const [teamCount, setTeamCount] = useState<number>(teams.length);


  const handleOnAddedTeam = (teamName:string) => {
    const tempAllTeams:ITeam[] = teams.slice();
    let id: number = teamCount + 1;
    setTeamCount(id)
    const newTeam:ITeam = {id:id, name:teamName, marks:0};
    tempAllTeams.push(newTeam);
    setTeams(tempAllTeams);

  }

  const handleOnDelete = (id:number) => {
    const confirmation:boolean = window.confirm("Delete Team?");
    if(confirmation){
      const tempAllTeams:ITeam[] = teams.slice();
      setTeams(
        tempAllTeams.filter( (team) => 
          team.id !== id
        )
      );
    }
    console.log('hi');
  }

  return (
    <Container fluid>
      <Title/>
      <Row xs={12} md={7} className='mt-2 mx-0'>
        <AddBoard onTeamAdd={handleOnAddedTeam}/>
      </Row>
      <CreatedTeams teams={teams} 
                    setTeams={setTeams}
                    onDeleteTeam={handleOnDelete}
      />

    </Container>
  )
}

export default MarksApp;