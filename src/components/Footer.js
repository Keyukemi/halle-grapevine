import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import Image from "next/image";
import kkcodesIcon from "../../public/images/kkCodes.png"

const Footer = () => {
    return(
        <footer className="w-full border-t-2 border-solid border-headline font-medium text-lg 
        text-headline dark:text-primary dark:border-primary sm:text-base ">
            <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6"> 
                <span>{new Date().getFullYear()}&copy; All Rights Reserved</span>

                <div className="flex items-center lg:py-2"> Built by<Link href="https://github.com/Keyukemi" 
                className="underline underline-offset-2" target={"_blank"}>
                        KeyuKodes  
                    </Link> 
                    <Image src={kkcodesIcon} alt="KeyuKodes Logo" className="w-10 h-10 inline-block rounded-full"/>
                </div>
                <Link href="https://instagram.com/keyukemiubi?igshid=YmMyMTA2M2Y=" 
                className="underline underline-offset-2 text-secondary dark:text-highlight" target={"_blank"}>Wanna Chat?</Link>
            </Layout>
        </footer>
    
    )
}

export default Footer; 