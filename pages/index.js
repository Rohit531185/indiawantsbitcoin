import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Container from '../components/container'
import Email from '../components/email'
import Content from '../components/content'
import baton from '../public/baton-light.png'
import headerBanner from '../public/header-banner.png'
import Count from '../components/Count'
export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" />
				<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
			</Head>
			<main className={styles.main}>
				<div
					className={styles.hero}
					style={{
						backgroundImage: `url(${headerBanner})`,
						backgroundPosition: 'center',
						backgroundSize: 'cover'
					}}>
					<div className={`container mx-auto ${styles.hero__inner}`}>
						<img src={baton} alt="baton" className={styles.baton} />
						<div className={styles.hero__heading}>
							WE SUPPORT CRYPTOCURRENCIES
             			</div>
						<div className={`${styles.hero__subheading} mt-4`}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor cras sit netus urna, malesuada vulputate dolor. Enim ipsum aliquam vel tempor sed leo neque aliquam sagittis.
            			</div>
					</div>
				</div>
				<div className={styles.emailContainer}>
					<Email />
				</div>
				{/* <Content /> */}
				{/* <Count /> */}
			</main>
		</div>
	)
}
