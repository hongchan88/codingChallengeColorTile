import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
`;

const ColorTile = ({ eachLine, result }) => {
  return (
    <Container>
      {result.slice(eachLine, 256 + eachLine).map((colorCode) => {
        const firstCode = colorCode[0];
        const secondCode = colorCode[1];
        const ThirdCode = colorCode[2];
        console.log(colorCode);
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

export default ColorTile;
