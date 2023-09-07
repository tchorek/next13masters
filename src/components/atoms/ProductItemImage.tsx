import Image from "next/image";

type ProductItemImageProps = {
	src: string;
	alt: string;
};

export const ProductItemImage = (props: ProductItemImageProps) => {
	const { src, alt } = props;

	return (
		<Image
			src={src}
			alt={alt}
			className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
			width={280}
			height={450}
		/>
	);
};
