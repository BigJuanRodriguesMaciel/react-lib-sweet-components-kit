import React, { FC } from 'react';
import { DefaultCustomProps } from './types';

export const CircleBackground: FC<DefaultCustomProps> = ({ children }) => {
	return (
		<div className='w-full-content h-full-content product-bg-circle border-radius-full position-relative'>
			<span />
			{children}
		</div>
	);
};
