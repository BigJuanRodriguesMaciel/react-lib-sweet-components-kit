import { RangeNumbers } from "../../../@types/commun"

type DefaultCustomProps = {
    image: {
        src: string,
        alt: string,
    },
    productName: string,
    assessment:  RangeNumbers<0, 6>
}

export type {
    DefaultCustomProps
}