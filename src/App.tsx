import {ButtonDefault} from './components';
import {Chevron} from 'react-lib-icons-component'
import React from 'react'
import { OverTitleUnder } from './components/typographies/titles/over-title-under';
import { AssessmentStars } from './components/assessment-stars';
import { AssessmentCard } from './components/cards/products/assessment';
import exampleImage from '../public/product.png'
export function App() {
	return (
		<div className='bg-blue h-full poppins-regular'>
			<ButtonDefault text={'add to cart'} icon={<Chevron />} styles={{
				bg: '#ed708e',
				iconBg: '#DE5978'
			}} />
			<ButtonDefault icon={<Chevron />} styles={{
				bg: '#ed708e',
				iconBg: '#DE5978'
			}} />
			<ButtonDefault text={'add to cart'} styles={{
				bg: '#ed708e',
				iconBg: '#DE5978'
			}} />
			<OverTitleUnder colors={{
				primary: '#000',
				secondary: '#c0c0c0'
			}} texts={{over:'Organic Products',
				title:'Your Sweets',
				under:'donuts, ice cream, macaroons, cheskey'}} tag={{
					over: 'h5',
					title: 'h1',
                    under: 'h3'
				}} highlight={{over:0,
				title: 0,
				under: 4}} />

				<AssessmentStars assessmentIndex={1} />
				<AssessmentCard image={{
				src: exampleImage,
				alt: 'teste'
			}} productName={'Lorem Ipsum Dolor'} assessment={4} />
		</div>
	);
}
