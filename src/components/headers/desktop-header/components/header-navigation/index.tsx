import { FC } from 'react';
import { MENU_NAV } from '../../const';

export const HeaderNavigation: FC = ({}) => {
	return (
		<div className='display-flex centralize'>
			<nav>
				<ul className='display-flex justify-content-between '>
					{MENU_NAV.map(item => {
						return (
							<li
								className={`font-size-14 poppins-regular ml-10 mr-10 fg-white position-relative ${item.subMenu && 'sub-menu'}`}
								key={item.to}>
								<a
									href={item.to}
									className='fg-white'>
									{item.label}
								</a>
								{item.subMenu && (
									<nav className='display-none position-absolute p-5 bg-white border-radius-4'>
										<ul>
											{item.subMenu.map(subMenuItem => (
												<li
													className='fg-white font-size-14 poppins-regular'
													key={subMenuItem.to}>
													<a href={subMenuItem.to}>{subMenuItem.label}</a>
												</li>
											))}
										</ul>
									</nav>
								)}
							</li>
						);
					})}
				</ul>
			</nav>
		</div>
	);
};
