import React from "react";
import {motion} from "framer-motion"; 

const EachSkill = ({name, x , y}) => {
    return (
        <motion.div className="flex items-center font-semibold py-3 px-6 shadow-dark cursor-pointer absolute dark:text-headline dark:bg-primary
        justify-center rounded-full bg-headline text-primary lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 
         xs:dark:text-headline  xs:text-primary xs:dark:bg-primary" 
        whileHover={{scale:1.05}}
        intital ={{x:0, y:0}}
        whileInView ={{x:x, y:y}}
        transition={{duration: 1.5}}
        viewport={{once: true}}
        >
            {name}
        </motion.div>
    )

};

const TechSkills = () => {
    return (
        <>
            <h2 className="font-bold text-8xl mt-64 w-full text-center mb-8 md:text-6xl md:mt-32 sm:text-4xl sm:mt-16 ">Tools | Frameworks | Skills </h2>
            <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-orbitLight dark:bg-orbitDark 
            lg:bg-orbitLightLg lg:dark:bg-orbitDarkLg md:bg-orbitLightMd md:dark:bg-orbitDarkMd sm:bg-orbitLightSm sm:dark:bg-orbitDarkSm
            lg:h-[80vh] md:h-[70vh] sm:h-[60vh] xs:h-[50vh]"> 

                {/* This section is hidden on small screen (sm) Later please write a different type of this section to be displayed for sm screen */}

                <motion.div className="flex items-center font-semibold p-8 shadow-dark cursor-pointer  md:p-6 sm:p-4 xs:p-2 xs:text-xs
                justify-center rounded-full bg-headline text-primary dark:text-headline dark:bg-primary
                xs:bg-headline xs:text-primary xs:dark:text-headline xs:dark:bg-primary" whileHover={{scale:1.05}}>
                    .DEV
                </motion.div>

                <EachSkill name="CSS" x="9vw" y="-20vw"/>
                <EachSkill name="HTML" x="23vw" y="-10vw"/>  
                <EachSkill name="Javascript(ES6)" x="1vw" y="-10vw" />
                <EachSkill name="Tailwind CSS" x="-20vw" y="-20vw" />
                <EachSkill name="NodeJs" x="-30vw" y="-10vw"/>
                <EachSkill name="NextJS" x="-35vw" y="15vw"/>
                <EachSkill name="Prisma" x="-20vw" y="-5vw"/>

                <EachSkill name="TRPC" x="31vw" y="6vw"/>
                <EachSkill name="ReactJS" x="-22vw" y="10vw"/>
                <EachSkill name="Express.js" x="-17vw" y="25vw"/>
                <EachSkill name="Github" x="15vw" y="15vw"/>
                <EachSkill name="AWS/Azure" x="30vw" y="20vw"/>
                <EachSkill name="TypeScript" x="1vw" y="10vw"/>
                <EachSkill name="Postgresql" x="30vw" y="-16vw"/>
            
            </div>

        </>
    )
}

export default TechSkills;