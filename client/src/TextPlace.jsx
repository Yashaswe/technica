import { Textarea } from "@chakra-ui/react";

import Typewriter from "./Typewrite";

const TextPlace = () => {
  return (
    <div>
      <h1
        style={{ fontFamily: "Comic Neue", fontSize: "30px", padding: "15px" }}
      >
        <Typewriter
          text="If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph. We created the Random Paragraph Generator with you in mind. The process is quite simple. Choose the number of random paragraphs you'd like to see and click the button. Your chosen number of paragraphs will instantly appear.

While it may not be obvious to everyone, there are a number of reasons creating random paragraphs can be useful. A few examples of how some people use this generator are listed in t"
          delay={100}
          infinite={false}
        />
      </h1>
    </div>
  );
};

export default TextPlace;
