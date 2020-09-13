import React from "react";

export const ButtonGroup = (props) => {
    return (
        <div className="flex justify-center align-center btn-container">
            <React.Fragment>
                {props.children}
            </React.Fragment>
        </div>
    )
};
