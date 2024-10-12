import { FC } from 'react';
import { DefaultCustomProps } from './types';
import { Logo } from './components';
import { Menu } from './components/menu';
import { Separator } from 'src/components/separator';
import { COLORS } from 'src/_const';

export const DesktopFooter: FC<DefaultCustomProps> = ({ routesMenu, routesProducts, socialMedias }) => {
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
							<Menu routes={routesMenu} />
						</div>
						<Separator {...separatorDefaultStyles} />
					</div>
					<div className='col-md-4 display-flex centralize'>
						<div>
							<h3 className='font-size-16 poppins-semibold text-uppercase pl-20 fg-white'>Products</h3>
							<Menu routes={routesProducts} />
						</div>
						<Separator {...separatorDefaultStyles} />
					</div>
					<div className='col-md-2'>
						<h3 className='font-size-16 poppins-semibold text-uppercase fg-white'>Social network</h3>
						<div className='social display-flex'>
							{socialMedias.map(social => {
								return (
									<div
										key={social.link}
										className='mr-5'>
										<a
											href={social.link}
											target='_blank'>
											{social.icon}
										</a>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
