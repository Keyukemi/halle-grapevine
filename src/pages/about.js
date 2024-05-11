import { AnimatedHello, AnimatedWorld } from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import {motion, useSpring, useMotionValue, useInView} from "framer-motion"; 
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import coolgirl102 from "../../public/images/creative_images/coolgirl102.png"
import TechSkills from "@/components/TechSkills";
import TransitionEffect from "@/components/TransitionEffect";
import Footer from "@/components/Footer";

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
                <Layout className="pt-20">
                    <AnimatedHello text="Vivere Con Audacia!" className="text-7xl !text-center mt-10
                     dark:text-primary lg:!text-5xl sm:mb-4 md:!text-4xl xs:!text-2xl " />
                    <AnimatedWorld text= "Live Audaciously..."className="!text-xl lg:!text-lg  sm:!text-md
                    italic !text-center text-secondary mb-20 sm:mb-8 dark:text-highlight"/>

                    <div className="grid grid-cols-1 gap-16 w-full sm:gap-8">
                        {/* Image Section */}
                        <div className="flex flex-col items-center justify-center">
                            <div className="relative rounded-2xl border-2 border-solid bg-primary dark:bg-headline dark:border-black p-8 w-full sm:w-3/4 lg:w-auto max-w-md">
                                <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-headline opacity-50 dark:bg-darkshadow" />
                                <Image src={coolgirl102} alt="" className="w-full h-auto rounded-2xl" priority sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"/>
                            </div>
                        </div>


                        {/* Clients Details Section */}
                        <div className="flex flex-col items-center justify-center">
                            <div className="flex justify-between items-center text-center">
                                <div className="flex flex-col items-center justify-center m-5">
                                    <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                        <AnimatedNumbers value={2}/>+
                                    </span> 
                                    <h2 className="text-xl font-medium capitalize text-headline/75 dark:text-primary 
                                    xl:text-center md:text-lg sm:text-base xs:text-sm sm:py-3">Satisfied Clients</h2>
                                </div>
                                <div className="flex flex-col items-center justify-center m-5">
                                    <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                        <AnimatedNumbers value={5}/>+
                                    </span>
                                    <h2 className="text-xl font-medium capitalize text-headline/75 dark:text-primary xl:text-center md:text-lg sm:text-base xs:text-sm sm:py-3">Projects Completed</h2>
                                </div> 
                                <div className="flex flex-col items-center justify-center m-5">
                                    <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                        <AnimatedNumbers value={3}/>+
                                    </span>
                                    <h2 className="text-xl font-medium capitalize text-headline/75 dark:text-primary xl:text-center md:text-lg sm:text-base xs:text-sm sm:py-3">Countries Visited</h2>
                                </div>
                            </div>
                        </div>


                        {/* About Me Section */}
                        <div className="flex flex-col  w-full ">
                            <motion.h2 className="uppercase text-5xl md:text-2xl text-center font-bold text-secondary dark:text-highlight " whileHover ={{scale:1.2}}>About Me</motion.h2>
                            <p className="font-medium my-2">
                                {`Hi, I am Keyukemi Ubi. Everyone calls me Keyu or K; whichever you choose is fine.  
                                You are probably here because you are curious about me. 
                                This bio won’t tell you much, but it will give you a glimpse, at the very least.`}
                            </p>
                            <p className="font-medium my-2">
                                {`Work is essential to our human existence so I will start with that. 
                                I contribute to maintaining the structural design of society by being a software engineer. 
                                This means a few hours a day, you might find me working on something that concerns code. 
                                I am a User Interface Engineer, or what people might call Frontend Engineer, but I dabble in the backend tasks from time to time. 
                                I like to say UI Engineer (mostly because it sounds cooler) because I really care about implementing designs 
                                that make people have the most seamless and enthralling experiences.
                                `}
                            </p>
                            <p className="font-medium my-2">
                                {`
                                Keep scrolling to see the tools, languages, and frameworks I work with. 
                                `}
                            </p>
                            <motion.h3 className="text-lg font-bold text-secondary dark:text-highlight" whileHover ={{scale:1.0}}>When I am not working, Who am I?</motion.h3>
                            <p className="font-medium my-2">
                                {`A wanderer with a severe case of fernweh. I like to travel, see new places, experience new cultures, and pick up new languages.
                                    I also like to stay fit and healthy, so I am a gym rat. 
                                    I generally enjoy solo physical activities and want to take on more of these- maybe skating, who knows?
                                    My writings are my primary channel of expression, so you can find me on Medium talking about everything and anything. 
                                `}
                            </p>
                        
                            <motion.h3 className="text-lg font-bold  text-secondary dark:text-highlight " whileHover ={{scale:1.0}}>Viva la Vida</motion.h3>
                            <p className="font-medium my-2">
                                {`
                                    When I am not doing any of these, I am cuddled up in bed, watching anime or a korean series.
                                    And if you can’t find me there, I am probably reading a book or exploring my many curiosities on Youtube. 
                                `}
                            </p>
                            <p className="font-medium my-2">
                                {`
                                    Either way, Thank you for being curious about me.
                                `}
                            </p>
                            <p className="font-medium my-2">
                                {`
                                   With Love, Keyu🖤
                                `}
                            </p>
                        </div>
                        <div>
                            <h2 className="text-center text-5xl m-3 p-4 font-bold md:text-3xl sm:text-3xl xs:text-xl">Tools of my Trade</h2>                  
                            <div className="grid grid-cols-3 gap-8 sm:grid-cols-1">
                                <div className="p-4 border rounded-lg hover:border-darkshadow">
                                    <h3 className="text-xl font-bold mb-4 text-secondary dark:text-highlight">Programming Languages</h3>
                                    <ul className="list-disc list-inside">
                                        <li>JavaScript</li>
                                        <li>Typscript</li>
                                        <li>Python</li>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                    </ul>
                                </div>
                                <div className="p-4 border rounded-lg hover:border-darkshadow">
                                    <h3 className="text-xl font-bold mb-4 text-secondary dark:text-highlight">Styling Tools</h3>
                                    <ul className="list-disc list-inside">
                                        <li>Styled-components</li>
                                        <li>Tailwind CSS</li>
                                        <li>Bootstrap</li>
                                        <li>Sass</li> 
                                    </ul>
                                </div>
                                <div className="p-4 border rounded-lg hover:border-darkshadow">
                                    <h3 className="text-xl font-bold mb-4 text-secondary dark:text-highlight">Helper Tools</h3>
                                    <ul className="list-disc list-inside">
                                        <li>NPM / Yarn</li>
                                        <li>React</li>
                                        <li>Redux</li>
                                        <li>Git</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </Layout>
                <Footer/>
            </main>
        
        
        </>
    )
}

export default about;
