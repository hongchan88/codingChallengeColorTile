import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
`;
const Title = styled.div`
  width: 1px;
  height: 1px;

  background-color: ${(props) => props.rgb};
`;

const ColorTitle = ({ slice, result }) => {
  console.log(result.slice(0, 5));
  return (
    <Container>
      {result.slice(slice, 256 + slice).map((colorCode) => {
        const firstCode = colorCode[0];
        const secondCode = colorCode[1];
        const ThirdCode = colorCode[2];

        return (
          <div
            style={{
              width: "1px",
              height: "1px",

              background: `rgb(${firstCode}, ${secondCode}, ${ThirdCode})`,
            }}
          />
        );
      })}
    </Container>
  );
};

export default ColorTitle;
