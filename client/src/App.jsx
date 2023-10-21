import { ChakraProvider } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";

//theme.ts
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import InputEmoji from "./InputEmoji";

const App = () => {
  return (
    <div id="main">
      <InputEmoji />
      <Textarea placeholder="Here is a sample placeholder" />
    </div>
  );
};

export default App;
