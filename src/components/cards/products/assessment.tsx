import React, { FC } from "react";
import { AssessmentStars } from "../../assessment-stars";
import { Price } from "../../price";
import { DefaultCustomProps } from "./types";
import './styles.modules.scss'

export const AssessmentCard: FC<DefaultCustomProps> = ({ productName, assessment, image }) => {
    return (
        <div className="container w-300 h-120 border-radius-7 bg-white centralize-y">
            <div className="row">
                <div className="col-5 centralize-y pl-0 pr-0">
                    <img className="border-radius-7 h-110" src={image.src} alt={image.alt} />
                </div>
                <div className="col-7 centralize-y pr-0">
                    <div>
                        <h3 className="font-size-14 font-weight-bold">{productName}</h3>
                        <AssessmentStars assessmentIndex={assessment} />
                    </div>
                    <Price price={"12.80"} />
                </div>
            </div>
        </div>
    )
}