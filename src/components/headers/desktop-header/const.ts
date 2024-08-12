const MENU_NAV = [
	{
		label: 'Home',
		to: '/',
	},
	{
		label: 'Catalog',
		subMenu: [
			{
				label: 'Ice cream',
				to: 'products/ice-cream',
			},
			{
				label: 'Macaroons',
				to: 'products/macaroons',
			},
			{
				label: 'Donuts',
				to: 'products/donuts',
			},
			{
				label: 'Cheskey',
				to: 'products/cheskey',
			},
		],
	},
	{
		label: 'About us',
		to: '/about-us',
	},
	{
		label: 'Shipping and payment',
		to: '/',
	},
	{
		label: 'Home',
		to: '/',
	},
];

export { MENU_NAV };
