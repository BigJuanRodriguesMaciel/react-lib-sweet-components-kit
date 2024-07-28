const defaultSettings = {
	className: 'center',
	centerMode: true,
	infinite: true,
	centerPadding: '500px',
	slidesToShow: 1,
	autoplay: true,
	speed: 500,
	autoplaySpeed: 2000,
	responsive: [
		{
			breakpoint: 1500,
			settings: {
				centerPadding: '50px',
			},
		},
	],
};

export { defaultSettings };
