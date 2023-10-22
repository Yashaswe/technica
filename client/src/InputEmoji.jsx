import React, { useState } from "react";
import { Button } from "@chakra-ui/react";

import EmojiPicker, { Emoji } from "emoji-picker-react";

const InputEmoji = () => {
  const [show, setShow] = useState(true);
  const [selectedEmoji, setSelectedEmoji] = useState([]);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div>
      {/* <InputGroup>
        <Input
          placeholder="Enter Emoji"
          value={<div></div>}
          // }
          pr="4.5rem"
        />
        {show ? (
          <InputRightElement width="4.5rem" size="sm" onClick={handleClick}>
            <Button h="1.75rem" size="sm">
              Show
            </Button>
          </InputRightElement>
        ) : (
          <></>
        )}
      </InputGroup> */}
      <div className="emojiContainer">
        <div className="emojiInput">
          {selectedEmoji.map((emoji, i) => (
            <div key={i}>
              <Emoji unified={emoji.unified}></Emoji>
            </div>
          ))}
        </div>
        {show ? (
          <Button onClick={handleClick} style={{ height: 50, width: "10%" }}>
            Show
          </Button>
        ) : (
          <></>
        )}
      </div>
      <EmojiPicker
        onEmojiClick={(emojiData, e) => {
          setSelectedEmoji([
            ...selectedEmoji,
            { unified: emojiData.unified, name: emojiData.name },
          ]);
        }}
        width={"100%"}
        emojiStyle="facebook"
        searchDisabled={true}
        previewConfig={{ showPreview: true }}
        // defaultEmoji: string; // defaults to: "1f60a"
        // defaultCaption: string; // defaults to: "What's your mood?"
        //   showPreview: false; // defaults to: true
        // }
      ></EmojiPicker>
    </div>
  );
};
export default InputEmoji;
