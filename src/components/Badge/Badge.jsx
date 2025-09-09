import React from "react"
import useBadgebox from "../../hooks/useBadgebox"

const BadgeContext = React.createContext()
export { BadgeContext }

export default function Badge({children, onOpen}){
    //console.log(onOpen)
    const [badgeBox, assignBadgeBox, badgeColor, assignBadgeColor] = useBadgebox({
        initialValue: true,
        onToggle: onOpen
    })
    return (
        <BadgeContext.Provider value={{badgeBox, assignBadgeBox, badgeColor, assignBadgeColor}}>
            <main>
                {children}
            </main>
        </BadgeContext.Provider>
    )
}