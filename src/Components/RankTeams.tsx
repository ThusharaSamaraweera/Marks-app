import React from "react";
import { Card } from "react-bootstrap";

const RankTeams:React.FC = () => {

    return (
        <div className="ranking-team-div mt-2 p-3">
            <Card border="primary">
                <Card.Header>Ranking Team <span className="count">3</span></Card.Header>
                <Card.Body>
                <Card.Title>Primary Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default RankTeams;