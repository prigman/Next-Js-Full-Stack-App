import Image from 'next/image';
import styles from './home.module.css'
import Link from 'next/link';

export default function HomePage() {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.textContainer}>
					<h1 className={styles.title}>Creative Thoughts Agency</h1>
					<p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus incidunt nam, inventore aut, id repudiandae quasi sint beatae consectetur ex officia libero corrupti eaque itaque dolorem officiis cupiditate labore modi.</p>
					<div className={styles.buttons}>
						<Link href="./about"><button className={`${styles.button} ${styles.secondButton}`}>Learn More</button></Link>
						<Link href="./contact"><button className={styles.button}>Contact</button></Link>
					</div>
					<div className={styles.brands}>
						<Image src='/brands.png' alt="" fill className={styles.brandImage}></Image>
					</div>
				</div>
				<div className={styles.imageContainer}>
					<Image src='/hero.gif' alt="" fill className={styles.heroImage}></Image>
				</div>
			</div>
		</>
	);
}