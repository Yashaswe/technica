import { ChakraProvider } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";

import InputEmoji from "./InputEmoji";

const App = () => {
  return (
    <div id="main">
      <InputEmoji></InputEmoji>
      <Textarea placeholder="Here is a sample placeholder" />
    </div>
  );
};

export default App;
