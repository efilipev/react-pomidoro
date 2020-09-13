import React, { useRef } from "react";

export const Timer = (props) => {
    const timerRef = useRef();
    return (
        <div className="timer" ref={timerRef}>
            <h1>{props.minutes()}:{props.seconds()}</h1>
        </div>
    )
};
