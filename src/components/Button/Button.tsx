import React from "react";
import styled from "styled-components";

function Button({ color, ...delegated }: { color: string}) {
  return <ButtonWrapper {...delegated} />;
}

const ButtonWrapper = styled.button`
background-color: ${}`;

export default Button;
