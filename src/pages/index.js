import Image from 'next/image'
import Head from 'next/head'
import Layout from '@/components/Layout'
import profilepix from "../../public/images/codingdev.png"
import {AnimatedHello, AnimatedWorld} from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'


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
                  I like a lot of things; to travel, eat and read. But most of all I like to create and build beautiful and useful things. 
                </p>
                <AnimatedWorld text="Welcome to my world!"/>
                <div className='flex item-center self-start mt-2'>
                  <Link href="/Keyu_SWE_RESUME.pdf" target={'blank'}
                    className='flex items-center bg-headline text-primary p-2.5 px-7 rounded-lg text-2xl font-semibold hover:bg-secondary
                    border-2 border-solid border-transparent hover:border-headline' download={true}
                  >Resume <LinkArrow className="ml-1 w-6"/>
                  </Link>
                  <Link href="mailto:keyukemi.ku@gmail.com" target={'blank'}
                    className='ml-4 text-2xl font-semibold capitalize text-headline underline p-2.5 flex items-center
                    border-2 border-solid border-transparent hover:border-secondary rounded-lg px-7 hover:no-underline'
                  >
                    Contact</Link>
                </div>
              </div>
            </div>
        </Layout>
      </main>

    </>
  )
}

