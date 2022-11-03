import React, { useState, useEffect } from 'react'
import Square from "./Square"
import "../App.css"

const GameLogic = () => {
    const [gameState, setGameState] = useState(Array(9).fill(null))
    const [steps, setSteps] = useState(0)
    const [winner, setWinner] = useState(null)

    useEffect(() => {
        checkForWinnigCondition(gameState)
    }, [gameState])


    const onClickHandler = (event) => {
        const copyOfGameState = [...gameState]
        if (!event.target.innerText) {
            copyOfGameState[event.target.id] = steps % 2 === 0 ? "A" : "B";
            setSteps(steps + 1) // update here steps
            setGameState(copyOfGameState)
        }
    }

    const restartGame = () => {
        setGameState(Array(9).fill(null));
        setSteps(0)
        setWinner(null)
    }

    const checkForWinnigCondition = (gameState) => {
        const winningCondition = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        winningCondition.forEach(condition => {
            const [a, b, c] = condition;
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                setWinner(gameState[a])
            }
        })
    }

    return (
        <div className="container">

            <div className="left-side">
                <div className="text ">   Let's play the tic-tac-toe game! </div>
                <div className="btn" onClick={restartGame}>  start a new game!</div>
            </div>

            {/* Conditional rendering means my game is empty */}

            {!winner && steps < 9 && (<div className="right-side">
                <div className="players">
                    <div className={`player ${steps % 2 === 0 && "a-player"} `}>Player A</div>
                    <div className={`player ${steps % 2 === 1 && "b-player"} `}>Player B</div>
                </div>
                <div className="game-area" onClick={onClickHandler}>
                    <Square state={gameState[0]} id={0} className="border-right-bottom" />
                    <Square state={gameState[1]} id={1} className="border-right-bottom" />
                    <Square state={gameState[2]} id={2} className="border-bottom" />
                    <Square state={gameState[3]} id={3} className="border-right-bottom" />
                    <Square state={gameState[4]} id={4} className="border-right-bottom" />
                    <Square state={gameState[5]} id={5} className="border-bottom" />
                    <Square state={gameState[6]} id={6} className="border-right" />
                    <Square state={gameState[7]} id={7} className="border-right" />
                    <Square state={gameState[8]} id={8} />
                </div>
            </div>)}
            {(winner || steps === 9) && (
                <div className="winner-area">
                    <div className="winner-text">{steps === 9 || !winner ? "It's a drawa!" : `${winner} Win!`}</div>
                </div>
            )}


        </div>
    )
}

export default GameLogic
