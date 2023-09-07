import { ProductsList } from "@/components/organisms/ProductsList";
import { type Product } from "@/types/product";

const products: Product[] = [
	{
		id: 1,
		name: "Koszuleczka",
		price: 1234,
		image: {
			src: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
			alt: "Koszulka",
		},
	},
	{
		id: 2,
		name: "Buciki",
		price: 1234,
		image: {
			src: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80",
			alt: "Buty",
		},
	},
	{
		id: 3,
		name: "Słuchaweczki",
		price: 1234,
		image: {
			src: "https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
			alt: "Słuchawki",
		},
	},
	{
		id: 4,
		name: "Robocik",
		price: 1234,
		image: {
			src: "https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80",
			alt: "Robot",
		},
	},
];

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<ProductsList products={products} />
		</main>
	);
}
