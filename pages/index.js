import Head from 'next/head'
import Image from 'next/image'
import ArticleList from '../components/ArticleList'
import styles from '../styles/Layout.module.css'
import { useState, useEffect } from 'react'

export default function Home( {articles} ) {

  const [echo, setEcho] = useState({
    hello:true,
  });

  return (
      <div className={styles.grid}>
          <button
          className={styles.container}
          onClick={() => setEcho( { ...echo, hello:!echo.hello } )}>
            {echo.hello === true ? (<div>lorem</div>) : (<div>ipsum</div>)}
          </button>
          

        <ArticleList articles={articles}/>
      </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch (`https://jsonplaceholder.typicode.com/posts?_limit=15`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}