import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import Image from "next/image";
import kkcodesIcon from "../../public/images/kkCodes.png"

const Footer = () => {
    return(
        <footer className="w-full font-medium text-lg 
        text-headline dark:text-primary dark:border-primary sm:text-base ">
            <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6"> 
                <span>&copy; {new Date().getFullYear()} All Rights Reserved</span>

                <span className="flex items-center lg:py-2"> Built by 
                    <Link href="https://github.com/Keyukemi" className="underline underline-offset-2 ml-1" target={"_blank"}>KeyuKemi</Link>
                    <Image src={kkcodesIcon} alt="KeyuKodes Logo" className="w-10 h-10 inline-block rounded-full"/>
                </span>
                <Link href="mailto:almostvintagebykeyu@gmail.com" 
                className="underline underline-offset-2 text-secondary dark:text-highlight" target={"_blank"}>Wanna Chat?</Link>
            </Layout>
        </footer>
    
    )
}

export default Footer; 