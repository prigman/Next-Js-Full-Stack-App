"use client"

import { useState } from 'react';
import styles from './links.module.css'
import Navlink from "./navlink/Navlink";

const links = [
	{
		title: 'Homepage',
		path: '/',
	},
	{
		title: 'About',
		path: '/about',
	},
	{
		title: 'Contact',
		path: '/contact',
	},
	{
		title: 'Blog',
		path: '/blog',
	},
]

export default function Links() {
	const [open,setOpen] = useState(false)
	const session = true
	const isAdmin = false
	return (
		<>
			<div className={styles.container}>
				<div className={styles.links}>
					{links.map((link => (<Navlink key={link.title} item={link}>{link.title}</Navlink>)))}
					{
						session ? (
							<>
								{isAdmin && <Navlink item={{title: "Admin", path:"/admin"}} />}
								<button className={styles.logout}>Logout</button>
							</>
						) : (
							<Navlink item={{title: "Login", path: "/login"}} />
						)
					}
				</div>
				<button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button>
				{ 
					open && <div className={styles.mobileMenu}>
						{links.map((link) => (
							<Navlink item={link} key={link.title} />
						))}
					</div>
				}
			</div>
		</>
	);
}