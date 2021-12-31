import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import AboutInfo from "../resources/info/about.json";
import portait from "../resources/images/portrait.jpg";
import "../styles/common.css";
import "../styles/engineering.css";

interface SkillProps {
  skillName: string;
}

function getIntro(): JSX.Element[] {
  const intro: JSX.Element[] = [];
  AboutInfo.intro.forEach((paragraph) => {
    intro.push(<p className="Site-small-p">{paragraph}</p>);
  });
  return intro;
}

function getSkills(skillName: string): JSX.Element[] {
  const skills: JSX.Element[] = [];
  let skillArray: string[];
  switch (skillName) {
    case "languages": {
      skillArray = AboutInfo.languages;
      break;
    }
    case "softwareTech": {
      skillArray = AboutInfo.softwareTech;
      break;
    }
    case "dataTech": {
      skillArray = AboutInfo.dataTech;
      break;
    }
    default: {
      skillArray = [];
      break;
    }
  }
  skillArray.forEach((skill) => {
    skills.push(<li className="Site-small-text">{skill}</li>);
  });
  return skills;
}

function getTitle(skillName: string): JSX.Element {
  let title: string;
  switch (skillName) {
    case "languages": {
      title = "Programming Languages";
      break;
    }
    case "softwareTech": {
      title = "Software Technologies";
      break;
    }
    case "dataTech": {
      title = "Data Technologies";
      break;
    }
    default: {
      title = "";
      break;
    }
  }
  return <h3 className="Site-small-text Color-tertiary-text">{title}</h3>;
}

const SkillList = function render(props: SkillProps) {
  const { skillName } = props;
  return (
    <div style={{ paddingBottom: "10px" }}>
      {getTitle(skillName)}
      {getSkills(skillName)}
    </div>
  );
};

const About = function render() {
  const [showSkills, setShowSkills] = React.useState(false);
  return (
    <div className="gap-3">
      <p className="Welcome-text h1">Hi,</p>
      <h1 className="Welcome-text">I&apos;m Simon Hoque.</h1>
      <h2 className="Welcome-subtext">Software Engineer @ Amazon</h2>
      <Row className="gap-4 m-0 p-0">
        <Col xs={4} sm={3} className="p-0 pt-1">
          <img src={portait} alt="portrait" className="Portrait" />
        </Col>
        <Col xs={12} sm={8} className="p-0">
          {getIntro()}
          <Button
            className="Site-small-text Color-secondary-text Dropdown-button p-0"
            variant="link"
            onClick={() => setShowSkills(!showSkills)}
          >
            {`${
              showSkills ? `\u25be` : `\u25b8`
            } Full list of skills I've learned`}
          </Button>
          <div>
            <Row style={{ visibility: showSkills ? "visible" : "hidden" }}>
              <Col xs={12} sm={4}>
                <SkillList skillName="languages" />
              </Col>
              <Col xs={12} sm={4}>
                <SkillList skillName="softwareTech" />
              </Col>
              <Col xs={12} sm={4}>
                <SkillList skillName="dataTech" />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default About;
