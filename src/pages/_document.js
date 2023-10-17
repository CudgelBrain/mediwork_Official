import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <link rel="stylesheet" href='/public/svg/one/doctors-styles.css'/>
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
