import { ButtonDefault } from './components';
import { Chevron } from 'react-lib-icons-component';
import React, { useState } from 'react';
import { OverTitleUnder } from './components/typographies/titles/over-title-under';
import { AssessmentStars } from './components/assessment-stars';
import { AssessmentCard } from './components/cards/products/assessment-card';
import exampleImage from '../public/product.png';
import { CircleCarousel } from './components/carrossels';
import { COLORS } from './_consts';
import { DotCurrentIndex } from './components/carrossels/dot-current-index';
import { SportCard } from './components/cards/products/sport-card';
import { SportCarousel } from './components/carrossels/sport';
import { SquareBackground } from './components/cards/products/square-background';
import { MainClause } from './components/cards/products/main-clause';
import { CustomerReviews } from './components/cards/custormer-reviews';
import { NewsLetters } from './components/newsLetters';
import { Pagination } from './components/pagination';
import { CardCategoryDefault } from './components/cards/products/categories/card-category-default';
import { CardCategoryVerticalTitle } from './components/cards/products/categories/card-category-vertical-title';
import { CardCategoryHorizonTitle } from './components/cards/products/categories/card-category-horizon-title';
import { ProductMosaic } from './components/cards/products/mosaic';
export function App() {
	const [i, setI] = useState(1);
	const teste = {
		top: '50%',
		left: 50,
		transform: 'translate(-50%, -50%)',
	};
	const [currentIndex, setCurrentIndex] = useState(1);
	return (
		<ProductMosaic />
		// <SportCarousel>
		// 	{Array.from({ length: 10 }, (v, i) => {
		// 		return (
		// 			<SportCard
		// 				key={`sport_card_${i}`}
		// 				highlighted='Ice Cream'
		// 				title={'- Vannilla Black Flovers'}
		// 				tag={'ice cream'}
		// 				assessment={Math.floor(Math.random() * 5)}
		// 				price={22.75}
		// 				image={{
		// 					url: 'https://static.vecteezy.com/system/resources/thumbnails/017/394/920/small_2x/sweet-strawberry-ice-cream-generative-ai-png.png',
		// 					alt: 'teste',
		// 				}}
		// 			/>
		// 		);
		// 	})}
		// </SportCarousel>
	);
	// <div style={{ width: 225 }}>
	// 	<ButtonDefault
	// 		text={'Our production'}
	// 		icon={<Chevron />}
	// 		styles={{
	// 			bg: {
	// 				default: '#ed708e',
	// 				hover: '#5fd3fb',
	// 			},
	// 			iconBg: {
	// 				default: '#DE5978',
	// 				hover: '#5fd3fb',
	// 			},
	// 		}}
	// 		handleAction={() => null}
	// 	/>
	// </div>

	// <div
	// 	className='poppins-regular h-full'
	// 	style={{ backgroundColor: COLORS.MAIN_BLUE }}>
	// 	<div className='container h-full w-full position-relative'>
	// 		<div className='row'>
	// 			<div
	// 				className='col-6 display-flex centralize-y'
	// 				style={{ minHeight: '100vh' }}>
	// 				<div>
	// 					<OverTitleUnder
	// 						colors={{
	// 							primary: '#000',
	// 							secondary: '#c0c0c0',
	// 						}}
	// 						texts={{
	// 							over: 'Organic Products',
	// 							title: 'Your Sweets',
	// 							under: 'donuts, ice cream, macaroons, cheskey',
	// 						}}
	// 						tag={{
	// 							over: 'h5',
	// 							title: 'h1',
	// 							under: 'h3',
	// 						}}
	// 						highlight={{ over: 0, title: 0, under: 4 }}
	// 					/>
	// 					<div style={{ width: 225 }}>
	// 						<ButtonDefault
	// 							text={'Our production'}
	// 							icon={<Chevron />}
	// 							styles={{
	// 								bg: {
	// 									default: '#ed708e',
	// 									hover: '#5fd3fb',
	// 								},
	// 								iconBg: {
	// 									default: '#DE5978',
	// 									hover: '#5fd3fb',
	// 								},
	// 							}}
	// 							handleAction={() => null}
	// 						/>
	// 					</div>
	// 				</div>
	// 			</div>
	// 			<div className='col-6 display-flex centralize-y'>
	// 				<div style={{ width: '37vw', height: '37vw', overflow: 'visible' }}>
	// 					<CircleCarousel />
	// 				</div>
	// 			</div>
	// 		</div>
	// 	</div>
	// 	<div
	// 		className='position-absolute'
	// 		style={{ ...teste }}>
	// 		<DotCurrentIndex
	// 			quantity={5}
	// 			currentIndex={i}
	// 		/>
	// 	</div>

	// 	<ButtonDefault text={'add to cart'} icon={<Chevron />} styles={{
	// 		bg: '#ed708e',
	// 		iconBg: '#DE5978'
	// 	}} />
	// 	<ButtonDefault icon={<Chevron />} styles={{
	// 		bg: '#ed708e',
	// 		iconBg: '#DE5978'
	// 	}} />
	// 	<ButtonDefault text={'add to cart'} styles={{
	// 		bg: '#ed708e',
	// 		iconBg: '#DE5978'
	// 	}} />
	// 	<OverTitleUnder colors={{
	// 		primary: '#000',
	// 		secondary: '#c0c0c0'
	// 	}} texts={{over:'Organic Products',
	// 		title:'Your Sweets',
	// 		under:'donuts, ice cream, macaroons, cheskey'}} tag={{
	// 			over: 'h5',
	// 			title: 'h1',
	// //                 under: 'h3'
	// 		}} highlight={{over:0,
	// 		title: 0,
	// 		under: 4}} />

	// 		<AssessmentStars assessmentIndex={1} />
	// 		<AssessmentCard image={{
	// 		src: exampleImage,
	// 		alt: 'teste'
	// 	}} productName={'Lorem Ipsum Dolor'} assessment={4} />
	// </div>
}
