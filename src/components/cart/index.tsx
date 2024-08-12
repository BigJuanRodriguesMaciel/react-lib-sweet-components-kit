import { FC } from 'react';
import { DefaultCustomProps } from './types';
import { ShoppingBag } from 'react-lib-icons-component';
import './styles.modules.scss';

export const Cart: FC<DefaultCustomProps> = ({}) => {
	return (
		<div
			id='cart'
			className='bg-pink position-absolute p-7 pt-10'>
			<div className='quantity border-radius-full display-flex centralize'>
				<span className='fg-white font-size-12'>10</span>
			</div>
			<div className='display-flex centralize mt-3'>
				<button>
					<ShoppingBag
						fill={'#fff'}
						height={'24px'}
						width={'24px'}
					/>
				</button>
			</div>
		</div>
	);
};
