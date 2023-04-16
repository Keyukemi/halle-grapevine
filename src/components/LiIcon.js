import React from "react";
import {motion, useScroll } from "framer-motion";

const LiIcon = ({reference}) => {
    
    const {scrollYProgress} = useScroll(
        {
            target: reference,
            offset: ["center end","center center"]
        }
    )
    return (
        <figure className="absolute left-0 stroke-headline stroke-2">
            <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
                <circle cx="75" cy="50" r="20" className="stroke-secondary dark:stroke-highlight  stroke-1 fill-none"/>
                <motion.circle cx="75" cy="50" r="20"  className="stroke-[5px] fill-primary" 
                style={
                    {pathLength: scrollYProgress}
                }/>
                <circle cx="75" cy="50" r="10"  className=" animate-pulse stroke-1 fill-secondary dark:fill-highlight "/>
            </svg>
        </figure>
    )
}

export default LiIcon;