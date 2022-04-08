import React from 'react'
import {useRouter} from "next/router"
import Link from 'next/link'
import articleStyles from '../../../styles/Article.module.css'

const Article = ({article}) => {
    const router = useRouter()
    let {id} = router.query
    const {title} = router.query
    return (
    <>
        {article.id === 1 ? (null
        ) : (
            <Link href="/article/[id]" as={`/article/${id - 1}`}>
                <a className={articleStyles.card}>
                    <h3>previous</h3>
                </a>
            </Link>
        )}
        <div className={articleStyles.card}>
            <h1>article no. {article.id}</h1>
            <h2>Title: {article.title}</h2>
            <div>{article.body}</div>
        </div>
        <Link href="/article/[id]" as={`/article/${id +++ 1}`}>
            <a className={articleStyles.card}>
                <h3>next</h3>
            </a>
        </Link>
    </>
  )
}

export const getServerSideProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const article = await res.json()
    return {
        props: {
            article
        }
    }
}

export default Article