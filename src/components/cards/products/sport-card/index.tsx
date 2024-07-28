import React, { FC } from 'react';
import { DefaultCustomProps } from '../types';
import { AssessmentStars } from '../../../assessment-stars';
import { Price } from '../../../price';
import { ButtonDefault } from '../../../buttons';
import { Chevron } from 'react-lib-icons-component';
import './styles.modules.scss';
import { CircleBackground } from '../circle-background';
import { TitleTags } from '../../../typographies/titles/title-tags';
import wave from '../../../../../public/bg-waves.png';

export const SportCard: FC<DefaultCustomProps> = ({ assessment, image, tag, title, highlighted }) => {
	return (
		<div
			className='sport-card position-relative default-box-shadow'
			style={{ backgroundImage: `url(${wave})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%' }}>
			<div className='row p-20'>
				<div className='col-md-6 overflow-visible'>
					<div className='pl-20 overflow-visible'>
						<CircleBackground>
							<img
								src={image.url}
								alt={image.alt}
							/>
						</CircleBackground>
					</div>
				</div>
				<div className='col-md-6 display-flex centralize'>
					<div>
						<TitleTags
							tags={[tag]}
							title={title}
							highlighted={highlighted}
						/>
						<div className='mt-6 mb-6'>
							<AssessmentStars assessmentIndex={assessment} />
						</div>
						<Price price={'12.80'} />
						<div className='mt-6'>
							<ButtonDefault
								text='add to cart'
								icon={
									<Chevron
										fill={'#fff'}
										height={'24px'}
										width={'24px'}
									/>
								}
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
