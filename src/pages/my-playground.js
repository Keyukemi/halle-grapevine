import React from "react";
import Head from "next/head";
import Footer from "@/components/Footer";
import TransitionEffect from "@/components/TransitionEffect";
import Trips from "@/components/Trips";




 
const ComingSoon = ({message}) =>{
    return( 
        <>
            <div className="text-headline dark:text-primary min-h-screen">
                <Trips/>
                <div className="mt-20">
                    <Footer/>
                </div>
            </div>
        </>
    )
} 

const Playground = () =>{
    return(
        <>
            <Head>
                <title>Keyukemi | Playground </title>
                <meta name="description" content="My hobbies, interests and things that excite me"/>
            </Head>

            <TransitionEffect/>
            <main className="w-full mb-20 flex flex-col items-center justify-center min-h-screen">
                <div className="text-headline dark:text-primary">
                    <div>
                    <Trips/>
                    </div>
                </div>
                
            </main>
            <Footer/>
        </>
    )
}

export default Playground