import React from "react";
import { BadgeContext } from "./Badge";
import classNames from "classnames";

export default function BadgeContainer({children}){
    const {badgeBox, badgeColor} = React.useContext(BadgeContext)
    
    const allClasses = classNames('badge', badgeBox, badgeColor)

    return (
        <div className={allClasses}>{children}</div>
    )
}