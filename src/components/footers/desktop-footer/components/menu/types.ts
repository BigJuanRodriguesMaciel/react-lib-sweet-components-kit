type Route = {
	text: string;
	link: string;
	activeKey?: string;
};

type DefaultCustomProps = {
	routes: Array<Route>;
};

export type { DefaultCustomProps };
