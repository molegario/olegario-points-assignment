import Head from 'next/head';
import Layout from '../components/layout/layout'
import '../styles/globals.css'
import { PrimeReactProvider } from 'primereact/api'

function MyApp({ Component, pageProps }) {
  return <PrimeReactProvider>
    <Layout>
      <Head>
          <title>Tax Calculator</title>
          <meta name='description' content="Calulate how your income was taxed in a given year.  Now supporting 2019 - 2022." />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Component {...pageProps} />
    </Layout>
  </PrimeReactProvider>
}

export default MyApp
