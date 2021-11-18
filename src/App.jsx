import styled from "styled-components";
import ColorTile from "./colorTile";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 256px;
  height: 128px;
  border: black 1px solid;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

function App() {
  const pixelEachLine = []; // 256pixels each line x 128px
  for (let i = 0; i < 32768; i += 256) {
    pixelEachLine.push(i);
  }

  const rgbDigitStep = []; // 32steps for RGB digit code
  for (let i = 8; i <= 256; i += 8) {
    rgbDigitStep.push(i);
  }

  const getRgbDigit = function (rgbDigitStep, digitColorCode) {
    const results = [];
    if (digitColorCode === 1) return rgbDigitStep.map((value) => [value]); // if selectonumber ===1 all array return as it is

    rgbDigitStep.forEach((fixed, index, origin) => {
      const permutations = getRgbDigit(origin, digitColorCode - 1); // get number for rest of digitcolorcode
      const attached = permutations.map((permutation) => [
        fixed,
        ...permutation,
      ]); // combine with fixed value
      results.push(...attached); //push to array
    });

    return results; // results return
  };

  function shuffleArray(result) {
    // shuffle array to make it look interesting
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i - 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
  }
  const result = getRgbDigit(rgbDigitStep, 3); // 32,768 discrete colors

  shuffleArray(result); //shuffle

  return (
    <Wrapper>
      <Container>
        {pixelEachLine.map((eachLine) => {
          return (
            <div>
              <ColorTile eachLine={eachLine} result={result} />{" "}
            </div>
          );
        })}
      </Container>
    </Wrapper>
  );
}

export default App;
