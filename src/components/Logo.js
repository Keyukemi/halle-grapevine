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
           <MotionLink href="/"  className="bg-headline rounded-full w-20 h-20 flex items-center justify-center"  whileHover ={{scale:1.2}} >
                <Image src="/images/kkFaceLogos.jpeg" alt="My Image" width={100} height={100} className="rounded-full w-16 h-16 flex items-center justify-center"/> 
           </MotionLink>
        </div>
        
    )
}

export default Logo
