import styled from "styled-components";
import React from "react";

const Container = styled.div``;

interface CircleProps {
  bgColor: string;
}

function Circle({ bgColor }: CircleProps) {
  // = Circle({ bgColor }: CircleProps = props.bgColor : CircleProps
  return <Container bgColor={bgColor} />;
}

export default Circle;
