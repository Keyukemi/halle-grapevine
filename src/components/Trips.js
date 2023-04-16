import React, { useEffect, useRef } from "react";
import {motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({country, month,year, activities}) =>{
    const ref = useRef(null);
    return <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
        <LiIcon reference={ref}/>
        <motion.div 
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type: "spring"}}>

            <h3 className="capitalize font-bold text-2xl">{month} |&nbsp;<a href="" 
            className="capitalize text-secondary dark:text-highlight " target="_blank" >{country}</a></h3>
            <span className="capitalize font-medium text-paragraph dark:text-primary/75 ">
                {year}
            </span>
            <p className="font-medium w-full text-lg">
                {activities}
            </p>
        </motion.div>
    </li>
}
 
const Trips = ({}) =>{
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end","center start"]
        }
    )
    return(
        <>
            <div className="my-64">
                <h2 className="font-bold text-8xl w-full text-center mb-8">World Travel</h2>
                <div ref={ref} className="w-[75%] mx-auto relative">
                    <motion.div style={{scaleY: scrollYProgress}} 
                    className="absolute left-9 top-0 w-[4px] origin-top h-full bg-headline dark:bg-primary "/>
                    <ul className="w-full flex flex-col item-start justify-between ml-4">
                        <Details
                            country={"Republic of Benin"}
                            month={"April-June"}
                            year={"Twenty Twenty-Two"}
                            activities={`Spent time visiting landmark and historical places in Benin Repulic locations. 
                            I lived as a Nomad in Cotonou city for 3 months and during that time I visited smaller towns like Ganvie and Grand-popo `}
                        />
                        <Details
                            country={"Togo"}
                            month={"1/2 July"}
                            year={"Twenty Twenty-Two"}
                            activities={`Spent time visiting landmark and historical places in Benin Repulic locations. 
                            I lived as a Nomad in Cotonou city for 3 months and during that time I visited smaller towns like Ganvie and Grand-popo `}
                        />
                        <Details
                            country={"Ghana"}
                            month={"2/2 July"}
                            year={"Twenty Twenty-Two"}
                            activities={`Spent time visiting landmark and historical places in Benin Repulic locations. 
                            I lived as a Nomad in Cotonou city for 3 months and during that time I visited smaller towns like Ganvie and Grand-popo `}
                        />
                        <Details
                            country={"Côte d'Ivoire (❌)"}
                            month={"October"}
                            year={"Twenty Twenty-Three"}
                            activities={`Spent time visiting landmark and historical places in Benin Repulic locations. 
                            I lived as a Nomad in Cotonou city for 3 months and during that time I visited smaller towns like Ganvie and Grand-popo `}
                        />
                        <Details
                            country={"The Gambia (❌)"}
                            month={"November"}
                            year={"Twenty Twenty-Three"}
                            activities={`Spent time visiting landmark and historical places in Benin Repulic locations. 
                            I lived as a Nomad in Cotonou city for 3 months and during that time I visited smaller towns like Ganvie and Grand-popo `}
                        />
                        <Details 
                            country={"Senegal(❌)"} 
                            month={"December"}
                            year={"Twenty Twenty-Three"}
                            activities={`Spent time visiting landmark and historical places in Benin Repulic locations. 
                            I lived as a Nomad in Cotonou city for 3 months and during that time I visited smaller towns like Ganvie and Grand-popo `}
                        />
                    </ul>
                </div>
            </div>
        
        </>
    )
} 

export default Trips 