import { FC, useEffect, useState } from 'react';
import { DefaultCustomProps } from './types';

export const Menu: FC<DefaultCustomProps> = ({ routes }) => {
	const [isReady, setIsReady] = useState(false);
	const provideKeys = () => {
		routes.forEach(route => (route.activeKey = route.text.toLocaleLowerCase().replaceAll(' ', '-')));
		setIsReady(true);
	};

	const isActive = (routerKey: string | null = null) => {
		if (!routerKey) return false;
		return window.location.href.includes(routerKey);
	};

	useEffect(() => provideKeys(), [routes]);

	return (
		isReady && (
			<div className='width-full-content row pl-20 mt-10'>
				{routes.map((route, index) => (
					<div
						key={index}
						className='col-md-6 display-flex mb-6'>
						<a
							href={route.link}
							className={`poppins-regular font-size-14 ${isActive(route.activeKey) ? 'fg-pink' : 'fg-grey'}`}>
							{route.text}
						</a>
					</div>
				))}
			</div>
		)
	);
};
