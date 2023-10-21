import { ChakraProvider } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";

//theme.ts
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const App = () => {
  return (
    <div id="main">
      <Textarea placeholder="Here is a sample placeholder" />
    </div>
  );
};

export default App;
