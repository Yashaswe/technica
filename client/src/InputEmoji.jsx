import React, { useState } from "react";
import { Button } from "@chakra-ui/react";

import EmojiPicker, { Emoji } from "emoji-picker-react";

const InputEmoji = () => {
  const [selectedEmoji, setSelectedEmoji] = useState([]);

  const handleClick = () => {
    let emojiUsed = "";
    selectedEmoji.map((emoji) => {
      const emojiName = emoji.name;
      emojiUsed = emojiUsed.concat(emojiName[emojiName.length - 1]);
    });
    console.log(emojiUsed, "EMoji Used"); //Call api

    // setSelectedEmoji([]);
  };

  const clearSelectedEmoji = () => {
    setSelectedEmoji([]);
  };
  return (
    <div>
      <div className="emojiContainer">
        <div className="emojiInput">
          {selectedEmoji.map((emoji, i) => (
            <div key={i}>
              {console.log(emoji)}
              <Emoji unified={emoji.unified}></Emoji>
            </div>
          ))}
        </div>
        <Button
          onClick={clearSelectedEmoji}
          style={{ height: 50, width: "10%" }}
        >
          Clear
        </Button>

        <Button onClick={handleClick} style={{ height: 50, width: "10%" }}>
          Show
        </Button>
      </div>
      <EmojiPicker
        onEmojiClick={(emojiData, e) => {
          setSelectedEmoji([
            ...selectedEmoji,
            { unified: emojiData.unified, name: emojiData.names },
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
