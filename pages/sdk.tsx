import { Text } from '@chakra-ui/react'
import Head from 'next/head'
import styles from 'shared/styles/Home.module.css'


export default function Sdk() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sdk</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className={styles.main}>
        <Text
        fontSize="27px"
        color="#fff000"
        >
          Sdk
        </Text>
      </main>
    </div>
  )
}