import React from "react";
import { Button, Card, Col, Row, Modal } from "react-bootstrap";
import WorkSamples from "../resources/info/work.json";
import "../styles/work.css";
import "../styles/common.css";
import gitHubIcon from "../resources/icons/github.svg";
import createHtmlListFromStringArray from "../util/util-functions";

interface WorkSampleLinkProps {
  gitHub?: string;
  demo?: string;
  docs?: string;
}

interface WorkSampleProps {
  title: string;
  description: string;
  technologies: string;
  details: string[];
  links: WorkSampleLinkProps;
}

function generateLinkIcon(
  icon: string,
  link: string,
  alt: string
): JSX.Element {
  return (
    <a href={link}>
      <img className="Work-sample-icon" src={icon} alt={alt} />
    </a>
  );
}

function generateLinkIcons(links: WorkSampleLinkProps): JSX.Element[] {
  const icons: JSX.Element[] = [];
  const { gitHub } = links;
  if (gitHub !== undefined) {
    icons.push(generateLinkIcon(gitHubIcon, gitHub, "Source Code on GitHub"));
  }
  return icons;
}

const WorkSample = function render(props: WorkSampleProps) {
  const { title, description, technologies, details, links } = props;
  const [showDetails, setShowDetails] = React.useState(false);
  const handleClose = () => setShowDetails(false);
  const handleOpen = () => setShowDetails(true);

  return (
    <div style={{ height: "100%" }}>
      <Modal show={showDetails} onHide={handleClose}>
        <Modal.Body>
          <Modal.Body>
            <h2 className="Site-h2">{title}</h2>
            <ul className="Color-secondary-text">
              {createHtmlListFromStringArray(details)}
            </ul>
          </Modal.Body>
          <Modal.Footer>
            {links != null ? generateLinkIcons(links) : null}
          </Modal.Footer>
        </Modal.Body>
      </Modal>
      <Button
        className="Work-sample Color-primary-text p-0"
        onClick={handleOpen}
      >
        <Card style={{ backgroundColor: "rgba(0,0,0,0)" }}>
          <Card.Body>
            <Card.Title className="Site-h3">{title}</Card.Title>
            <Card.Text className="Site-small-p Color-secondary-text">
              {description}
            </Card.Text>
            <Card.Text className="Site-smaller-text Color-tertiary-text">
              {technologies}
            </Card.Text>
          </Card.Body>
        </Card>
      </Button>
    </div>
  );
};

function getWorkSamples(): JSX.Element[] {
  const workSamples: JSX.Element[] = [];
  WorkSamples.workSamples.forEach((sample) => {
    workSamples.push(
      <Col className="p-2">
        <WorkSample
          title={sample.title}
          description={sample.description}
          technologies={sample.technologies}
          details={sample.details}
          links={sample.links}
        />
      </Col>
    );
  });
  return workSamples;
}

const Work = function render() {
  return (
    <div>
      <h1 className="Site-h1">Work</h1>
      <Row xs="2" md="3">
        {getWorkSamples()}
      </Row>
    </div>
  );
};

export default Work;
