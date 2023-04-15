import Image from 'next/image'
import Head from 'next/head'
import Layout from '@/components/Layout'


export default function Home() {
  return (
    <>
      <Head>
        <title>Keyukemi.Dev</title>
        <meta name="description" content="Website created by Keyukemi Ubi" />
      </Head>

      <main className="text-headline w-full flex items-center min-h-screen">
        <Layout>

        </Layout>
      </main>

    </>
  )
}

