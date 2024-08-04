import { FC } from 'react';
import { DefaultCustomProps } from './types';
import './styles.modules.scss';
import { Card } from '../card';

export const CustomerReviews: FC<DefaultCustomProps> = ({ comment, image, name, tags }) => {
	return (
		<Card>
			<div className='customer-reviews'>
				<div className='display-flex ddd poppins-bold'>
					<div className='img'>
						<img
							className='border-radius-full'
							src={image.src}
							alt={image.alt}
						/>
					</div>
					<div className='display-flex centralize ml-10'>
						<div>
							<strong className='font-size-22'>{name}</strong>
							<div>{tags?.map(tag => <small className='mr-2'>{tag}</small>)}</div>
						</div>
					</div>
				</div>
				<p className='font-size-12 poppins-semibold mt-10'>{comment}</p>
			</div>
		</Card>
	);
};
