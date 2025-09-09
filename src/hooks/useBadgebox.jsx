import React from "react";
//import useEffectOnChange from "./useEffectOnChange";

export default function useBadgebox({
    initialValue,
    onToggle = () => {}
    }){
    //console.log('hook', box)
    const [badgeBox, setBadgeBox] = React.useState('square')
    const [badgeColor, setBadgeColor] = React.useState('graybg')

    function assignBadgeBox(){
        setBadgeBox(prevBadgeBox => prevBadgeBox ==='square' ? 'pill' : 'square' )
    }

    function assignBadgeColor(selectedColor){
        //console.log('clicked', selectedColor)
        setBadgeColor(selectedColor)
    }

    //useEffectOnChange(onToggle, ['square'])

    return [badgeBox, assignBadgeBox, badgeColor, assignBadgeColor]
}