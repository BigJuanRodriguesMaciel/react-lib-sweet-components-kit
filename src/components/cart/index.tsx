import { FC } from 'react';
import { DefaultCustomProps } from './types';
import { ShoppingBag } from 'react-lib-icons-component';
import { Link } from 'react-router-dom';

import './styles.modules.scss';

export const Cart: FC<DefaultCustomProps> = ({ cartItemsQuantity, cartLink }) => {
	return (
		<div
			id='cart'
			className='bg-pink position-absolute p-7 pt-10'>
			<div className='quantity border-radius-full display-flex centralize'>
				<span className='fg-white font-size-16 font-weight-bold'>{cartItemsQuantity}</span>
			</div>
			<div className='display-flex centralize mt-1'>
				<Link to={cartLink}>
					<ShoppingBag
						fill={'#fff'}
						height={'24px'}
						width={'24px'}
					/>
				</Link>
			</div>
		</div>
	);
};
