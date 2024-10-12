type Route = {
	link: string;
	text: string;
};

type SocialMedia = {
	icon: React.ReactElement;
	link: string;
};

type DefaultCustomProps = {
	routesMenu: Array<Route>;
	routesProducts: Array<Route>;
	socialMedias: Array<SocialMedia>;
};

export type { DefaultCustomProps };
