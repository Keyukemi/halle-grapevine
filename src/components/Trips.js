import React, { useEffect, useRef } from "react";
import {motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({country, month,year, activities}) =>{
    const ref = useRef(null);
    return <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] md:w-[70%] mx-auto flex flex-col items-center justify-between">
        <LiIcon reference={ref}/>
        <motion.div 
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type: "spring"}}>

            <h3 className="capitalize font-bold text-2xl md:text-xl">{month} |&nbsp;<a href="" 
            className="capitalize text-secondary dark:text-highlight " target="_blank" >{country}</a></h3>
            <span className="capitalize font-medium md:font-normal md:text-sm  text-paragraph dark:text-primary/75 ">
                {year}
            </span>
            <p className="font-medium w-full text-lg md:text-base">
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
            <div className="mt-56 sm:my-24">
                <h2 className="font-bold text-8xl w-full text-center mb-8 md:text-6xl md:mt-32 sm:text-4xl sm:mt-16 md:mb-16">World Travel</h2>
                <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">

                    {/* The loading line  */}
                    <motion.div style={{scaleY: scrollYProgress}} 
                    className="absolute left-9 top-0 w-[4px] origin-top h-full bg-headline dark:bg-primary 
                    md:w-[2px] md:left-[30px] xs:left-[20px] "/>

                    <ul className="w-full flex flex-col item-start justify-between ml-4 xs:ml-2">
                        <Details
                            country={"Republic of Benin"}
                            month={"April-June"}
                            year={"Twenty Twenty-Two"}
                            activities={`Spent time visiting landmark and historical places in Benin Repulic. 
                            I lived as a digital Nomad in Cotonou city for 3 months. I mostly worked (remotely), did yoga and spent my evenings on the beach.
                            During my time there, I also visited smaller towns like Ganvie and Grand-popo.`}
                        />
                        <Details
                            country={"Togo"}
                            month={"1/2 July"}
                            year={"Twenty Twenty-Two"}
                            activities={`I mostly rested in Lome but visited smaller towns close by like Kpalime. I went to the waterfall- Cascade Kamalo 
                            (where I pretended to play the xylophone like an expert) and Les Valles des Chauves-Souris. Also saw Le Chateau Viale and spent some time learning about Togolese history.`}
                        />
                        <Details
                            country={"Ghana"}
                            month={"January"}
                            year={"Twenty Twenty-Three"}
                            activities={`A company trip but still a trip. I vistited the Black Star Gate & the Art market. 
                            Had the tastiest sorbet during an evening walk with my collegaue. 
                            Then visited beautifully cozy mexican restaraunt called Borracha and had a swell time playing games and pretending to dance salsa.`}
                        /> 
                    </ul>
                </div>
            </div>
        
        </>
    )
} 

export default Trips 