import React from "react";

export const NavItems = (props) => {
    return (
        <div className="flex justify-center align-center nav-items">
            <React.Fragment>
                {props.children}
            </React.Fragment>
        </div>
    )
};
