import useSound from "use-sound";

import { FaPlay } from "react-icons/fa";

// import boopSfx from "../../sounds/boop.mp3";

const PlaySound = () => {
  const [play] = useSound();

  return (
    <button onClick={play}>
      <FaPlay></FaPlay>
    </button>
  );
};

export default PlaySound;
