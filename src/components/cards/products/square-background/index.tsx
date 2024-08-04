import React, { FC } from 'react';
import { DefaultCustomProps } from './types';

export const SquareBackground: FC<DefaultCustomProps> = ({ children }) => {
	return (
		<div className='w-full-content h-full-content position-relative display-flex centralize '>
			<span className='bg-blue--over border-radius-20 position-absolute h-180 w-150' />
			{children}
		</div>
	);
};
