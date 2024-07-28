import { FC } from 'react';
import { DefaultCustomProps } from './types';
import { ProductLabelQuantity } from '../../labels/quantity';
import './styles.modules.scss';

const POSITIONS = {
	right: '-50px',
	left: '-100px',
};

export const CardCategoryVerticalTitle: FC<DefaultCustomProps> = ({
	texts: { title, fontSize = 60, position = 'left', color = 'white' },
	product: { quantity, imageURL },
	showQuantityProducts = true,
}) => (
	<div
		className='card-category-vertical-title position-relative'
		style={{ background: `url(${imageURL})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
		<h3
			className={`poppins-bold fg-${color} position-absolute font-size-${fontSize}`}
			style={{
				bottom: title.length * (position === 'left' ? 30 : 20),
				[position]: POSITIONS[position],
			}}>
			{title}
		</h3>
		{showQuantityProducts && (
			<div className='product-label-quantity position-absolute'>
				<ProductLabelQuantity quantity={quantity} />
			</div>
		)}
	</div>
);
