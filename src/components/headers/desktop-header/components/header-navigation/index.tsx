import { FC } from 'react';
import { DefaultCustomProps } from './types';

export const HeaderNavigation: FC<DefaultCustomProps> = ({ routes }) => {
	return (
		<div className='display-flex centralize'>
			<nav>
				<ul className='display-flex justify-content-between '>
					{routes.map(item => {
						return (
							<li
								className={`font-size-14 poppins-regular ml-10 mr-10 fg-white position-relative ${item.subMenu && 'sub-menu'}`}
								key={item.link}>
								<a
									href={item.link}
									className='fg-white'>
									{item.text}
								</a>
								{item.subMenu && (
									<nav className='display-none position-absolute p-5 bg-white border-radius-4'>
										<ul>
											{item.subMenu.map(subMenuItem => (
												<li
													className='fg-white font-size-14 poppins-regular'
													key={subMenuItem.link}>
													<a href={subMenuItem.link}>{subMenuItem.text}</a>
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
