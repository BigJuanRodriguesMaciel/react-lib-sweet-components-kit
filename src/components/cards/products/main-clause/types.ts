import { RangeNumbers } from '../../../../@types/common';

type DefaultCustomProps = {
	highlighted?: string;
	title: string;
	tags: Array<string>;
	assessment: RangeNumbers<0, 6>;
	price: number;
	image: {
		url: string;
		alt: string;
	};
};

export type { DefaultCustomProps };
