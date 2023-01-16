import Head from 'next/head'
import Image from 'next/image'
import Copyright from '../components/Copyright/Copyright'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Еріка - персональна сторінка</title>
        <meta name="description" content="Персональна сторінка Еріки" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <section className={styles.section}>
          <div className={styles.image_wrapper}>
            <Image
              src={'/erika_bw.jpg'}
              width={508}
              height={508}
              className={styles.start_photo}
              alt='Фото Еріки'
            />
          </div>

          <div className={styles.start_text}>
            <h3>
              Доброго дня!
            </h3>
            <h1>
              Я - Еріка
            </h1>
            <p>
              Ви на моїй майбутній сторінці. Зараз вона у процесі розробки. Але незабаром тут буде цікаво. З нетерпінням чекаю зустрічі з вами!
            </p>
          </div>
        </section>

      </main>

      <footer className={styles.footer}>
        <Copyright />
      </footer>
    </div>
  )
}
