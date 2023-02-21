import styled from "styled-components";
import React from "react";

interface ContainProps {
  bgColor: string;
}

const Container = styled.div<ContainProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
`;

interface CircleProps {
  bgColor: string;
}

function Circle({ bgColor }: CircleProps) {
  // = Circle({ bgColor }: CircleProps = props.bgColor : CircleProps
  return <Container bgColor={bgColor} />;
}

export default Circle;
