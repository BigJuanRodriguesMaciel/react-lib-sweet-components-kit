type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
	? Acc[number]
	: Enumerate<N, [...Acc, Acc['length']]>;

type RangeNumbers<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>;
type Hexadecimal = `#${string}` | 'transparent';

export type { RangeNumbers, Hexadecimal };
