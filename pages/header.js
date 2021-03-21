import Image from 'next/image'

export default function Header() {
  return (
    <>
      <Image
        src="/fax-logo.png"
        height={144} 
        width={144} 
        alt="fax logo"
      />
      <h1 className="title">tl;dr papers</h1>
      <p className="sub-title">science abstracts a second grader can understand</p>
    </>    
  )
}