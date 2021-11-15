import React, { useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import NumberFormat from "react-number-format";
import { ITeam } from "../Types/MarksTypes";

type RankTeamsProps = {
    teams: ITeam[]
}

const RankTeams:React.FC<RankTeamsProps> = (props) => {


    const renderAllTeams = () => {
        const allteams = props.teams.slice();
        const sortedTeam = allteams.sort( (a, b) => a.marks - b.marks ).reverse();

        return sortedTeam.map( (team: ITeam, index: number) => {
            return  <Col xs={12} md={12} className='team'>
                        <Row>
                            <Col xs={3} md={3}>
                                {team.name}
                            </Col>
                            <Col xs={7} md={7}>
                                <NumberFormat value={team.marks} displayType={'text'} thousandSeparator={true} prefix={'point : '} />                              
                            </Col>
                        </Row>
                    </Col>
        })
    };

    useEffect(() => {
        return () => {
            renderAllTeams();

        }
    }, [props.teams]);

    return (
        <div className="ranking-team-div mt-2 p-3">
            <Card border="primary">
                <Card.Header>
                    <Row>
                        <Col xs={6} md={6} >Point Board</Col> 
                        <Col className="count" xs={{offset: 2, span: 4}} >Total team : {props.teams.length}</Col>
                    </Row>
                </Card.Header>
                <Card.Body>
                <Card.Text>
                    <Row>
                        {renderAllTeams()}
                    </Row>

                </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default RankTeams;