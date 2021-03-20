import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>tl;dr papers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          <img src="/fax-logo.png" alt="" />
          <p>tl;dr papers</p>
        </h1>
        <p className="sub-title">science abstracts a second grader can understand</p>
        <textarea placeholder="Talk to me..."></textarea>
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

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: white;
          background-image: linear-gradient(315deg, #045de9 0%, #09c6f9 74%);
        }

        .btn {
          background: hsl(309, 80%, 66%);
          border: none;
          color: white;
          padding: 1em 2em;
          border-radius: 4px;
        }

        .btn:hover, .btn:focus {
          background-color: hsl(309, 80%, 50%);
          box-shadow: 0 0 5px 0 hsl(309, 80%, 30%);
        }

        textarea {
          width: 100%;
          height: 200px;
          border-radius: 8px;
          padding: 1em;
          border: 4px solid #ee63da;
          font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 200px;
          margin: auto;
          width: 50%;
          padding: 10px;
          justify-content: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
