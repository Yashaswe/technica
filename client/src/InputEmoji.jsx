import React, { useState, useEffect } from "react";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";

const InputEmoji = () => {
  const [show, setShow] = useState(true);

  const handleClick = () => setShow(!show);

  return (
    <InputGroup>
      <Input placeholder="Enter Emoji" pr="4.5rem" />
      {show ? (
        <InputRightElement width="4.5rem" size="sm" onClick={handleClick}>
          <Button h="1.75rem" size="sm">
            Show
          </Button>
        </InputRightElement>
      ) : (
        <></>
      )}
    </InputGroup>
  );
};
export default InputEmoji;
