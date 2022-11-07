import { useRef } from "react";
import { useState, useEffect, useCallback } from "react";

export const useGameStatus = rowsCleared => {
    const [score, setScore] = useState(0)
    const [rows, setRows] = useState(0)
    const [level, setLevel] = useState(0)

    const linePoints = useRef([40, 100, 300, 1200]);

    const calcScore = useCallback(() => {
        console.log("reran")
        // check if we have score
        if (rowsCleared > 0) {
            // This is how the original tetris score is calculated
            setScore(prev => prev + linePoints[rowsCleared - 1] * (level + 1));
            setRows(prev => prev + rowsCleared)
        }
    }, [level, rowsCleared, linePoints])

    useEffect (() => {
        calcScore();
    }, [calcScore, rowsCleared, score])

    return [score, setScore, rows, setRows, level, setLevel]
}