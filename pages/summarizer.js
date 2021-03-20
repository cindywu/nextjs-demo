import Link from 'next/link'

export default function Summarizer() {
  return (
    <>
      <h1>Feed me an abstract</h1>
      <textarea></textarea>
      <br></br>
      <button>Summarize</button>
      <h2>
        <Link href="/">
          <a>Take me back</a>
        </Link>
      </h2>
    </>
  )
}