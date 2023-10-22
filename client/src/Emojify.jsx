import InputEmoji from "./InputEmoji";
import TextPlace from "./TextPlace";
import PlaySound from "./PlaySound";

const Emojify = () => {
  return (
    <div>
      <InputEmoji></InputEmoji>
      <div className="text-input">
        <TextPlace text="sfjlsdfgjdlk;fg" />
      </div>
      <PlaySound />
    </div>
  );
};
export default Emojify;
