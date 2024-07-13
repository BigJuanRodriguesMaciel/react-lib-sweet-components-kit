import { RangeNumbers } from '../../../@types/commun';

type DefaultCustomProps = {
	highlighted?: string;
	title: string;
	tag: string;
	assessment: RangeNumbers<0, 6>;
	price: number;
	image: {
		url: string;
		alt: string;
	};
};

export type { DefaultCustomProps };
