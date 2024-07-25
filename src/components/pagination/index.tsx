import { FC, useMemo } from 'react';
import './styles.modules.scss';
import { DefaultCustomProps } from './types';

const buttons = (total: number) => {
	return Array.from({ length: total }, (_, i) => i + 1);
};

export const Pagination: FC<DefaultCustomProps> = ({ manageIndexUseStateTuple, total }) => {
	const [currentIndex, setCurrentIndex] = manageIndexUseStateTuple;
	const showButtons = (index: number) => {
		return index > 0 && index >= currentIndex - 2 && index < total - 1 && index != total;
	};

	const Button = (index: number, classes = '') => (
		<button
			className={`border-radius-full w-50 h-50 mr-4 font-size-18 poppins-semibold ${classes} ${currentIndex === index && 'active'}`}
			onClick={() => setCurrentIndex(index)}>
			{index}
		</button>
	);

	const PaginationButtons = useMemo(() => {
		return (
			<>
				{Button(1, 'first')}
				{currentIndex > 3 && <span className='pt-2 ml-2 mr-5 font-size-28'>...</span>}
				{buttons(total)
					.splice(0, currentIndex + 1)
					.map((_, index) => showButtons(index) && Button(index + 1))}
				{currentIndex < total - 2 && <span className='pt-2 ml-2 mr-5 font-size-28'>...</span>}
				{Button(total, 'last')}
			</>
		);
	}, [total, currentIndex]);

	return (
		<div
			id='pagination'
			className='display-flex m-20'>
			{PaginationButtons}
		</div>
	);
};
