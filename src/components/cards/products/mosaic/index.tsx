import { FC } from 'react';
import { CardCategoryDefault } from '../categories/card-category-default';
import { CardCategoryHorizonTitle } from '../categories/card-category-horizon-title';
import { CardCategoryVerticalTitle } from '../categories/card-category-vertical-title';

export const ProductMosaic: FC<any> = () => {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-md-6 pr-0'>
					<div className='row'>
						<div className='col-md-6 pr-0'>
							<CardCategoryDefault
								texts={{
									title: 'Ice Cream',
									description:
										'Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy',
								}}
								product={{
									imageURL:
										'https://img.freepik.com/free-photo/hand-holding-delicious-ice-cream-cone_23-2148513991.jpg',
									quantity: 22,
								}}
								link={{ linkText: 'Go to category', linkTo: '/' }}
							/>
						</div>
						<div className='col-md-6 pl-0'>
							<div className='display-flex centralize bg-white'>
								<h3 className='title poppins-bold font-size-56'>Categories</h3>
							</div>
							<CardCategoryVerticalTitle
								texts={{
									title: 'Macaroons',
								}}
								product={{
									quantity: 15,
									imageURL:
										'https://img.freepik.com/premium-photo/yellow-background-with-colorful-macaroons-sprinkles_876023-745.jpg',
								}}
							/>
						</div>
					</div>
				</div>
				<div className='col-md-6 pl-0'>
					<div className='row h-full-content'>
						<div className='col-md-6 pr-0 h-half-content'>
							<CardCategoryVerticalTitle
								texts={{
									title: 'discounts',
									fontSize: 42,
									position: 'right',
									color: 'black',
								}}
								product={{
									quantity: 15,
									imageURL:
										'https://media.istockphoto.com/id/1320870504/pt/vetorial/set-of-fruit-ice-cream-frozen-juice-on-stick-fruity-popsicle-colorful-summer-dessert.jpg?s=612x612&w=0&k=20&c=ATgud6X1AerOtYhzfvkEGH-xqEuraNObJdBRYrX4lU8=',
								}}
								showQuantityProducts={false}
							/>
						</div>
						<div className='col-md-6 p-0 h-half-content w-full'>
							<CardCategoryHorizonTitle
								texts={{
									title: 'Donuts',
									fontSize: 42,
									position: 'right',
									color: 'white',
								}}
								product={{
									quantity: 15,
									imageURL: 'https://img.freepik.com/premium-photo/delicious-pink-donuts_209190-1186.jpg',
								}}
							/>
						</div>
						<div className='col-md-12 p-0 h-half-content w-full'>
							<CardCategoryHorizonTitle
								texts={{
									title: 'Cheskey',
									fontSize: 42,
									position: 'right',
									color: 'white',
								}}
								product={{
									quantity: 15,
									imageURL: 'https://t4.ftcdn.net/jpg/06/27/13/55/360_F_627135586_YbElehjNEoOM8HepAFlP7j188b8V1zc8.jpg',
								}}
								content='Lorem Ipsum is Lorem Ipsum is null Lore maiorem et justo tell us of Lorem Ipsum is Lorem Ipsum is Lorem Ipsum  and'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
