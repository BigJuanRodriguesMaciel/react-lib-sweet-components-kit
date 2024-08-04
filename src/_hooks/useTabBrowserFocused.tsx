import { useEffect, useState } from 'react';

export default function IsTabBrowserFocused() {
	const [isTabBrowserFocused, setIsTabBrowserFocused] = useState(true);

	useEffect(() => {
		const handleFocus = () => {
			setIsTabBrowserFocused(true);
		};

		const handleBlur = () => {
			setIsTabBrowserFocused(false);
		};

		window.addEventListener('focus', handleFocus);
		window.addEventListener('blur', handleBlur);
	}, []);
	return {
		isTabBrowserFocused,
	};
}
