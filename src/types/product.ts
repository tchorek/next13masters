export type Product = {
	id: string | number;
	name: string;
	price: number;
	image: {
		src: string;
		alt: string;
	};
};
