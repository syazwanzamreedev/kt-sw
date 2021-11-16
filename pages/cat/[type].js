import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'

import styles from '../../styles/Home.module.css'

const Card = ({ key, text }) => {
  return <a style={{ paddingTop: "10px" }} key={key}>{text}</a>
}

const Type = ({
  type: typeFromInitialProps,
  data: dataFromInitialProps,
  totalPages: totalPagesFromInitialProps
}) => {
  const [type, setType] = useState(typeFromInitialProps)
  const [data, setData] = useState(dataFromInitialProps)
  const [totalPages, setTotalPages] = useState(totalPagesFromInitialProps)

  useEffect(() => {
    setData(dataFromInitialProps)
  }, [dataFromInitialProps])

  return (
    <div className={styles.container}>
      <Head>
        <title>Star Wars</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Star Wars</h1>
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
        <div style={{ paddingBottom: "20px" }}>
          {
            totalPages > 1 && [...Array(totalPages)].map((x,i) => {
              const as = `/cat/${type}?page=${i+1}`
              return <Link href={as}><a style={{ display: "inline", padding: "5px" }}>{i+1}</a></Link>
            })
          }
          <Link href="/"><a style={{ display: "inline", padding: "5px"}}>Back</a></Link>
        </div>
      <footer className={styles.footer}>
        <a>SZ</a>
      </footer>
    </div>
  )
}

Type.getInitialProps = async ({ req, res, query }) => {
  const { type, page } = query

  const response = await axios.get(`https://swapi.dev/api/${type}/?page=${!page ? 1 : page}`)
      .then(res => res)
      .catch(err => err)

  const data = response.data.results
  const totalPages = Math.ceil(response.data.count/10)

  return ({
    type: query.type,
    data: data,
    totalPages: totalPages
  })
}

export default Type
