import Link from 'next/link'

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  // const res = await fetch('https://.../posts')
  // const posts = await res.json()

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      num: Math.floor(Math.random() * (50 - 0)) + 0,
      date: (new Date()).toISOString(),
    },
  }
}



export default function StaticPage(props) {
    return (
    <div>
        <h1>First page</h1>
          <Link href="./index" as="./index">
            <a>To home page</a>
          </Link>
      <h3>{props.num}</h3>
      <h3>-----hhhhh------</h3>
      <h4>{props.date}</h4>
    </div>
      )}