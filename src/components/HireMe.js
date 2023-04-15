import React from "react";
import { CircularText } from "./Icons";
import Image from "next/image";
import Link from "next/link";
import uiEngineer from "../../public/images/uiEngineer.png"

const HireMe = () => {
    return (
        <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
            <div className="w-48 h-auto flex items-center justify-center relative">
                {/* <CircularText className={"animate-spin-slow"}/> */}
                <Image src={uiEngineer} className={"animate-spin-slow"} alt=""/>
                <Link href="/"  
                className="bg-headline rounded-full w-20 h-20 flex items-center justify-center
                absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md border border-solid
                border-paragraph">
                <Image src="/images/kkFaceLogos.jpeg" alt="My Image" width={100} height={100} 
                className="rounded-full w-16 h-16 flex items-center justify-center"/> 
                 </Link>

            </div>
        </div>
    )
}

export default HireMe;