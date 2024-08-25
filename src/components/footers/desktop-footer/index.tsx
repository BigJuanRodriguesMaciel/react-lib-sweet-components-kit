import { FC } from 'react';
import { DefaultCustomProps } from './types';
import { Logo } from './components';
import { Menu } from './components/menu';
import { Separator } from 'src/components/separator';
import { COLORS } from 'src/_consts';
import { Linkedin, Instagram } from 'react-lib-icons-component';

const routesMenuMock = [
	{
		link: '/',
		text: 'Home',
	},
	{
		link: '/',
		text: 'About us',
	},
	{
		link: '/',
		text: 'Certificates',
	},
	{
		link: '/',
		text: 'Shipping',
	},
	{
		link: '/',
		text: 'Payment',
	},
];

const routesProductsMock = [
	{
		link: '/',
		text: 'Ice cream',
	},
	{
		link: '/',
		text: 'Donuts',
	},
	{
		link: '/',
		text: 'Makaruns',
	},
	{
		link: '/',
		text: 'CheeseCake',
	},
	{
		link: '/',
		text: 'Cakes',
	},
];

export const DesktopFooter: FC<DefaultCustomProps> = ({}) => {
	const separatorDefaultStyles = {
		style: {
			backgroundColor: COLORS.GREY,
			height: '100%',
			width: '1px',
		},
	};
	return (
		<div className='bg-green'>
			<div className='container pt-20 pb-20 '>
				<div className='row'>
					<div className='col-md-2'>
						<Logo logo={''} />
					</div>
					<div className='col-md-4 display-flex centralize'>
						<div>
							<h3 className='font-size-16 poppins-semibold text-uppercase pl-20 fg-white'>Menu</h3>
							<Menu routes={routesMenuMock} />
						</div>
						<Separator {...separatorDefaultStyles} />
					</div>
					<div className='col-md-4 display-flex centralize'>
						<div>
							<h3 className='font-size-16 poppins-semibold text-uppercase pl-20 fg-white'>Products</h3>
							<Menu routes={routesProductsMock} />
						</div>
						<Separator {...separatorDefaultStyles} />
					</div>
					<div className='col-md-2'>
						<h3 className='font-size-16 poppins-semibold text-uppercase fg-white'>Social network</h3>
						<div className='social'>
							{/* <Linkedin
								fill={'#fff'}
								height={'50px'}
								width={'50px'}
							/>
							<Instagram
								fill={'#fff'}
								height={'50px'}
								width={'50px'}
							/> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
