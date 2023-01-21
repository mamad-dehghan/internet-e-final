import Head from 'next/head'
import {Inter, Courier_Prime} from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link";

const inter = Inter({subsets: ['latin']})
const courierPrime = Courier_Prime({subsets: ['latin'], weight:"400"})

export default function Home() {
    return (
        <>
            <Head>
                <title>Home Page</title>
                <meta name="viewport"
                      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={styles.main}>
                <div className={styles.description}>
                        <Link href="/database" className={courierPrime.className}>
                            go to database
                        </Link>
                        <Link href="/signin" className={courierPrime.className}>
                            go to signin page
                        </Link>

                    <div >
                        <span className={styles.thirteen}>
                            By Seyed Mohammad Dehghan
                        </span>
                    </div>
                </div>

                <div className={styles.center}>
                    <h1 className={inter.className}>Final project</h1>
                </div>

                <div className={styles.grid}>
                    <a
                        href="https://github.com/mamad-dehghan/internet-e-final"
                        className={styles.card}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 className={inter.className}>
                            Github <span>-&gt;</span>
                        </h2>
                        <p className={inter.className}>
                            Find frontend resource code in there
                        </p>
                    </a>

                    <a
                        href="https://codesandbox.io/s/internet-final-c8cdeo"
                        className={styles.card}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 className={inter.className}>
                            Codesandbox <span>-&gt;</span>
                        </h2>
                        <p className={inter.className}>
                            Find backend resource code in there
                        </p>
                    </a>
                </div>
            </main>
        </>
    )
}
