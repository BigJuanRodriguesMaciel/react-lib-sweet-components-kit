import React, { FC } from 'react';
import { DefaultCustomProps } from './types';
import './styles.modules.scss';

export const DotCurrentIndex: FC<DefaultCustomProps> = ({ currentIndex, quantity }) => {
	return (
		<ul id='dot-current-index'>
			{Array(quantity)
				.fill(null)
				.map((_, index) => (
					<li
						key={index}
						className={index === currentIndex ? 'active' : ''}>
						<span />
						{index === currentIndex && (
							<div className='display-flex centralize'>
								<strong className='font-size-24 font-weight-semibold '>
									{'0'}
									{currentIndex + 1}
								</strong>
							</div>
						)}
					</li>
				))}
		</ul>
	);
};
