import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { BlogPen, GithubIcon, LinkedInIcon, TwitterIcon } from "./Icons";
import {motion} from "framer-motion"; 

const CustomLink = ({href, title, className=""}) =>{
    const router = useRouter();
     return(
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[2px] inline-block bg-secondary
            absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full': 'w-0'}
            `}>&nbsp;</span>
        </Link>
     )
}

const NavBar = () => {
    return(

        <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
            <nav>
                <CustomLink href="/" title="Home" className="mr-4 text-lg"/>
                <CustomLink href="/about" title="About me" className="mx-4 text-lg"/>
                <CustomLink href="/projects" title="Projects" className="mx-4 text-lg" />
                <CustomLink href="/creative" title="Creative Corner" className="ml-4 text-lg"/>
            </nav>

            <nav className="flex items-center justify-center flex-wrap">
                <motion.a href="https://twitter.com/keyukemiubi" target={"_blank"} className="w-8 mx-3" 
                whileHover={{y: -3}}
                whileTap={{scale: 0.8}}> 
                <TwitterIcon/></motion.a>
                <motion.a href="https://github.com/Keyukemi" target={"_blank"} className="w-8 mx-3"
                whileHover={{y: -3}}
                whileTap={{scale: 0.8}}> <GithubIcon/> </motion.a>
                <motion.a href="https://www.linkedin.com/in/keyukemi-ubi/" target={"_blank"} className="w-8 mx-3"
                whileHover={{y: -3}}
                whileTap={{scale: 0.8}}> <LinkedInIcon/> </motion.a>
                <motion.a href="https://medium.com/@keyukemi" target={"_blank"}
                 className="bg-headline text-secondary text-xl flex items-center p-2.5 px-7 rounded-lg 
                 justify-center w-20 h-auto ml-3 border-solid border-2 hover:bg-transparent hover:text-secondary" 
                whileHover={{y: -3}}
                whileTap={{scale: 0.8}}>Blog<BlogPen className="ml-1 w-6"/></motion.a>
            </nav>

            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
        </header>
    )
}

export default NavBar