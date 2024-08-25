import { ComponentProps, FC } from 'react';

export const Separator: FC<ComponentProps<'span'>> = ({ ...rest }) => {
	return (
		<span
			className={`border-radius-15 bg-green display-block`}
			{...rest}
		/>
	);
};
