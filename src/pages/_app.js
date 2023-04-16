import Footer from '@/components/Footer'
import NavBar from '@/components/Navbar'
import '@/styles/globals.css'
import { Roboto_Slab } from 'next/font/google'
import Head from 'next/head'

const robotos = Roboto_Slab({
  subsets: ['latin'],
  variable: "--font-robotos",
})


export default function App({ Component, pageProps }) {
    return(
      <>
      <Head>
        <title>Keyukemi.Dev</title>
        <meta name="description" content="" />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel="icon" href="/kklogo.ico"/>

      </Head>
      <main className={`${robotos.variable} font-robotos bg-primary w-full min-h-screen
       dark:bg-headline`}>
        <NavBar />
        <Component {...pageProps} />
        <Footer/>
      </main>

    </>
      
    )
}