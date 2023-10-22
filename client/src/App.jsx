import { Textarea, flexbox } from "@chakra-ui/react";
import { Emoji } from "emoji-picker-react";
import InputEmoji from "./InputEmoji";
import TextPlace from "./TextPlace";
import Login from "./Login";

const App = () => {
  return (
    <div
      id="main"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "40%",

          // borderRadius: 20,
        }}
      >
        <Login />
      </div>
      {/* <InputEmoji></InputEmoji> */}
      {/* <TextPlace /> */}
    </div>
  );
};

export default App;
