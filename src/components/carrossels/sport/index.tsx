import { FC } from 'react';
import Slider from 'react-slick';
import './styles.modules.scss';
import { DefaultCustomProps } from './types';
import { defaultSettings } from './const.settings';

export const SportCarousel: FC<DefaultCustomProps> = ({ customSettings, children }) => {
	const settings = { ...defaultSettings, ...customSettings };
	return (
		<div className='slider-container'>
			<Slider {...settings}>{children}</Slider>
		</div>
	);
};
