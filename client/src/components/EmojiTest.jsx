import { Stack, Box, Input } from "@chakra-ui/react";
import { data } from "../data/data";

const EmojiTest = () => {
  const shuffledData = {};
  let finalData = [];

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const array = data[key].slice();
      shuffleArray(array);
      shuffledData[key] = array;
    }
  }
  console.log(shuffledData, "shuffleData");

  for (const key in shuffledData) {
    const item = shuffledData[key];
    const first10 = item.slice(0, 5);
    finalData = finalData.concat(first10);
  }

  shuffleArray(finalData);
  console.log(finalData);

  return (
    <div>
      <Stack>
        {/* <Input></Input> */}
        <Stack
          direction={["column", "row"]}
          spacing="12px"
          w={500}
          wrap="wrap"
          backgroundColor={"white"}
        >
          {finalData.map((item) => {
            const emoji = String.fromCodePoint(parseInt(item.u, 16));
            return (
              <Box w="40px" h="40px" fontSize={24}>
                {emoji}
              </Box>
            );
          })}
        </Stack>
      </Stack>
    </div>
  );
};

export default EmojiTest;
