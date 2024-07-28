import { RangeNumbers } from '../../../@types/commun';

type DefaultCustomProps = {
	productName: string;
	assessment: RangeNumbers<0, 6>;
	image: {
		src: string;
		alt: string;
	};
};

export type { DefaultCustomProps };
