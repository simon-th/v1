import React from "react";
import "../styles/common.css";
import ExperienceInfo from "../resources/info/experience.json";

interface PositionProps {
  company: string;
  position: string;
  time: string;
  details: string[];
}

function getPositionDetails(positionDetails: string[]): JSX.Element[] {
  const details: JSX.Element[] = [];
  positionDetails.forEach((detail) => {
    details.push(<li className="Site-small-p">{detail}</li>);
  });
  return details;
}

const Position = function render(props: PositionProps) {
  const { company, position, time, details } = props;
  return (
    <div style={{ paddingBottom: "1.5vh" }}>
      <div className="d-flex justify-content-between">
        <h3 className="Site-h3">
          {position} @ {company}
        </h3>
        <h4
          className="Site-small-text Color-tertiary-text"
          style={{ paddingLeft: "2vw", whiteSpace: "nowrap" }}
        >
          {time}
        </h4>
      </div>
      {getPositionDetails(details)}
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
      <Position
        company={ExperienceInfo.currentPosition.company}
        position={ExperienceInfo.currentPosition.position}
        time={ExperienceInfo.currentPosition.time}
        details={ExperienceInfo.currentPosition.details}
      />
      <h2 className="Site-h2 Color-secondary-text">Previous Positions</h2>
      {getPreviousPositions()}
    </div>
  );
};

export default Experience;
