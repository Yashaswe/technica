import { Textarea, Card, CardBody } from "@chakra-ui/react";

import Typewriter from "./Typewrite";

const TextPlace = (props) => {
  return (
    <Card>
      <CardBody>
        <h1
          style={{
            fontFamily: "Comic Neue",
            fontSize: "30px",
            padding: "15px",
          }}
        >
          <Typewriter text={props.text} delay={100} infinite={false} />
        </h1>
      </CardBody>
    </Card>
  );
};

export default TextPlace;
