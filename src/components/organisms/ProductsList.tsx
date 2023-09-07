import { ProductItem } from "../molecules/ProductItem";
import { type Product } from "@/types/product";

type ProductsListProps = {
	products: Product[];
};

export const ProductsList = (props: ProductsListProps) => {
	const { products } = props;
	return (
		<section>
			<div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
				<ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" data-testid="products-list">
					{products.map((product) => (
						<ProductItem key={product.id} product={product} />
					))}
				</ul>
			</div>
		</section>
	);
};
