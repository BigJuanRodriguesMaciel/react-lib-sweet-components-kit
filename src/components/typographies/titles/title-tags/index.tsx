import React, { FC } from 'react';
import { DefaultCustomProps } from './types';

export const TitleTags: FC<DefaultCustomProps> = ({ tags, title, highlighted, fontSizes = { title: 28, tag: 14 } }) => {
	return (
		<>
			<h2 className={`poppins-bold font-size-${fontSizes?.title}`}>
				{highlighted && <span className='fg-blue'>{highlighted}</span>}
				{title}
			</h2>
			<div className='display-flex mb-3'>
				{tags.map((tag: string) => {
					return <h3 className={`poppins-regular fg-grey font-size-${fontSizes?.tag} mr-2`}>{tag}</h3>;
				})}
			</div>
		</>
	);
};
