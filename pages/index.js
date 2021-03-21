import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'
import Footer from './footer'
import Header from './header'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>tl;dr papers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header/>
        <textarea className="text-area" placeholder="Enter some science 🧬"></textarea>
        <br></br>
        <Link href="/summarizer">
          <button className="btn">Submit</button>
        </Link>
        <div className="footer">
          <Footer/>
        </div>
      </main>
    </Layout>
  )
}
