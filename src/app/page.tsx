import Link from "next/link";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<header>
				<nav>
					<ul>
						<li>
							<Link href="/products">Products</Link>
						</li>
					</ul>
				</nav>
			</header>
		</main>
	);
}
