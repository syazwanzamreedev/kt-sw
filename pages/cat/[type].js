import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'

import styles from '../../styles/Home.module.css'

const Card = ({ key, text }) => {
  return <a key={key}>{text}</a>
}

const Type = ({ type: typeFromInitialProps, data: dataFromInitialProps }) => {
  const [type, setType] = useState(typeFromInitialProps)
  const [data, setData] = useState(dataFromInitialProps)

  return (
    <div className={styles.container}>
      <Head>
        <title>Star Wars</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {
          data.map(d => {
            const container = type === "films" ? <Card key={d.title} text={d.title} />
              : type === "people" ? <Card key={d.name} text={d.name} />
              : <Card key={d.name} text={d.name} />

            return container
          })
        }
      </main>

      <Link href="/"><a>Back</a></Link>

      <footer className={styles.footer}>
        <a>SZ</a>
      </footer>
    </div>
  )
}

Type.getInitialProps = async ({ req, res, query }) => {
  const { type } = query
  const page = 0

  const response = await axios.get(`https://swapi.dev/api/${type}`)
      .then(res => res)
      .catch(err => err)

  const data = response.data.results

  return ({
    type: query.type,
    data: data
  })
}

export default Type