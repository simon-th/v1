import React from "react";
import { Row } from "react-bootstrap";
import "../styles/common.css";
import AboutInfo from "../resources/info/about.json";
import "../styles/engineering.css";

interface SkillProps {
  skillName: string;
}

function getIntro(): JSX.Element[] {
  const intro: JSX.Element[] = [];
  AboutInfo.intro.forEach((paragraph) => {
    intro.push(<p className="Site-p">{paragraph}</p>);
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
    <div>
      {getTitle(skillName)}
      {getSkills(skillName)}
    </div>
  );
};

const About = function render() {
  return (
    <div className="gap-3">
      <p className="Welcome-text h1">Hi,</p>
      <h1 className="Welcome-text">I&apos;m Simon Hoque.</h1>
      <h2 className="Welcome-subtext">Software Engineer @ Amazon</h2>
      {getIntro()}
      <p className="Site-small-text Color-secondary-text">
        Full list of skills I&apos;ve learned
      </p>
      <Row className="gap-2" xs="1" sm="1" md="3" lg="3" xl="3" xxl="3">
        <SkillList skillName="languages" />
        <SkillList skillName="softwareTech" />
        <SkillList skillName="dataTech" />
      </Row>
    </div>
  );
};

export default About;
