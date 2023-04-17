import Link from "next/link";
import Image from 'next/image';
import React from "react";
import {motion} from "framer-motion"
// import { useMotionValue, useTransform } from "framer-motion"
// import { Frame } from "framer"

const MotionLink = motion(Link);

const Logo = () => {
    return(
        <div className="flex items-center justify-center mt-2">
           <MotionLink href="/"  className="bg-headline rounded-full w-20 h-20 flex dark:bg-primary lg:w-10 lg:h-10 md:hidden
           items-center justify-center dark:border-primary border border-solid border-transparent"  
           whileHover ={{scale:1.2}} >
                <Image src="/images/kkFaceeLogo2.png" alt="My Image" width={100} height={100} 
                className="rounded-full w-16 h-16 flex items-center justify-center lg:w-10 lg:h-10" /> 
           </MotionLink>
        </div>
        
    )
}

export default Logo
