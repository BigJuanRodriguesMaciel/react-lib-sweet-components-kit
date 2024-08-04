import { FC } from 'react';
import './styles.modules.scss';
import { PaperAirplane } from 'react-lib-icons-component';
import { COLORS } from 'src/_consts';
import { Hexadecimal } from 'src/@types/common';

export const NewsLetters: FC<any> = () => {
	return (
		<div
			id='news-letters'
			className='bg-blue--over pt-8 pb-8 pl-10 pr-10 poppins-semibold border-radius-30 m-20 display-flex'>
			<div className='w-quarter-content display-flex centralize'>
				<h3 className='font-size-32 font-weight-bold fg-black'>
					Subscribe
					<strong className='fg-white ml-4'>to news</strong>
				</h3>
			</div>
			<div className='display-flex centralize position-relative'>
				<input
					className='w-full h-50 font-size-16 font-weight-regular border-radius-20'
					type='email'
					placeholder='Email'
				/>
				<button className='position-absolute border-radius-full'>
					<div className='ml-4 mt-5'>
						<PaperAirplane
							fill={COLORS.MAIN_BLUE as Hexadecimal}
							height={'100px'}
							width={'100px'}
						/>
					</div>
				</button>
			</div>
		</div>
	);
};
