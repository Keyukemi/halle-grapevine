import { AnimatedHello, AnimatedWorld } from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import {motion, useSpring, useMotionValue, useInView} from "framer-motion"; 
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import profileImage from "../../public/images/creative_images/coolGirl.png"
import TechSkills from "@/components/TechSkills";
import Trips from "@/components/Trips";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({value}) =>{
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration: 3000});
    const isInView = useInView(ref, {once: true});

    useEffect(() => {
        if (isInView){
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on('change', (latest)=>{
           if(ref.current && latest.toFixed(0) <= value){
            ref.current.textContent = latest.toFixed(0);
           }
        })
    }, [springValue, value])

    return <span ref={ref}></span> 
}

const about = () => {
    return (
        <>

            <Head>
                <title>Keyukemi | About Page</title>
                <meta name="description" content="What you need to know about Keyukemi Ubi"/>
            </Head>
            <TransitionEffect/>
            <main className="flex w-full flex-col items-center justify-center text-headline dark:text-primary">
                <Layout className="pt-12">
                    <AnimatedHello text="Vivere Con Audacia!" className="text-7xl !text-center
                     dark:text-primary lg:!text-5xl sm:mb-4 md:!text-4xl xs:!text-2xl " />
                    <AnimatedWorld text= "Live Audaciously..."className="!text-xl lg:!text-lg  sm:!text-md
                    italic !text-center text-secondary mb-20 sm:mb-8 dark:text-highlight"/>

                    <div className="grid grid-cols-8 gap-16 w-full sm:gap-8">
                        <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8 ">
                            <motion.h2 className="uppercase text-2xl font-bold text-headline/75" whileHover ={{scale:1.2}}>About Me</motion.h2>
                            <p className="font-medium my-2">
                            {`Hi, I am Keyukemi Ubi. Everyone calls me Keyu or K; whichever you choose is fine.  
                            You are probably here because you are curious about me. 
                            This Bio won’t tell you much, but it will give you a glimpse, at the very least. .`}
                            </p>
                            <p className="font-medium my-2">
                                {`Work is essential to our human existence so that I will start with that. 
                                I contribute to maintaining the structural design of society by being a Software engineer. 
                                So at least 8 hours a day, you might find me working on something that concerns code. 
                                I am a User Interface Engineer, or what people might call Frontend Engineer, but I dabble in the backend tasks from time to time. 
                                I like to say UI Engineer because I really care about implementing designs that make people have the most seamless and enthralling experience that they come back for more.
                                Keep scrolling to see the tools, languages, and frameworks I know. 
                                `}
                            </p>
                            <motion.h3 className="text-lg font-bold text-headline/75" whileHover ={{scale:1.2}}>When I am not working, Who am I?</motion.h3>
                            <p className="font-medium my-2">
                                {`A wanderer. I like to travel, see new places, experience new cultures, and pick up new languages.
                                    I also like to stay fit and healthy, so I am a gym rat. 
                                    I also like swimming and want to take on more fun physical activities.
                                    My writings are my primary channel of expression, so you can find me on Medium talking about everything and anything. 
                                `}
                            </p>
                           
                            <motion.h3 className="text-lg font-bold  text-headline/75" whileHover ={{scale:1.2}}>Viva la Vida</motion.h3>
                            <p className="font-medium my-2">
                                {`
                                    When I am not doing any of these, I am cuddled up in bed, watching anime or a Korean series.
                                    And if you can’t find me there, I am probably reading a book or exploring my many curiosities on Youtube. 
                                `}
                            </p>
                            <p className="font-medium my-2">
                                {`
                                    Either way, Thank you for being curious about me.
                                    Keyu 🖤
                                `}
                            </p>
                        </div>
                            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-headline bg-primary 
                            dark:bg-headline dark:border-primary p-8 xl:col-span-4 md:order-1 md:col-span-8">
                                <div  className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-headline dark:bg-primary"/>
                                <Image src={profileImage} alt="" className=" w-full h-auto rounded-2xl" 
                                priority sizes="(max-width:768px) 100vw, 
                                (max-width:1200px) 50vw, 33vw"/>
                            </div>

                            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
                                <div className="flex flex-col items-end justify-center xl:items-center">
                                    <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                        <AnimatedNumbers value={2}/>+
                                    </span> 
                                    <h2 className="text-xl font-medium capitalize text-headline/75
                                     dark:text-primary xl:text-center md:text-lg sm:text-base xs:text-sm">Satisfied Clients</h2>
                                </div>
                                <div className="flex flex-col items-end justify-center xl:items-center ">
                                    <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={5}/>+</span>
                                    <h2 className="text-xl font-medium capitalize text-headline/75 
                                    dark:text-primary xl:text-center md:text-lg sm:text-base xs:text-sm">Projects Completed</h2>
                                </div> 
                                <div className="flex flex-col items-end justify-center xl:items-center">
                                    <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={3}/>+</span>
                                    <h2 className="text-xl font-medium capitalize text-headline/75
                                     dark:text-primary xl:text-center md:text-lg sm:text-base xs:text-sm">Countries Visited</h2>
                                </div>
                            </div>
                    </div>
                    <TechSkills/>
                    <Trips/>
                </Layout>
            </main>
        
        
        </>
    )
}

export default about;
