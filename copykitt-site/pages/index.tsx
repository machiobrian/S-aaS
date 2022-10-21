import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import CopyKitt from '../components/copykitt'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Marketing |AI| Branding </title>
        <meta name="description" content="Generate Branding Snippets for your Products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CopyKitt/>
    </div>
  )
}

export default Home
