import React from "react";
import {Row} from "react-bootstrap";
import Team from "./CreatedTeam/Team";
import {ITeam} from "../Types/MarksTypes";

type CreatedTeamsProps = {
  teams:ITeam[]
  setTeams:(team:ITeam[]) => void;
  onDeleteTeam:(id:number) => void
}

const CreatedTeams: React.FC<CreatedTeamsProps> = (props) => {
  const handleOnSubMarks = (id:number, subMarks: number) => {
    const allTeams: ITeam[] = props.teams.slice();
    props.setTeams(
      allTeams.map( (team) => {
        if(team.id === id) {
          const marks: number = team.marks - subMarks;
          return {...team, marks}
        }else {
          return team;
        }
      })
    )
  }

  const handleOnAddMarks = (id: number, addMarks: number) => {
    const allTeams: ITeam[] = props.teams.slice();
    props.setTeams(
      allTeams.map((team) => {
          if (team.id === id) {
            const mark:number = team.marks + addMarks;
            return {...team, marks: mark};
          } else {
            return team;
          }
        }
      )
    );
  }

  const renderTeams = () => {
    if(props.teams.length === 0){
      return;
    }

    return props.teams.map( (team:ITeam, index:number) => {
      return <Team team={team} key={index} onAddMarks={handleOnAddMarks}
                    onSubMarks={handleOnSubMarks}
                    onDeleteTeam={props.onDeleteTeam}
      />
    })

  }

  return (
    <Row className='create-teams mx-0 mt-3 mb-0'>
      {renderTeams()}
    </Row>
  )
}

export default CreatedTeams;