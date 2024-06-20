import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import { Hexadecimal } from '../../../_types/commun';

type ConditionalHandleAction<T> = T extends { anchorHRef: true }
	? AnchorHTMLAttributes<HTMLAnchorElement>
	: ButtonHTMLAttributes<HTMLButtonElement>;

type DefaultCustomProps = {
	text?: string;
	icon?: React.ReactElement;
	isLeft?: boolean;
	styles?: {
		bg: {
			default: Hexadecimal;
			hover: Hexadecimal;
		};
		iconBg?: {
			default: Hexadecimal;
			hover: Hexadecimal;
		};
	};
	anchorHRef?: boolean;
} & {
	handleAction: ConditionalHandleAction<DefaultCustomProps>;
};

export type { DefaultCustomProps };
