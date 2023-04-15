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

      <main className="text-headline w-full flex items-center min-h-screen">
        <Layout className='pt-0'>
            <div className="flex items-center justify-between w-full">
              <div className='w-1/2'>
                <Image src={profilepix} alt="" className=''/>
              </div>
              <div className='w-1/2 flex flex-col items-center self-center'>
                <AnimatedHello text="Hi,there." />
                <p className='my-4 font-medium text-lg'>I am 
                <span className='text-2xl text-secondary'> Keyukemi Ubi</span>,
                 but everyone calls me <span className='text-2xl text-secondary'> Keyu</span>.
                  I like a lot of things; travelling, good food, movies and reading. But most of all I like to build beautiful and useful things. 
                </p>
                <AnimatedWorld text="Welcome to my world!"/>
                <div className='flex item-center self-start mt-2'>
                  <Link href="/Keyu_SWE_RESUME.pdf" target={'blank'}
                    className='flex items-center bg-headline text-secondary p-2.5 px-7 rounded-lg text-2xl font-semibold hover:bg-highlight  hover:text-headline
                    border-2 border-solid border-transparent hover:border-headline' download={true}
                  >Resume <LinkArrow className="ml-1 w-6"/>
                  </Link>
                  <Link href="mailto:keyukemi.ku@gmail.com" target={'blank'}
                    className='ml-4 text-2xl font-semibold capitalize text-headline underline p-2.5 flex items-center
                    border-2 border-solid border-transparent hover:border-headline rounded-lg px-7 hover:no-underline'
                  >
                    Contact</Link>
                </div>
              </div>
            </div>
        </Layout>
        <HireMe />
        <div className='absolute right-8 -bottom-20 inline-block'>
          <Link href="/"><Image src={coolGirl} alt='A lady in dreadlock, headphones and glasses' className='w-full h-auto rounded-full opacity-50'/></Link>
          
        </div>
      </main>

    </>
  )
}

