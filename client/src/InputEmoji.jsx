import React, { useState, useEffect } from "react";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import EmojiPicker from "emoji-picker-react";
import "./emojiStyle.css";

const InputEmoji = () => {
  const [show, setShow] = useState(true);

  const handleClick = () => setShow(!show);

  return (
    <div className="emoji-style">
      <InputGroup>
      <EmojiPicker
        width={1500}
        emojiStyle="apple"
        searchDisabled={true}
        size={100}
        previewConfig={{ showPreview: true }}
        // defaultEmoji: string; // defaults to: "1f60a"
        // defaultCaption: string; // defaults to: "What's your mood?"
        //   showPreview: false; // defaults to: true
        // }
      ></EmojiPicker>
      {/* <Input placeholder="Enter Emoji" pr="4.5" />
      {show ? (
        <InputRightElement width="4.5rem" size="sm" onClick={handleClick}>
          <Button h="1.75rem" size="sm">
            Show
          </Button>
        </InputRightElement>
      ) : (
        <></>
      )} */}
    </InputGroup>
    </div>
    
  );
};
export default InputEmoji;
