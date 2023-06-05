import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import keeperImage from "../../public/images/creative_images/rmK2.png"
import TransitionEffect from "@/components/TransitionEffect";


 
const ComingSoon = ({message}) =>{
    return( 
        <div className="w-full ">
            <article className="w-full flex items-center justify-between rounded-3xl border border-headline border-solid
            bg-primary shadow-2xl p-12 mt-12 relative rounded-br-2xl">
                <div  className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2.5rem]
                    md:w-[100%] 
                 bg-headline rounded-br-2xl"/>
                <h2 className="my-2 text-9xl text-bold w-full text-headline animate-pulse md:text-6xl sm:text-4xl ">{message}</h2>
            <div>

            </div>
            </article>
            
        </div>
    )
} 

const Creative = () =>{
    return(
        <>
            <Head>
                <title>Keyukemi | Creative Corner </title>
                <meta name="description" content="What you need to know about Keyukemi Ubi"/>
            </Head>

            <TransitionEffect/>
            <main className="w-full mb-16 flex flex-col items-center justify-center min-h-screen">
                <div>
                    <ComingSoon
                        message={"Coming Soon..."}
                        img={keeperImage}
                        link={"/"}
                    />

                </div>
            </main>
        </>
    )
}

export default Creative