import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'



export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const posts = await res.json()

  // Pass data to the page via props
  return { props: { posts } }
}



export default function Home({posts}) {
  return (
    <div className={styles.container}>
      <Head>
        <title> Next Data Fetching Demo</title>
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to NextJS Demo by ZZT
        </h1>

    <div className={styles.box}>
       {
        posts.map(post=>(
        <div key = {post.id}>
          <div className={styles.main}>
            <div className={styles.card}>
                <h2> {post.title}</h2>
                <p>{post.body}</p>
            </div>
          </div>
          </div>))
       }  
    </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
