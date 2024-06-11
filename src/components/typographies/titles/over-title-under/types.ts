interface IOverTitleUnder<T> {
    over: T,
    title: T,
    under: T,
}

interface IComponentProps {
    colors: {
        primary: string,
        secondary: string,
    },
    texts: IOverTitleUnder<string>,
    tag: IOverTitleUnder<keyof HTMLElementTagNameMap>,
    highlight: IOverTitleUnder<number>
}

export type {
    IOverTitleUnder,
    IComponentProps
}