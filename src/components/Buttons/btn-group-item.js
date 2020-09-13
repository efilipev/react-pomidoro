import React from "react";

export const ButtonGroupItem = (props) => {
    return (
        <React.Fragment>
            {props.items.map(((item, key) => {
                return (
                    <div key={key} className={item.styles} onClick={item.handler}>
                        <img className="small" src={item.imageUrl} alt=""/>
                        <span className="btn-name">{item.buttonName}</span>
                    </div>
                )
            }))}
        </React.Fragment>
    )
};
