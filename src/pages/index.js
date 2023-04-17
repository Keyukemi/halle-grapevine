import Image from 'next/image'
import Head from 'next/head'
import Layout from '@/components/Layout'
import profilepix from "../../public/images/codingdev.png"
import {AnimatedHello, AnimatedWorld} from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import coolGirl from "../../public/images/creative_images/coolGirl2.png"


export default function Home() {
  return (
    <>
      <Head>
        <title>Keyukemi.Dev</title>
        <meta name="description" content="Website created by Keyukemi Ubi" />
      </Head>

      <main className="text-headline dark:text-primary w-full flex items-center min-h-screen">
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
            <div className="flex items-center justify-between w-full lg:flex-col">
              <div className='w-1/2 md:w-full'>
                <Image src={profilepix} alt="" className='lg-hidden md:inline-block md:w-full'
                priority sizes="(max-width:768px) 100vw, 
                    (max-width:1200px) 50vw, 50vw"/>
              </div>
              <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
                <AnimatedHello text="Hi there," 
                className='xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'/>
                <AnimatedWorld text="Welcome to my world 🌍 " 
                className='xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'/>
                {/* <span className='text-5xl animate-spin-slow'>🌍</span> */}

                <p className='my-4 font-medium text-lg md:text-s sm:text-xs'>I am 
                <span className='text-secondary dark:text-highlight'> Keyukemi Ubi</span>,
                 but everyone calls me <span className='text-secondary dark:text-highlight'> Keyu</span>.
                  I like a lot of things; travelling, good food, movies and reading. But most of all I like to build beautiful and useful things. 
                </p>
                
                <div className='flex item-center self-start mt-2 lg:self-center'>
                  <Link href="/Keyu_SWE_RESUME.pdf" target={'blank'}
                    className='flex items-center bg-secondary text-headline dark:text-primary 
                    md:text-s sm:text-xs md:px-4 dark:bg-highlight p-2.5 px-7 rounded-lg text-2xl font-semibold hover:bg-transparent hover:text-headline
                    border-2 border-solid border-transparent hover:border-headline hover:dark:border-primary hover:dark:bg-transparent'  download={true}
                  >Resume <LinkArrow className="ml-1 w-6"/>
                  </Link>
                  <Link href="mailto:keyukemi.ku@gmail.com" target={'blank'}
                    className='ml-4 text-2xl font-semibold capitalize dark:text-primary text-headline underline p-2.5 flex items-center 
                    md:text-s sm:text-xs md:px-4
                    border-2 border-solid border-transparent hover:border-headline rounded-lg px-7 hover:no-underline hover:dark:border-primary '
                  >
                    Contact</Link>
                </div>
              </div>
            </div>
        </Layout>
        <HireMe />
        <div className='absolute right-8 -bottom-20 inline-block md:hidden lg:hidden'>
          <Link href="/"><Image src={coolGirl} alt='A lady in dreadlock, headphones and glasses' 
          className='priority w-full h-auto rounded-full opacity-50'/></Link>
          
        </div>
      </main>

    </>
  )
}

