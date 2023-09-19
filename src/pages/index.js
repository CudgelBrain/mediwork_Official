import Head from 'next/head'
import HomePage from './Home/HomePage'

export default function App() {
  return (
    <div>
      <Head>
        <title>MEDIWORK</title>
        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" /> */}
      </Head>
      {/* <Script src='' strategy='lazyOnload'>

      </Script> */}
      <HomePage/>
    </div>
  )
}
