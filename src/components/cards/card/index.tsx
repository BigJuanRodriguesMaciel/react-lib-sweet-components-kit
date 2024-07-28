import { FC } from 'react';
import './styles.modules.scss';
import { DefaultCustomProps } from './types';

export const Card: FC<DefaultCustomProps> = ({ children }) => {
	return <div className='card p-10'>{children}</div>;
};
