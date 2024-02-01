import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { BlogPen, GithubIcon, LinkedInIcon, MoonIcon, SunIcon, TwitterIcon } from "./Icons";
import {motion} from "framer-motion"; 
import useThemeSwitcher from "./hooks/useThemSwitcher";

const CustomLink = ({href, title, className=""}) =>{
    const router = useRouter();
     return(
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[2px] inline-block bg-secondary
            absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full': 'w-0'}
            dark:bg-highlight `}
            >&nbsp;</span>
        </Link>
     )
}

const MobCustomLink = ({href, title, className="", toggle}) =>{
    const router = useRouter();

    const handleClick = () =>{
        toggle();
        router.push(href)
    }
     return(
        <button href={href} className={`${className} relative group text-primary 
        dark:text-headline my-2`} onClick={handleClick}>
            {title}
            <span className={`h-[2px] inline-block bg-secondary dark:bg-highlight
            absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full': 'w-0'}
            dark:bg-highlight `}
            >&nbsp;</span>
        </button>
     )
}

const NavBar = () => {
    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () =>{
        setIsOpen(!isOpen)
    }

    return(

        <header className="w-full font-medium flex items-center fixed top-0 left-0  px-8 py-4 z-50
        justify-between dark:text-primary lg:px-16 md:px-12 sm:px-8 ">

            <button className="flex-col justify-center items-center hidden lg:flex" onClick={handleClick}>
                <span className= {`bg-headline dark:bg-primary transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm
                ${isOpen ? 'rotate-45 translate-y-1': '-translate-y-0.5'}`}></span>
                <span className= {`bg-headline dark:bg-primary transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 
                ${isOpen ? 'opacity-0': 'opacity-100'}`}></span>
                <span className= {`bg-headline dark:bg-primary transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm translate-y-0.5
                ${isOpen ? '-rotate-45 -translate-y-1': 'translate-y-0.5'}`}></span>
            </button>
                {/* Desktop Menu */}
            <div className="w-full flex justify-between items-center lg:hidden">
                <nav>
                    <CustomLink href="/about" title="About me" className="mx-4 text-lg"/>
                    <CustomLink href="/projects" title="Projects" className="mx-4 text-lg" />
                    <CustomLink href="/my-playground" title="Playground" className="ml-4 text-lg"/>
                </nav>

                <nav className="flex items-center justify-center flex-wrap">
                    {/* Social media Buttons */}
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

                    {/* Light and Dark Mode Switcher */}
                    <button className={`w-10 mx-3 flex items-center justify-center rounded-full p-1
                    ${mode === "light"? "bg-headline text-primary": "bg-primary text-headline"}`} 
                    onClick={() => setMode(mode === "light" ? "dark" : "light")}>
                        {
                            mode === "dark" ?
                            <SunIcon className={"fill-headline"}/>
                            : <MoonIcon className={"fill-headline"}/>
                        }
                    </button>


                    {/* Blog Button */}
                    <motion.a href="https://medium.com/@keyukemi" target={"_blank"}
                    className="bg-secondary text-headline text-xl flex items-center p-2.5 px-7 rounded-lg dark:text-primary
                    dark:bg-highlight hover:dark:border-primary hover:dark:bg-transparent hover:border-headline
                    justify-center w-20 h-auto ml-3 border-solid border-2 hover:bg-transparent hover:text-headline" 
                    whileHover={{y: -3}}
                    whileTap={{scale: 0.8}}>Blog<BlogPen className="ml-1 w-6"/></motion.a>
                </nav>
            </div>
                
                {/* Mobile Menu */}
            {
                isOpen ?
                <motion.div 
                initial={{scale:0, opacity:0, x:"-50%", y:"-50%" }}
                animate={{scale:1, opacity:1}}
                className="min-w-[70vw] z-30 flex flex-col justify-between items-center fixed top-1/2 left-1/2 
                -translate-x-1/2 -translate-y-1/2 bg-headline/90 dark:bg-primary/75 rounded-lg backdrop-blur-md py-32">
                    <nav className="flex flex-col justify-center items-center">
                        <MobCustomLink href="/" title="Home" className="text-lg"toggle={handleClick} />
                        <MobCustomLink href="/about" title="About me" className="text-lg"toggle={handleClick}/>
                        <MobCustomLink href="/projects" title="Projects" className="text-lg"toggle={handleClick} />
                        <MobCustomLink href="/my-playground" title="Playground" className="text-lg"toggle={handleClick}/>
                    </nav>
    
                    <nav className="flex items-center justify-center flex-wrap">
                        {/* Social media Buttons */}
                        <motion.a href="https://twitter.com/keyukemiubi" target={"_blank"} 
                        className="w-8 mx-3 sm:mx-1" 
                        whileHover={{y: -3}}
                        whileTap={{scale: 0.8}}> 
                        <TwitterIcon/></motion.a>
                        <motion.a href="https://github.com/Keyukemi" target={"_blank"} 
                        className="w-8 mx-3  bg-primary dark:bg-headline rounded-full sm:mx-1"
                        whileHover={{y: -3}}
                        whileTap={{scale: 0.8}}> <GithubIcon/> </motion.a>
                        <motion.a href="https://www.linkedin.com/in/keyukemi-ubi/" target={"_blank"} 
                        className="w-8 mx-3 sm:mx-1"
                        whileHover={{y: -3}}
                        whileTap={{scale: 0.8}}> <LinkedInIcon/> </motion.a>
    
                        {/* Light and Dark Mode Switcher */}
                        <button className={`w-10 mx-3 flex items-center justify-center rounded-full p-1 sm:mx-1
                        ${mode === "light"? "bg-headline text-primary": "bg-primary text-headline"}`} 
                        onClick={() => setMode(mode === "light" ? "dark" : "light")}>
                            {
                                mode === "dark" ?
                                <SunIcon className={"fill-headline"}/>
                                : <MoonIcon className={"fill-headline"}/>
                            }
                        </button>
    
    
                        {/* Blog Button */}
                        <motion.a href="https://medium.com/@keyukemi" target={"_blank"}
                        className="bg-headline text-secondary text-xl flex items-center p-2.5 px-7 rounded-lg dark:text-highlight
                        dark:bg-primary hover:dark:border-primary hover:dark:bg-transparent sm:mx-1
                        justify-center w-20 h-auto ml-3 border-solid border-2 hover:bg-transparent hover:text-secondary" 
                        whileHover={{y: -3}}
                        whileTap={{scale: 0.8}}>Blog<BlogPen className="ml-1 w-6"/></motion.a>
                        {/* BlogPen SVG doesnt work for now so I have to figure out how that works */}
                    </nav>
                </motion.div>
                :null
            }    
            
            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
        </header> 
    )
}

export default NavBar