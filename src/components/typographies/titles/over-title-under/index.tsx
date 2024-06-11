import React, { FC, ReactNode } from "react";
import { IComponentProps } from "./types";
import { Separator } from "../../../separator";

export const OverTitleUnder: FC<IComponentProps> = ({ tag, texts, highlight }) => {
    const generateText = (text:string, highlightIndex:number) => {
        return text.split(' ').map((text, index) => {
            return highlightIndex === index ? <strong className="fg-black">{text}{' '}</strong> : <>{text}{' '}</>
        })
    }
    return (
        <>
            <tag.over className="font-size-14 poppins-bold">{texts.over}</tag.over>
            <Separator />
            <tag.title className="font-size-60 fg-white poppins-bold">{generateText(texts.title, highlight.title).map((e: ReactNode) => e)}</tag.title>
            <tag.under className="font-size-42 fg-white poppins-bold">{generateText(texts.under, highlight.under).map((e: ReactNode) => e)}</tag.under>
        </>
    )
}   