import { DefaultCustomProps as CartProps } from '../../cart/types';

type Route = {
	link: string;
	text: string;
	subMenu?: SubMenu;
};

type SubMenu = Array<Route>;

type DefaultCustomProps = {
	routes: Array<Route>;
	logoURL: string;
} & CartProps;

export type { DefaultCustomProps, Route };
