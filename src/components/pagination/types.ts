import { Dispatch, SetStateAction } from 'react';

type DefaultCustomProps = {
	manageIndexUseStateTuple: [currentIndex: number, setCurrentIndex: Dispatch<SetStateAction<number>>];
	total: number;
};

export type { DefaultCustomProps };
