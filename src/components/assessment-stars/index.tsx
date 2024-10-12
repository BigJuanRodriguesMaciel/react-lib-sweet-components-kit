import { FC } from 'react';
import { DefaultCustomProps } from './types';
import { Star } from 'react-lib-icons-component';
import './styles.modules.scss';
import { COLORS } from '../../_const';
import { Hexadecimal } from 'src/@types/common';

export const AssessmentStars: FC<DefaultCustomProps> = ({ assessmentIndex }) => {
	return (
		<ul>
			{Array(5)
				.fill(null)
				.map((_, index) => (
					<li>
						<Star
							stroke={COLORS.MAIN_PINK as Hexadecimal}
							fill={index + 1 <= assessmentIndex ? COLORS.MAIN_PINK : '#fff'}
							height={'24px'}
							width={'24px'}
						/>
					</li>
				))}
		</ul>
	);
};
