import '@/styles/globals.css'
import { Roboto_Slab } from 'next/font/google'

const robotoslab = Roboto_Slab({
  subsets: ['latin'],
  variable: "--font-roboto"
})


export default function App({ Component, pageProps }) {
  <main className={`${robotoslab.variable} font-sans`}> 
    return <Component {...pageProps} />
  </main>
  
}