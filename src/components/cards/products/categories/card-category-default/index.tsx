import { FC } from 'react';
import { DefaultCustomProps } from './types';
import { ProductLabelQuantity } from '../../labels/quantity';
import { ButtonDefault } from 'src/components/buttons';
import { Chevron } from 'react-lib-icons-component';
import './styles.modules.scss';

export const CardCategoryDefault: FC<DefaultCustomProps> = ({
	texts: { title, description },
	product: { imageURL, quantity },
	link: { linkText, linkTo },
}) => (
	<div
		className='card-category-default display-flex flex-direction-column justify-space-between'
		style={{ background: `url(${imageURL})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
		<div className='p-20'>
			<h3 className='poppins-bold font-size-32 fg-white'>{title}</h3>
			<p className='poppins-light fg-white font-size-12 mt-1 mb-5'>{description}</p>
			<ProductLabelQuantity quantity={quantity} />
		</div>
		<div className='display-flex centralize'>
			<div className='w-250 mb-20'>
				<ButtonDefault
					anchorHRef
					text={linkText}
					icon={
						<Chevron
							fill={'#ed708e'}
							height={'24px'}
							width={'24px'}
						/>
					}
					styles={{
						bg: {
							default: '#ed708e',
							hover: '#5fd3fb',
						},
						iconBg: {
							default: '#DE5978',
							hover: '#5fd3fb',
						},
					}}
					handleAction={() => null}
				/>
			</div>
		</div>
	</div>
);
