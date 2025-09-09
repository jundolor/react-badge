import React from "react";
import { BadgeContext } from "./Badge";

export default function BadgeRadiocorner(){
    const {badgeBox, assignBadgeBox} = React.useContext(BadgeContext)

    return (
        <fieldset>
            <legend>Select Box Corner</legend>
            <label>
                <input type="radio" name="badgeCorder" value="square" checked={badgeBox === "square"} onChange={assignBadgeBox}/>
                Square
            </label>
            <label>
                <input type="radio" name="badgeCorder" value="pill" checked={badgeBox === "pill"} onChange={assignBadgeBox} />
                Pin
            </label>
        </fieldset>
    )
}