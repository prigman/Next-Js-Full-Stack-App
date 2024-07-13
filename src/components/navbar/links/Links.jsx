import Link from "next/link";

export default function Links() {
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
	return (
		<>
			<div>{links.map((link => (<Link key={link.title} href={link.path}>{link.title}</Link>)))}</div>
		</>
	);
}