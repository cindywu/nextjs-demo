import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
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
        <textarea className="text-area" placeholder="Talk to me..."></textarea>
        <br></br>
        <Link href="/summarizer">
          <button className="btn">Submit</button>
        </Link>
      </main>
{/* 
      <footer>
        <p>Powered by GPT-3. Results may not be perfect.</p>
        <p>Made with ❤️ by Yash & Cindy.</p>
        <p>Follow @tldrpapers to see trending papers summarized.</p>
        <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
        <p>Max 50 summaries a day, contact us for more.</p>
      </footer> */}

    </div>
  )
}
