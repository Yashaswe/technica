import { Textarea } from "@chakra-ui/react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";

import InputEmoji from "./InputEmoji";
import TextPlace from "./TextPlace";
import PlaySound from "./PlaySound";
import StoryBoard from "./StoryBoard";
import Emojify from "./Emojify";

const App = () => {
  return (
    // <div
    //   id="main"
    //   style={{
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    //   <div
    //     style={{
    //       width: "40%",

    //       borderRadius: 20,
    //     }}
    //   >
    //     <Login />
    //   </div>
    // </div>

    <div id="main">
      <Emojify />
      <StoryBoard />
    </div>

    // <Router>
    //   <Switch>
    //     <Route
    //       exact
    //       path="/login"
    //       component={() => {
    //         <div
    //           style={{
    //             width: "40%",
    //             display: "flex",
    //             justifyContent: "center",
    //             alignItems: "center",

    //             // borderRadius: 20,
    //           }}
    //         >
    //           <Login />
    //         </div>;
    //       }}
    //     />
    //     <Route
    //       exact
    //       path="/input-emoji"
    //       component={() => (
    //         <div
    //           id="main"
    //           style={{
    //             display: "flex",
    //             justifyContent: "center",
    //             alignItems: "center",
    //           }}
    //         >
    //           <InputEmoji></InputEmoji>
    //           <div className="text-input">
    //             <Textarea placeholder="Here is a sample placeholder" />
    //           </div>
    //         </div>
    //       )}
    //     />
    //   </Switch>
    // </Router>
  );
};

export default App;
