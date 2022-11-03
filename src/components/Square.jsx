import React from "react";
import "./Square.css";


const Square = ({ id, className, state }) => {
    return (
        <>
            <div className={`square-container ${className}
             ${state === "A" ? "a-color" : "b-color"}`} id={id}>
                {state}
            </div>
        </>
    )
}

export default Square;