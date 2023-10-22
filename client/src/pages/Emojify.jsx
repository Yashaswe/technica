import { Container, Flex } from "@chakra-ui/react";
import InputEmoji from "../components/InputEmoji";
import PlaySound from "../components/PlaySound";
import TextPlace from "../components/TextPlace";
import { useEffect, useState } from "react";

const Emojify = () => {
  const [result, setResult] = useState({
    response: "",
    mp3: "",
  });

  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (result.response.length > 0) {
      setShowResult(true);
    }
  }, [result]);

  return (
    <Flex flexDir={"column"}>
      <InputEmoji result={result} setResult={setResult} />
      <Flex
        flexDir={"column"}
        paddingTop={10}
        alignContent={"space-between"}
        gap={5}
      >
        {showResult ? (
          <Container>
            <PlaySound />
            <TextPlace text={result.response} />
          </Container>
        ) : (
          <></>
        )}
      </Flex>
    </Flex>
  );
};
export default Emojify;
