import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import { AnimatedHello } from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import rebImage from "../../public/images/project_images/rebimg.png"
import bookMgtApi from "../../public/images/project_images/bookMgtApi.png"
import closet from "../../public/images/project_images/closet.png"
import dglImage from "../../public/images/project_images/dglImage.png"
import humandetect from "../../public/images/project_images/humandetect.png"
import todoImage from "../../public/images/project_images/todoImage.png"
import TransitionEffect from "@/components/TransitionEffect";


const PersonalProj = ({type, title, summary, img, link, githubLink}) =>{
    return( 
        <div>
            <TransitionEffect/>
            <article className="w-full flex items-center justify-between rounded-3xl border
             border-headline border-solid text-headline  dark:bg-headline dark:border-primary dark:text-primary
            bg-primary shadow-2xl p-12 mt-12 relative rounded-br-2xl
            lg:flex-col lg-p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 ">
                <div  className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] dark:bg-primary
                bg-headline rounded-br-3xl xs:-right-2 sm:w-[100%] sm:h-[102%] xs:rounded-[1.5rem] "/>
                <Link href={link} target="_blank" 
                className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
                    <Image src={img} alt={title} className="w-full h-auto"/>
                </Link>
                <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6  ">
                     <span className="font-medium text-secondary text-xl dark:text-highlight xs:text-base">{type}</span>
                     <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                        <h2 className="my-2 text-4xl text-bold w-full sm:text-xl xs:text-lg">{title}</h2>
                     </Link>
                    <p className="my-2 font-medium sm:text-sm md:hidden">{summary}</p>
                    <div className="mt-2 flex items-center">
                        <Link href={githubLink} target="_blank" className="w-10">
                            <GithubIcon className="w-20 h-20"/>
                        </Link>
                        <Link href={link} target="_blank" className="bg-secondary ml-4 rounded-lg hover:border-2 hover:border-solid hover:border-headline
                         text-headline dark:text-primary dark:bg-highlight dark:hover:bg-headline hover:bg-transparent
                        p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base ">
                            View Project
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    )
} 

const SPersonalProj = ({type, title, img, link, githubLink}) =>{
    return( 
        <div>
            <article className="w-full flex flex-col items-center justify-between rounded-2xl border
             border-headline border-solid dark:bg-headline dark:border-primary dark:text-primary
            bg-primary shadow-2xl p-6 relative text-headline xs:p-4 ">
                <div  className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%]  bg-headline rounded-3xl
                md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem] dark:bg-primary"/>
                <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
                    <Image src={img} alt={title} className="w-full h-[200px]"/>
                </Link>
                <div className="w-full flex flex-col items-start justify-between mt-4">
                     <span className="font-medium text-secondary dark:text-highlight text-xl lg:text-lg md:text-base">{type}</span>
                     <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                        <h2 className="my-2 text-3xl text-bold w-full sm:text-xl xs:text-lg">{title}</h2>
                     </Link>
                    
                    
                    <div className="mt-2 w-full flex items-center justify-between">
                        <Link href={link} target="_blank" className="text-lg font-semibold underline underline-offset-2 md:text-base  ">
                                View Project
                        </Link>
                        <Link href={githubLink} target="_blank" className="w-8 md:w-6">
                            <GithubIcon className="w-20 h-20"/>
                        </Link>
                        
                    </div>
                </div>
            </article>
        </div>
    )
} 


const Projects = () =>{
    return(
        <>
            <Head>
                <title>Keyukemi | About Page</title>
                <meta name="description" content="What you need to know about Keyukemi Ubi"/>
            </Head>

            <main className="w-full mb-16 flex flex-col items-center justify-center">
                <Layout className="pt-16">
                    <AnimatedHello text= "Build Epic Shit!" 
                    className="!text-center text-7xl mb-16 sm:!text-5xl sm:mb-8 xs:!text-4xl" />

                    <div className="grid grid-col-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        <div className="col-span-12">
                            <PersonalProj 
                                type={"Personal Project"}
                                title= "PinkFlix-The Clone"
                                summary={`An simple clone of Netflix with a few design modifications 
                                    It's a responsive webapp built with Typescript, NextJS, and Tailwind CSS. 
                                `}
                                img={closet}
                                link="https://pinkflix-the-clone.vercel.app//"
                                githubLink="https://github.com/Keyukemi/pinkflix-the-clone"
                            
                            />
                        </div>
                        <div className="col-span-6 md:col-span-12">
                            <SPersonalProj
                                type={"Personal Project"}
                                title= "Reck-Eat-Buddy"
                                img={rebImage}
                                link="https://reck-eat-buddy.vercel.app/"
                                githubLink="https://github.com/Keyukemi/reck-eat-buddy"
                             />    
                        </div>
                        <div className="col-span-6 md:col-span-12">
                                <SPersonalProj 
                                    type={"Fun Project"}
                                    title= "To-Do List"
                                    img={todoImage}
                                    link="https://keyukemi.github.io/-colofulTodoList/"
                                    githubLink="https://github.com/Keyukemi/-colofulTodoList"
                                />
                              
                        </div>
                        <div className="col-span-12">
                            <PersonalProj 
                                type={"Company Website"}
                                title= "DGL Consulting"
                                summary={`A company website built with HTML, CSS and Vanilla Javascript.`}
                                img={dglImage}
                                link="https://myfirstproject.keyukemi.repl.co/"
                                githubLink="/"
                            />
                        </div>
                        <div className="col-span-6 md:col-span-12">
                            <SPersonalProj 
                                type={"Personal Project"}
                                title= "Human Detector App"
                                img={humandetect}
                                link="https://humandetector-production.up.railway.app/"
                                githubLink="https://github.com/Keyukemi/HumanDetector"
                            />
                        </div>
                        <div className="col-span-6 md:col-span-12">
                            <SPersonalProj 
                                type={"API/Tools"}
                                title= "Book Management API"
                                img={bookMgtApi}
                                link="https://github.com/Keyukemi/BookMgtApi"
                                githubLink="https://github.com/Keyukemi/BookMgtApi"
                            />
                        </div>
                        

                    </div>
                </Layout>
            </main>
        </>
    )
}

export default Projects;