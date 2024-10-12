import { FC } from 'react';
import { DefaultCustomProps } from './types';
import { Search } from 'react-lib-icons-component';
import { Cart } from 'src/components/cart';
import './styles.modules.scss';
import { HeaderNavigation } from './components/header-navigation';

export const DesktopHeader: FC<DefaultCustomProps> = ({ routes, logoURL, cartItemsQuantity, cartLink }) => {
	return (
		<div
			id='desktop-header'
			className='h-100 default-box-shadow '>
			<div className='container'>
				<div className='display-flex justify-space-between'>
					<img
						style={{ width: '200px' }}
						src={logoURL}
						alt=''
					/>{' '}
					<HeaderNavigation routes={routes} />
					<div className='position-relative'>
						<div className='h-100 position-absolute display-flex centralize'>
							<button>
								<Search
									fill={'#fff'}
									height={'30px'}
									width={'30px'}
								/>
							</button>
						</div>
						<div className='w-100 h-100'>
							<Cart
								cartItemsQuantity={cartItemsQuantity}
								cartLink={cartLink}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
