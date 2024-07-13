import Link from 'next/link'

export default function NotFound() {
	return (
		<>
			<h2>The page is not found</h2>
			<p>Sorry, the page does not exist.</p>
			<Link href='/'>Return to Homepage</Link>
		</>
	);
}