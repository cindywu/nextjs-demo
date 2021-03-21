import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'
import Footer from './footer'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>tl;dr papers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Image
          src="/fax-logo.png"
          height={144} 
          width={144} 
          alt="fax logo"
        />
        <h1 className="title">tl;dr papers</h1>
        <p className="sub-title">science abstracts a second grader can understand</p>
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
