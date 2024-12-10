import styles from './footer.module.css'


export default function Footer() {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.logo}>Way to Future</div>
				<div className={styles.text}>
					Way to Future Creative Thoughts agency @ All Rights Reserved
				</div>
			</div>
		</>
	);
}