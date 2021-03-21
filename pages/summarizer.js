import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'

export default function Summarizer() {
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
        <textarea className="text-area">
          Hello, I'm a little computer. I have some important work to do. It's very important that you don't touch me, because I am doing very important work. What kind of work do you want me to do? You want me to write your name? OK, what's your name? What's your name? OK, I'll write your name.
        </textarea>
        <br></br>
        <Link href="/">
          <button className="btn">Try again</button>
        </Link>
      </main>
    </Layout>
  )
}