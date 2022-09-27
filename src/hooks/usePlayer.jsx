import { useState } from "react";
import { randomTetramnino } from "../tetrominos";

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetramino: randomTetramnino().shape,
    collided: false,
  });

  return [player];
};
