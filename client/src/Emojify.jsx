import InputEmoji from "./InputEmoji";
import TextPlace from "./TextPlace";
import PlaySound from "./PlaySound";

const Emojify = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <div style={{ width: "40%" }}>
        <InputEmoji></InputEmoji>
      </div>
      <div
        className="text-input"
        style={{ width: "40%", backgroundColor: "white", borderRadius: 10 }}
      >
        <PlaySound />
        <TextPlace
          text="
display: inline-flex does not make flex items display inline. It makes the flex container display inline. That is the only difference between display: inline-flex and display: flex. A similar comparison can be made between display: inline-block and display: block, and pretty much any other display type that has an inline counterpart.1

There is absolutely no difference in the effect on flex items; flex layout is identical whether the flex container is block-level or inline-level. In particular, the flex items themselves always behave like block-level boxes (although they do have some properties of inline-blocks). You cannot display flex items inline; otherwise you don't actually have a flex layout.

It is not clear what exactly you mean by vertically align"
        />
      </div>
    </div>
  );
};
export default Emojify;
