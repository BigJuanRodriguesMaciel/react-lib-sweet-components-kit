import { FC } from 'react';
import { DefaultCustomProps } from './types';

export const ProductLabelQuantity: FC<DefaultCustomProps> = ({ quantity }) => {
	return (
		<div className='p-3 border-radius-5 bg-pink w-95 display-flex centralize'>
			<span className='poppins-light font-size-12 fg-white '>{quantity} products</span>
		</div>
	);
};
