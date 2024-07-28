type DefaultCustomProps = {
	texts: {
		title: string;
		fontSize?: number;
		position?: 'right' | 'left';
		color?: 'white' | 'black';
	};
	product: {
		imageURL: string;
		quantity: number;
	};
	showQuantityProducts?: boolean;
	content?: string;
};

export type { DefaultCustomProps };
