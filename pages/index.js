import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  let numb = Math.floor(Math.random() * (50 - 0)) + 0;
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <p>{numb}</p>
      </main>
      <ul>
      <li>
        <Link href="./staticPage" as="./staticPage">
          <a>To firstPage</a>
        </Link>
      </li>
      <li>
        <Link href="./secondPage" as="./secondPage">
          <a>To secondPage</a>
        </Link>
      </li>
    </ul>

    </div>
  )
}
