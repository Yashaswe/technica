import useSound from "use-sound";

import { FaPlay } from "react-icons/fa";
import { useState } from "react";

const PlaySound = () => {
  const [playing, setPlaying] = useState(false);
  const [play] = useSound(
    "https://res.cloudinary.com/dinossasf/raw/upload/v1697958469/vw812ww8oztefnofcatn.mp3"
  );

  return (
    <button
      disabled={playing}
      onClick={() => {
        play();
        setPlaying(true);
      }}
    >
      <FaPlay size={30}></FaPlay>
    </button>
  );
};

export default PlaySound;
