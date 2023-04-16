import * as React from "react";
import {motion} from "framer-motion"; 

const helloStart = {
    initial: {
        opacity:1,
    },
    animate:{
        opacity: 1,
        transition:{
            delay: 0.5,
            staggerChildren: 0.08,
        }
    }
}

const wordSlide = {
    initial: {
        opacity:0,
        y: 50,
    },
    animate:{
        opacity: 1,
        y: 0,
        transition:{
            delay: 1,
        }
    }
}

const welcomeStart = {
    initial: {
        opacity:0,
        y: 100,
    },
    animate:{
        opacity: 1,
        y: 0,
        transition:{
            delay: 1.5,
        }
    }
}




export const AnimatedHello = ({text, className=""}) => {
   return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-left overflow-hidden">
        
        <motion.h1 className={`inline-block w-full text-headline font-bold text-6xl ${className}`}
        variants={helloStart}
        initial="initial"
        animate="animate"

        >
            {
                text.split(" ").map((word, index)=>
                    <motion.span key={word+'-'+index} className="inline-block"
                    variants={wordSlide}
                    >
                        {word}&nbsp;
                    </motion.span>
                )
            }
        </motion.h1>
    </div>
   )
};



export const AnimatedWorld = ({text, className=""}) => {
    return (
     <div className="w-full mx-auto py-2 flex items-center justify-center text-left overflow-hidden">
         <motion.h1 className={`inline-block w-full text-headline font-bold text-2xl ${className}`}
          variants={welcomeStart}
          initial="initial"
          animate="animate"
         >
            {
                text.split(" ").map((word, index)=>
                    <motion.span key={word+'-'+index} className="inline-block"
                    variants={wordSlide}
                    >
                        {word}&nbsp;
                    </motion.span>
                )
            }
         </motion.h1>
     </div>
    )
 };

