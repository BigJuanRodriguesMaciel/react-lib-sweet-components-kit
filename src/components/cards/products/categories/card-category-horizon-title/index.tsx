import { FC } from 'react';
import { DefaultCustomProps } from './types';
import { ProductLabelQuantity } from '../../labels/quantity';
import './styles.modules.scss';
import { ButtonDefault } from 'src/components/buttons';
import { Chevron } from 'react-lib-icons-component';

export const CardCategoryHorizonTitle: FC<DefaultCustomProps> = ({
	texts: { title, fontSize = 60, color = 'white' },
	product: { quantity, imageURL },
	content,
}) => (
	<div
		className='card-category-horizon-title position-relative display-flex centralizeY pl-20'
		style={{ background: `url(${imageURL})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
		<div>
			{content && (
				<div className='product-label-quantity position-absolute'>
					<ProductLabelQuantity quantity={quantity} />
				</div>
			)}
			<h3 className={`poppins-bold fg-${color} font-size-${fontSize}`}>{title}</h3>
			{content && <p className='w-half-content poppins-regular fg-white font-size-14 mb-10'>{content}</p>}
			<div className='w-200'>
				<ButtonDefault
					anchorHRef
					text={'linkText'}
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
