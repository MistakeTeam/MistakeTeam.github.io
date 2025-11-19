import * as React from "react";
import { randomNum } from "../../../utility/math";

export interface IWavesSeparatorProps {
    style_background: string;
}

export default class WavesSeparator extends React.Component<IWavesSeparatorProps> {
    public render() {
        const { style_background } = this.props;
        const p = randomNum(10, 99);

        return (
            <>
                <svg className={`waves text-${style_background}`} viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
                    </defs>
                    <g>
                        <use
                            xlinkHref="#gentle-wave"
                            x="48"
                            y="0"
                            fill="currentColor"
                            style={{
                                transform: `translateX(${p}px)`,
                            }}
                        ></use>
                    </g>
                </svg>
                <div className={`background-main bg-${style_background}`}></div>
            </>
        );
    }
}
