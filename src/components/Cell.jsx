import React from "react";
import { StyledCell } from "./styles/StyledCell";
import { TETRAMINOS } from "../tetrominos";

export const Cell = ({ type }) => {
  return (
    <StyledCell type={type} color={TETRAMINOS[type].color} />
  );
};
