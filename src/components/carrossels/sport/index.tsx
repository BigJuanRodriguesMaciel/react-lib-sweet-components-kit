import { FC } from 'react';
import { SportCard } from '../../cards/products/sport-card/SportCard';
import Slider from 'react-slick';
import './styles.modules.scss';
import { DefaultCustomProps } from './types';
import { defaultSettings } from './const.settings';

export const SportCarousel: FC<DefaultCustomProps> = ({ customSettings, children }) => {
	const settings = customSettings || defaultSettings;
	return (
		<div className='slider-container'>
			<Slider {...settings}>
				{/* <SportCard
					highlighted='Ice Cream'
					title={'- Vannilla Black Flovers'}
					tag={'ice cream'}
					assessment={2}
					price={22.75}
					image={{
						url: 'https://static.vecteezy.com/system/resources/thumbnails/017/394/920/small_2x/sweet-strawberry-ice-cream-generative-ai-png.png',
						alt: 'teste',
					}}
				/> */}

				{children}
			</Slider>
		</div>
	);
};
