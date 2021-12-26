import React from "react";
import { Card, Container, Col, Row } from "react-bootstrap";
import WorkSamples from "./work.json";
import "./engineering.css";
import "../common/common.css";

interface WorkSampleProps {
  title: string;
  description: string;
  technologies: string;
}

const WorkSample = function render(props: WorkSampleProps) {
  const { title, description, technologies } = props;
  return (
    <Card className="Work-sample">
      <Card.Body>
        <Card.Title className="Site-h3">{title}</Card.Title>
        <Card.Text className="Site-small-p Color-secondary-text">
          {description}
        </Card.Text>
        <Card.Text
          className="Site-smaller-text Color-tertiary-text"
          // style={{ position: "absolute", bottom: 0 }}
        >
          {technologies}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

function getWorkSamples(): JSX.Element[] {
  const workSamples: JSX.Element[] = [];
  WorkSamples.workSamples.forEach((sample) => {
    workSamples.push(
      <WorkSample
        title={sample.title}
        description={sample.description}
        technologies={sample.technologies}
      />
    );
  });
  return workSamples;
}

const Work = function render() {
  const workSamples = getWorkSamples();
  return (
    <div>
      <h1 className="Site-h1">Work</h1>
      <Container>
        <Row className="pb-4">
          <Col>{workSamples[0]}</Col>
          <Col>{workSamples[1]}</Col>
          <Col>{workSamples[2]}</Col>
        </Row>
        <Row className="">
          <Col>{workSamples[3]}</Col>
          <Col>{workSamples[4]}</Col>
          <Col>{workSamples[5]}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Work;
