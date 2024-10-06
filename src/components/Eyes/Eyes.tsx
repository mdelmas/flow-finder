import styled from "styled-components";
import { useRef } from "react";

import useMousePosition from "../../hooks/useMousePosition";
import useBoundingClientRect from "../../hooks/useBoudingClientRect";

const BORDER_COLOR = "#000000";
const BACKGROUND_COLOR = "#ffffff";

const EyeBackground = styled.div`
  background-color: var(--background-color);
  border: 0.2em solid var(--border-color);
  width: 0.6em;
  height: 1em;

  display: grid;

  border-radius: 1em;
`;

// POS LIMITS : X -0.15em / 0.15em en L / R
// POS LIMITS : y -0.3em / 0.3m en T / B
// Corners : -0.14em, -0.29em,

const EyeCenter = styled.div<{ position: { x: number; y: number } }>`
  background-color: var(--border-color);
  width: 0.6em;
  height: 0.6em;
  /* margin-left: -0.025em; */

  border-radius: 1em;

  place-self: center;

  transform: translate(
    ${(props) => props.position.x}em,
    ${(props) => props.position.y}em
  );
`;

const Eye = ({ position }: { position: { x: number; y: number } }) => {
  console.log(position);
  return (
    <EyeBackground>
      <EyeCenter position={position} />
    </EyeBackground>
  );
};

const Eyes = () => {
  const mousePosition = useMousePosition();

  const elementRef = useRef<HTMLDivElement>(null);
  const elementPosition = useBoundingClientRect(elementRef);
  const elementCenter = elementPosition?.center;

  console.log(mousePosition);
  console.log(elementCenter);
  let eyeCenterPosition = { x: 0, y: 0 };
  if (mousePosition && elementCenter) {
    eyeCenterPosition = {
      x:
        Math.min(Math.max(mousePosition.x - elementCenter.x, -150), 150) / 1000,
      y:
        Math.min(Math.max(mousePosition.y - elementCenter.y, -300), 300) / 1000,
    };
    console.log("vector", eyeCenterPosition);
  }

  return (
    <EyesContainer ref={elementRef}>
      <Eye position={eyeCenterPosition} />
      <Eye position={eyeCenterPosition} />
    </EyesContainer>
  );
};

const EyesContainer = styled.div`
  --border-color: ${BORDER_COLOR};
  --background-color: ${BACKGROUND_COLOR};

  font-size: 16px;

  display: flex;
  width: max-content;

  ${EyeBackground}:first-child {
    z-index: 2;
  }

  ${EyeBackground}:last-child {
    transform: translateX(-0.3em);
    margin-right: -0.3em;
  }
`;

export default Eyes;
