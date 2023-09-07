import { formatMoney } from "@/utils";

type ProductItemInfoProps = {
	name: string;
	price: number;
};

export const ProductItemInfo = (props: ProductItemInfoProps) => {
	const { name, price } = props;

	return (
		<div className="relative bg-white pt-3">
			<h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
				{name}
			</h3>

			<p className="mt-2">
				<span className="sr-only"> Regular Price </span>

				<span className="tracking-wider text-gray-900"> {formatMoney(price / 100)}</span>
			</p>
		</div>
	);
};
