import React from "react";
import { CircularText } from "./Icons";
import Image from "next/image";
import Link from "next/link";
import uiEngineer from "../../public/images/uiEngineer.png"

const HireMe = () => {
    return (
        <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden 
        md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute ">
            <div className="w-48 h-auto flex items-center justify-center relative md:w-24 ">
                <Image src={uiEngineer} className={"dark:bg-primary/70 dark:rounded-full animate-spin-slow"} alt=""/>
                <Link href="/"  
                className="bg-headline rounded-full w-20 h-20 flex items-center justify-center md:w-12 md:h-12
                absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md border border-solid
                border-paragraph">
                <Image src="/images/kkFaceeLogo2.png" alt="My Image" width={100} height={100} 
                className="rounded-full w-16 h-16 flex items-center justify-center md:w-10 md:h-10"/> 
                 </Link>

            </div>
        </div>
    )
}
 
export default HireMe;