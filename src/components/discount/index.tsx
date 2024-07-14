import { FC } from 'react';
import './styles.modules.scss';
import { DefaultCustomProps } from './types';

export const Discount: FC<DefaultCustomProps> = ({ discount }) => {
	return (
		<span className='discount border-radius-8 poppins-bold font-size-14 pt-1 pb-1 pl-3 pr-3 position-absolute fg-white'>
			-{discount}%
		</span>
	);
};
