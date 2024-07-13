import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { DefaultCustomProps } from './types';
import './styles.modules.scss';
import { ButtonDefault } from '../../buttons';
import { Chevron } from 'react-lib-icons-component';
import { AssessmentCard } from '../../cards/products/assessment-card/assessment';
import exampleImage from '../../../../public/product.png';
import exampleImage2 from '../../../../public/product2.png';
import { Hexadecimal, RangeNumbers } from '../../../_types/commun';
import useTabBrowserFocused from '../../../_hooks/useTabBrowserFocused';

export const CircleCarousel: FC<DefaultCustomProps> = ({
	settings = {
		autoplay: true,
		time: 3500,
		useButtons: false,
	},
}) => {
	const { isTabBrowserFocused } = useTabBrowserFocused();
	const [currentProductIndex, setCurrentProductIndex] = useState(0);
	const { autoplay, time, useButtons } = settings;

	const mockedProducts = [
		{
			image: exampleImage2,
			AssessmentCards: [
				{
					image: {
						src: exampleImage,
						alt: 'Ice Almond Crush 1',
					},
					productName: 'Ice Almond Crush 1',
					assessment: 3,
				},
				{
					image: {
						src: exampleImage,
						alt: 'Ice Almond Crush 1',
					},
					productName: 'Ice Almond Crush 1',
					assessment: 5,
				},
			],
		},
		{
			image: exampleImage2,
			AssessmentCards: [
				{
					image: {
						src: exampleImage,
						alt: 'Ice Almond Crush 2',
					},
					productName: 'Ice Almond Crush 2',
					assessment: 1,
				},
				{
					image: {
						src: exampleImage,
						alt: 'Ice Almond Crush',
					},
					productName: 'Ice Almond Crush',
					assessment: 3,
				},
			],
		},
		{
			image: exampleImage2,
			AssessmentCards: [
				{
					image: {
						src: exampleImage,
						alt: 'Ice Almond Crush 3',
					},
					productName: 'Ice Almond Crush 3',
					assessment: 5,
				},
				{
					image: {
						src: exampleImage,
						alt: 'Ice Almond Crush',
					},
					productName: 'Ice Almond Crush',
					assessment: 2,
				},
			],
		},
	];
	const customStyles = {
		bg: {
			default: '#fff' as Hexadecimal,
			hover: '#ed708e' as Hexadecimal,
		},
		iconBg: {
			default: '#5fd3fb' as Hexadecimal,
			hover: '#DE5978' as Hexadecimal,
		},
	};

	const infiniteCarouselLoop = useCallback(() => {
		let loop = setInterval(() => {
			setCurrentProductIndex(currentProductIndex === mockedProducts.length - 1 ? 0 : currentProductIndex + 1);
		}, time);
		if (isTabBrowserFocused) loop;
		else {
			setCurrentProductIndex(0);
			clearInterval(loop);
		}
	}, [isTabBrowserFocused, currentProductIndex]);

	const component = useMemo(() => {
		return (
			<div className='w-full-content h-full-content product-bg-circle border-radius-full position-relative'>
				<div className='controllers border-radius-full position-absolute'>
					{useButtons && (
						<div className='buttons position-relative h-full-content'>
							<div className='prev position-absolute'>
								<ButtonDefault
									icon={<Chevron />}
									styles={customStyles}
									isLeft
									handleAction={() => null}
								/>
							</div>
							<div className='next position-absolute'>
								<ButtonDefault
									icon={<Chevron />}
									styles={customStyles}
									handleAction={() => null}
								/>
							</div>
						</div>
					)}
					{mockedProducts.map((item, index) => {
						return (
							<div className='product-expose position-absolute '>
								<img
									src={item.image}
									alt=''
									className={`slide-${currentProductIndex === index ? 'in' : 'out'}-br`}
								/>
							</div>
						);
					})}
				</div>
				<div className='products h-full-content'>
					{mockedProducts.map((item, index) => {
						return item.AssessmentCards.map((c, i) => {
							return (
								<div
									className={`${i === 0 ? 'first' : 'second'} position-absolute flip-${currentProductIndex === index ? 'in' : 'out'}-hor-bottom`}>
									<AssessmentCard
										image={{
											src: c.image.src,
											alt: c.image.alt,
										}}
										productName={c.productName}
										assessment={c.assessment as RangeNumbers<0, 6>}
									/>
								</div>
							);
						});
					})}
				</div>
			</div>
		);
	}, [currentProductIndex, useButtons]);

	useEffect(() => {
		autoplay && infiniteCarouselLoop();
	}, [currentProductIndex]);

	return true && component;
};
