import { FC } from 'react';

export const Logo: FC<{ logo: string | JSX.Element }> = ({ logo }) => {
	return (
		<div>
			{typeof logo === 'string' ? (
				<img
					src={logo}
					alt=''
				/>
			) : (
				logo
			)}
			<small className='poppins-regular fg-grey'>All right reserved {new Date().getFullYear()} </small>
		</div>
	);
};
