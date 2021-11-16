import styled from "styled-components";
import ColorTitle from "./colorTitle";
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
const Title = styled.div`
  width: 5px;
  height: 5px;
  font-size: 5em;
  text-align: center;
  color: palevioletred;
  background-color: ${(props) => props.rgb};
`;
function App() {
  var newArr = [];
  for (let i = 0; i < 32768; i += 256) {
    newArr.push(i);
  }
  console.log(newArr);

  const getPermutations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

    arr.forEach((fixed, index, origin) => {
      const rest = [...origin]; // 해당하는 fixed를 제외한 나머지 배열

      const permutations = getPermutations(rest, selectNumber - 1); // 나머지에 대해 순열을 구한다.
      const attached = permutations.map((permutation) => [
        fixed,
        ...permutation,
      ]); // 돌아온 순열에 대해 떼 놓은(fixed) 값 붙이기
      results.push(...attached); // 배열 spread syntax 로 모두다 push
    });

    return results; // 결과 담긴 results return
  };
  const arr = [];
  for (let i = 8; i <= 256; i += 8) {
    arr.push(i);
  }

  const testArr = [0, 256, 512];

  const result = getPermutations(arr, 3);
  console.log(result);
  return (
    <Wrapper>
      <Container>
        {newArr.map((slice) => {
          return (
            <div>
              <ColorTitle slice={slice} result={result} />{" "}
            </div>
          );
        })}
      </Container>
    </Wrapper>
  );
}

export default App;
