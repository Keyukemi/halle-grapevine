import { AnimatedHello, AnimatedWorld } from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import {motion, useSpring, useMotionValue, useInView} from "framer-motion"; 
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import profileImage from "../../public/images/creative_images/coolGirl.png"
import TechSkills from "@/components/TechSkills";
import Trips from "@/components/Trips";

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
            <main className="flex w-full flex-col items-center justify-center text-headline dark:text-primary">
                <Layout className="pt-12">
                    <AnimatedHello text="Vivere Con Audacia!" className="text-7xl !text-center
                     dark:text-primary lg:!text-5xl sm:mb-4 md:!text-4xl xs:!text-2xl " />
                    <AnimatedWorld text= "Live Audaciously..."className="!text-2xl lg:!text-xl  sm:!text-lg
                    italic !text-center text-secondary mb-32 sm:mb-8 dark:text-highlight"/>

                    <div className="grid grid-cols-8 gap-16 w-full sm:gap-8">
                        <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8 ">
                            <motion.h2 className="uppercase text-2xl font-bold text-headline/75" whileHover ={{scale:1.2}}>About Me</motion.h2>
                            <p className="font-medium my-2">
                            {`I am a Software Developer. This means I know my way around HTML, CSS and Javascript. 
                            From time to time, I  dabble into PHP and C# if I need to, but it's not one of my favourites. 
                            If you are curious about my skills, check out my Github. I am very open to learning and growing as a Software Engineer.`}
                            </p>
                            <p className="font-medium my-2">
                                {`My day job is quite different, though. You can find out more about that in my resume if you are curious. 
                                I am a Generalist; this means I dip my hands into many pies. When I get worried about my career, 
                                I remember the quote, “a jack of all trades is a master of none, but oftentimes better than a master of one.”
                                `}
                            </p>
                            <motion.h3 className="text-lg font-bold text-headline/75" whileHover ={{scale:1.2}}>What do I do for Fun?</motion.h3>
                            <p className="font-medium my-2">
                                {`To be honest, I swear I could make a long list here, and you would be amazed, but in the next month, 
                                everything may have changed. However, over the years, some activities have stayed interesting to me. I
                                 love reading, yoga, watching movies, travel and hearing people’s stories. 

                                `}
                            </p>
                            <p className="font-medium my-2">
                                {`As you can see, that’s the pretty standard stuff. Maybe even classified as boring. 
                                I know you may start to think that I spend a lot of time outdoors, but I am as ‘indoorsy’ as they come.
                                `}
                            </p>
                            <motion.h3 className="text-lg font-bold  text-headline/75" whileHover ={{scale:1.2}}>How I contribute to the world?</motion.h3>
                            <p className="font-medium my-2">
                                {`
                                    I have always wanted to see the world. That’s why I love movies; it immerses me in a whole new world. 
                                    There is so much undiscovered and unexplored beauty in the world that makes me a Fernweh. 
                                    I don’t think I have any more to tell you. 
                                    But I promise to update as I remember stuff, but this is what you get for now. 
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
