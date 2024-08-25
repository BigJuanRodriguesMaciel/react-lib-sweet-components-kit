import { FC } from 'react';
import { DefaultCustomProps } from './types';
import './styles.modules.scss';

export const Price: FC<DefaultCustomProps> = ({ symbol = '$', price }) => {
	return (
		<div className='display-flex poppins-bold'>
			<div className='display-flex flex-direction-column justify-end'>
				<span className='mr-2 font-size-20 font-weight-bold mr-3 fg-pink'>{symbol}</span>
			</div>
			<strong className='font-size-24 font-weight-bold'>{price}</strong>
		</div>
	);
};
