import Image from 'next/image';
import Head from 'next/head';
import profilepix from "../../public/images/creative_images/coolgirl101.png";
import TransitionEffect from '@/components/TransitionEffect';
import { MdOutgoingMail } from "react-icons/md";
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>keyukemi.dev</title>
        <meta name="description" content="Portfolio Website created by Keyukemi Ubi" />
      </Head>
      
      <TransitionEffect />
      <main className="text-headline dark:text-primary w-full flex items-center justify-center min-h-screen">
        <div className="p-5 flex flex-col items-center mx-auto w-full ">
          <div className="bg-neutral-600 rounded-full ">
            <Image
              height={300}
              width={300}
              className="object-cover w-fit rounded-full"
              src={profilepix}
              alt=""
            />
          </div>
          <h1 className="text-6xl text-center my-3 btn-shine-light ">
            Keyukemi Ubi
          </h1>

          <h3 className="text-xl text-center my-3 ">
            Sofware Developer| UI Engineer| Technical Writer| Part-time Adult
          </h3>

          <p className="lg:max-w-lg text-center">
            Hi there, Welcome to my world. I like a lot of things- travelling, reading, movies, good food.
            But most of all, I like to build beautiful and useful software.
          </p>

          {/* Icons Container */}
          <div className="flex p-2 mt-4">
            <Link className="flex items-center justify-center" href="mailto:almostvintagebykeyu@gmail.com">
                <MdOutgoingMail 
                className="bg-secondary text-headline text-xl p-2.5 px-7 rounded-lg dark:text-primary
                dark:bg-highlight hover:dark:border-primary hover:dark:bg-transparent hover:border-headline
                justify-center w-24 h-auto ml-3 border-solid border-2 hover:bg-transparent hover:text-headline"/>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
