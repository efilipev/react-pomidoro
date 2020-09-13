import React from "react";

export const NavItem = (props) => {
    return (
        <React.Fragment>
            {props.timersName.map(((timerName, key) => {
                return <div key={key} className="nav-item">{timerName}</div>
            }))}
        </React.Fragment>
    )
};
