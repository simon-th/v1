import React from "react";
import { Container, Button } from "react-bootstrap";
import "../styles/common.css";
import ExperienceInfo from "../resources/info/experience.json";

interface PositionProps {
  company: string;
  position: string;
  time: string;
  details: string[];
  initialDropdownStatus: boolean;
}

function getPositionDetails(positionDetails: string[]): JSX.Element[] {
  const details: JSX.Element[] = [];
  positionDetails.forEach((detail) => {
    details.push(
      <li style={{ paddingBottom: "4px" }} className="Site-small-p">
        {detail}
      </li>
    );
  });
  return details;
}

const Position = function render(props: PositionProps) {
  const { company, position, time, details, initialDropdownStatus } = props;
  const [showDetails, setShowDetails] = React.useState(initialDropdownStatus);
  return (
    <div>
      <div className="d-flex justify-content-between">
        <Button
          variant="link"
          className="Position-dropdown-button Site-h3 p-0"
          onClick={() => setShowDetails(!showDetails)}
        >
          {`${
            showDetails ? `\u25be` : `\u25b8`
          }\u00a0\u00a0${position} @ ${company}`}
        </Button>
        <h4
          className="Site-small-text Color-tertiary-text"
          style={{ paddingLeft: "2vw", whiteSpace: "nowrap" }}
        >
          {time}
        </h4>
      </div>
      {showDetails ? (
        <ul style={{ paddingTop: "6px" }}>{getPositionDetails(details)}</ul>
      ) : null}
    </div>
  );
};

function getPreviousPositions(): JSX.Element[] {
  const positions: JSX.Element[] = [];
  ExperienceInfo.previousPositions.forEach((position) => {
    positions.push(
      <Position
        company={position.company}
        position={position.position}
        time={position.time}
        details={position.details}
        initialDropdownStatus={false}
      />
    );
  });
  return positions;
}

const Experience = function render() {
  return (
    <div className="gap-3">
      <h1 className="Site-h1">Experience</h1>
      <h2 className="Site-h2 Color-accent-teal">Current Position</h2>
      <div style={{ paddingBottom: "0.8vh" }}>
        <Position
          company={ExperienceInfo.currentPosition.company}
          position={ExperienceInfo.currentPosition.position}
          time={ExperienceInfo.currentPosition.time}
          details={ExperienceInfo.currentPosition.details}
          initialDropdownStatus
        />
      </div>
      <h2 className="Site-h2 Color-secondary-text">Previous Positions</h2>
      <Container className="gap-2 p-0">{getPreviousPositions()}</Container>
    </div>
  );
};

export default Experience;
