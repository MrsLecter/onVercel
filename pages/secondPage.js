import Link from 'next/link'

export async function getServerSideProps() {
  // Fetch data from external API
  // const res = await fetch(`https://.../data`)
  // const data = await res.json()

  // Pass data to the page via props
  return { props: {
     serverSide: (new Date()).toISOString(),
     } }
}


export default function SecondPage(props) {
    return (<div>
      <div>Second page</div>
      <h1>{props.serverSide}</h1>
      <h2>Hello</h2>
      <ul>
        <li>
          <Link href="./index" as="./index">
            <a>To home page</a>
          </Link>
        </li>
      </ul>

</div>
    )}
