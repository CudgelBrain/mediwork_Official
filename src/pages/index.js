import Head from "next/head";
import HomePage from "./Home/HomePage";
import SEO from "./components/SeoComponent";

export default function App() {
  return (
    <div>
      <Head>
        <SEO
          title="MEDIWORK"
          description="Description of your home page"
          image=""
          url="https://mediwork.com"
        />

        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" /> */}
      </Head>
      {/* <Script src='' strategy='lazyOnload'>

      </Script> */}
      <HomePage />
    </div>
  );
}
