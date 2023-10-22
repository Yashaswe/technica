import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { mode } from "@chakra-ui/theme-tools";
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

const colors = {
  theme: {
    light: "#000000",
    dark: "#000000",
  },
};

const styles = {
  global: (props) => ({
    body: {
      color: mode("theme.dark", "theme.light")(props),
      bg: mode("theme.light", "theme.dark")(props),
      lineHeight: "1.5",
    },
  }),
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const fonts = {
  heading: `'Comic Neue', 'Comic Neue'`,
  body: `'Comic Neue','Comic Neue'`,
};

const theme = extendTheme({ colors, config, styles, fonts });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
