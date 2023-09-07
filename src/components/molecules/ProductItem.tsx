import { ProductItemImage } from "../atoms/ProductItemImage";
import { ProductItemInfo } from "../atoms/ProductItemInfo";
import { type Product } from "@/types/product";

type ProductItemProps = {
	product: Product;
};

export const ProductItem = ({ product }: ProductItemProps) => {
	const { name, price, image } = product;

	return (
		<li>
			<a href="#" className="group block overflow-hidden">
				<ProductItemImage src={image.src} alt={image.alt} />
				<ProductItemInfo name={name} price={price} />
			</a>
		</li>
	);
};
