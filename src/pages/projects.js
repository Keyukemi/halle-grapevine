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


const PersonalProj = ({type, title, summary, img, link, githubLink}) =>{
    return( 
        <div>
            <article className="w-full flex items-center justify-between rounded-3xl border border-headline border-solid text-headline
            bg-primary shadow-2xl p-12 mt-12 relative rounded-br-2xl">
                <div  className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2.5rem] bg-headline rounded-br-2xl"/>
                <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg">
                    <Image src={img} alt={title} className="w-full h-auto"/>
                </Link>
                <div className="w-1/2 flex flex-col items-start justify-between pl-6">
                     <span className="font-medium text-secondary text-xl dark:text-highlight">{type}</span>
                     <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                        <h2 className="my-2 text-4xl text-bold w-full">{title}</h2>
                     </Link>
                    <p className="my-2 font-medium text-headline">{summary}</p>
                    <div className="mt-2 flex items-center">
                        <Link href={githubLink} target="_blank" className="w-10">
                            <GithubIcon className="w-20 h-20"/>
                        </Link>
                        <Link href={link} target="_blank" className="bg-headline ml-4 rounded-lg text-secondary dark:text-highlight p-2 px-6 text-lg font-semibold">
                            View Project
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    )
} 

const SPersonalProj = ({type, title, summary, img, link, githubLink}) =>{
    return( 
        <div>
            <article className="w-full flex flex-col items-center justify-between rounded-2xl border border-headline border-solid
            bg-primary shadow-2xl p-6 relative text-headline">
                <div  className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-headline rounded-br-2xl"/>
                <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
                    <Image src={img} alt={title} className="w-full h-auto"/>
                </Link>
                <div className="w-full flex flex-col items-start justify-between mt-4">
                     <span className="font-medium text-secondary dark:text-highlight text-xl">{type}</span>
                     <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                        <h2 className="my-2 text-3xl text-bold w-full">{title}</h2>
                     </Link>
                    
                    
                    <div className="mt-2 w-full flex items-center justify-between">
                        <Link href={link} target="_blank" className="text-lg font-semibold underline underline-offset-2">
                                View Project
                        </Link>
                        <Link href={githubLink} target="_blank" className="w-8">
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
                    <AnimatedHello text= "Build Epic Shit!" className="!text-center !text-7xl mb-16" />

                    <div className="grid grid-col-12 gap-24 gap-y-32">
                        <div className="col-span-12">
                            <PersonalProj 
                                type={"Personal Project"}
                                title= "Reck-Eat-Buddy"
                                summary={`An WebApp to help you learn to cook, document your recipes and plan your meals
                                A Full-stack feature-rich app built with the T3stack i.e. Typescript, NextJS, and Tailwind CSS. 
                                `}
                                img={rebImage}
                                link="https://reck-eat-buddy.vercel.app/"
                                githubLink="/"
                            
                            />
                        </div>
                        <div className="col-span-6">
                            <SPersonalProj
                                type={"E-Commerce Website"}
                                title= "Keyu's Closet"
                                img={closet}
                                link="https://keyus-closet.vercel.app/"
                                githubLink="/"
                             />    
                        </div>
                        <div className="col-span-6">
                              <SPersonalProj 
                                type={"Personal Project"}
                                title= "Human Detector App"
                                img={humandetect}
                                link="https://humandetector-production.up.railway.app/"
                                githubLink="/"
                              />
                        </div>
                        <div className="col-span-12">
                            <PersonalProj 
                                type={"Company Website"}
                                title= "DGL Consulting"
                                summary={`An WebApp to help you learn to cook, document your recipes and plan your meals
                                A Full-stack feature-rich app built with the T3stack i.e. Typescript, NextJS, and Tailwind CSS. 
                                `}
                                img={dglImage}
                                link="https://myfirstproject.keyukemi.repl.co/"
                                githubLink="/"
                            />
                        </div>
                        <div className="col-span-6">
                            <SPersonalProj 
                                type={"API/Tools"}
                                title= "Book Management API"
                                img={bookMgtApi}
                                link="/"
                                githubLink="/"
                            />
                        </div>
                        <div className="col-span-6">
                            <SPersonalProj 
                                type={"Fun Project"}
                                title= "To-Do List"
                                img={todoImage}
                                link="/"
                                githubLink="/"
                            />
                        </div>

                    </div>
                </Layout>
            </main>
        </>
    )
}

export default Projects;