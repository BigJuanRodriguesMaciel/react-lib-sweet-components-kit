import React, { FC } from 'react';
import { DefaultCustomProps } from '../types';
import { AssessmentStars } from '../../../assessment-stars';
import { Price } from '../../../price';
import { ButtonDefault } from '../../../buttons';
import { Chevron } from 'react-lib-icons-component';
import './styles.modules.scss';
import { CircledBackground } from '../circled-background';

export const SportCard: FC<DefaultCustomProps> = ({ assessment, image, tag, title, highlighted }) => {
	return (
		<div className='sport-card position-relative'>
			<div className='row'>
				<div className='col-md-6'>
					<CircledBackground>
						<img
							src={image.url}
							alt={image.alt}
						/>
					</CircledBackground>
				</div>
				<div className='col-md-6 display-flex centralize-y'>
					<div>
						<h2 className='poppins-bold font-size-28'>
							<span className='fg-blue'>{highlighted}</span>
							{title}
						</h2>
						<h3 className='poppins-regular fg-grey font-size-14'>{tag}</h3>
						<div className='mt-6 mb-6'>
							<AssessmentStars assessmentIndex={assessment} />
						</div>
						<Price price={'12.80'} />
						<div className='mt-6'>
							<ButtonDefault
								text='add to cart'
								icon={<Chevron />}
								styles={{
									bg: {
										default: '#fff',
										hover: '#5fd3fb',
										border: '#ed708e',
									},
									iconBg: {
										default: '#ed708e',
										hover: '#5fd3fb',
									},
								}}
								handleAction={() => null}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
