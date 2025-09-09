import React from "react";
import { BadgeContext } from "./Badge";

export default function BadgeSelectcolor(){
    const {assignBadgeColor} = React.useContext(BadgeContext)
    
    function passBadgeColor(e){
        const selectedColor = e.target.value;
        //console.log(selectedColor)
        assignBadgeColor(selectedColor)
    }
    return (
        <section className="selectBadgeColor">
            <label htmlFor="badgeColor">Select Badge Color</label>
            <select id="badgeColor" name="badgeColor" defaultValue="graybg" onChange={passBadgeColor}>
                <option value="graybg">Gray</option>
                <option value="redbg">Red</option>
                <option value="yellowbg">Yellow</option>
                <option value="greenbg">Green</option>
                <option value="bluebg">Blue</option>
                <option value="indigobg">Indigo</option>
                <option value="purplebg">Purple</option>
                <option value="pinkbg">Pink</option>
            </select>
        </section>
    )
}