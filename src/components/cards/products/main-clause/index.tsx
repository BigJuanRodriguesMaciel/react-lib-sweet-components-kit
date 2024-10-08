import { FC } from 'react';
import { DefaultCustomProps } from './types';
import { TitleTags } from '../../../typographies/titles/title-tags';
import { Price } from '../../../price';
import { AssessmentStars } from '../../../assessment-stars';
import './styles.modules.scss';
import { ShoppingBag } from 'react-lib-icons-component';
import { ButtonDefault } from '../../../buttons';
import { Discount } from 'src/components/discount';

export const MainClause: FC<DefaultCustomProps> = ({ tags, title, highlighted, assessment, image }) => {
	return (
		<div
			id='main-clause'
			className='default-box-shadow border-radius-8 p-10 position-relative mt-20'>
			<Discount discount={20} />
			<div className='product-img display-flex centralize'>
				<img
					src={image.url}
					alt={image.alt}
				/>
			</div>
			<div className='mt-10'>
				<TitleTags
					tags={tags}
					title={title}
					highlighted={highlighted}
					fontSizes={{
						title: 20,
						tag: 14,
					}}
				/>
			</div>
			<div className='display-flex mt-3 justify-space-between mb-7'>
				<div className='mt-2'>
					<AssessmentStars assessmentIndex={assessment} />
				</div>
				<Price price={'12.80'} />
			</div>
			<ButtonDefault
				text={'Add to cart'}
				icon={
					<ShoppingBag
						fill={'#fff'}
						height={'20px'}
						width={'20px'}
					/>
				}
				styles={{
					bg: {
						default: '#fff',
						hover: '#5fd3fb',
						border: '#ed708e',
					},
					iconBg: {
						default: '#DE5978',
						hover: '#5fd3fb',
					},
				}}
				handleAction={() => null}
			/>
		</div>
	);
};
