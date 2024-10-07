import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import { COLORS, WEIGHTS } from "../../constants";
import { ButtonType } from "./ButtonType";

function Button({
  textColor,
  backgroundColor,
  type,
  ...delegated
}: PropsWithChildren<{
  textColor: keyof typeof COLORS;
  backgroundColor?: keyof typeof COLORS;
  type?: ButtonType;
}>) {
  console.log(backgroundColor);
  return (
    <StyledButton
      textColor={textColor}
      backgroundColor={backgroundColor}
      {...delegated}
    />
  );
}

const StyledButton = styled.button<{
  textColor: keyof typeof COLORS;
  backgroundColor?: keyof typeof COLORS;
}>`
  padding: 12px 24px;
  border-radius: 32px;

  font-weight: ${WEIGHTS.bold};
  line-height: 1rem;
  font-size: 1rem;

  color: ${(props) => COLORS[props.textColor][500]};
  background-color: ${(props) =>
    props.backgroundColor && COLORS[props.backgroundColor][500]};
`;

// const FilledButton = styled(StyledButton)`
//   color: ${(props) => COLORS[props.textColor][500]};
//   background-color: ${(props) =>
//     props.backgroundColor && COLORS[props.backgroundColor][500]};
// `;

// const OutlinedButton = styled(StyledButton)`
//   border: 3px solid ${(props) => COLORS[props.backgroundColor][500]};
// `;

export default Button;
