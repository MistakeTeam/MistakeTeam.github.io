import React, { useEffect, useRef, useState } from "react";
import { randomNum } from "../../utility/math";

export default function Swiper() {
    const ref = useRef<HTMLAnchorElement>(null);
    const [transform, setTransform] = useState<string>();
    const [ge, setGE] = useState({
        g2: 0,
        g3: 0,
    });
    const [dimensions, setDimensions] = useState<DOMRect>({
        bottom: 0,
        height: 0,
        left: 0,
        right: 0,
        toJSON: () => {},
        top: 0,
        width: 0,
        x: 0,
        y: 0,
    });

    function OnMouseLeave() {
        setTransform("perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    }

    function OnMouseMove(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        const x = e.clientX;
        const y = e.clientY;

        let minXO = dimensions.left + dimensions.width / 2;
        let minYO = dimensions.top + dimensions.height / 2;
        let Xn = ((x - minXO) / (dimensions.right - minXO)) * (0 - 15) + 0;
        let Yn = ((y - minYO) / (dimensions.bottom - minYO)) * (0 - 15) + 0;

        if (Xn > 15) Xn = 15;
        if (Yn > 15) Yn = 15;
        if (Xn < -15) Xn = -15;
        if (Yn < -15) Yn = -15;

        setTransform(`perspective(1200px) rotateX(${-Yn}deg) rotateY(${Xn}deg) scale3d(1, 1, 1)`);
    }

    useEffect(() => {
        setGE({
            g2: randomNum(1.60001, 2.20001),
            g3: randomNum(1, 360),
        });

        const handleScroll = () => {
            if (ref.current) {
                setDimensions(ref.current.getBoundingClientRect());
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <a
            href="/en-GB/games/floodland"
            className="swiper-slide mr-16 swiper-slide-next"
            style={{
                width: "341.053px",
                willChange: "transform",
                transform,
                marginRight: "40px",
                transition: "500ms cubic-bezier(0.03,0.98, 0.52, 0.99)",
            }}
            ref={ref}
            onMouseLeave={OnMouseLeave}
            onMouseMove={(e) => OnMouseMove(e)}
        >
            <div className="card card-details flex-col justify-between flex relative">
                <div className="titles text-white">
                    <span className="text-4xl uppercase font-extrabold">Floodland</span>
                    <span className="rating" />
                </div>
                <div className="details flex justify-between">
                    <div className="supported flex self-end pb-14">
                        <i className="mr-10 lg:mr-4 icon">
                            <img src="https://ravenscourt-strapi.deeparc.net/uploads/ps_fc941d4f8e.svg" alt="" className="h-full" />
                            PlayStation
                        </i>
                        <i className="mr-10 lg:mr-4 icon">
                            <img src="https://ravenscourt-strapi.deeparc.net/uploads/nintendo_w_30x32_102d622efc.svg" alt="" className="h-full" />
                            Nintendo Switch™
                        </i>
                        <i className="mr-10 lg:mr-4 icon">
                            <img src="https://ravenscourt-strapi.deeparc.net/uploads/xbox_e276110e49.svg" alt="" className="h-full" />
                            Xbox
                        </i>
                        <i className="mr-10 lg:mr-4 icon">
                            <img src="https://ravenscourt-strapi.deeparc.net/uploads/windows_470af7cae9.svg" alt="" className="h-full" />
                            Windows
                        </i>
                    </div>
                    <button type="button" className="btn btn-white">
                        <span>14.11.2022</span>
                    </button>
                </div>
            </div>
            <div className="card card-background flex-col justify-between flex relative" style={{ backgroundColor: "rgb(70, 100, 108)" }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1723.43 1713.25"
                    className="raven__background bg__image"
                    style={{
                        transform: `scale(${ge.g2}) rotate(${ge.g3}deg)`,
                    }}
                >
                    <g>
                        <path d="M1259.2,97.6c-64.36,18.26-103,34.74-103,34.74,43-10.17,84.2-18.25,122.18-24.47Q1268.84,102.6,1259.2,97.6Z" style={{ fill: "rgb(128, 209, 230)" }} />
                        <path
                            d="M1590.34,402.71h0c-1.76-2.79-3.54-5.55-5.32-8.31l-1.53-2.36q-2.19-3.36-4.4-6.7l-1.14-1.72q-2.58-3.87-5.2-7.69c-.65-1-1.31-1.92-2-2.87q-1.82-2.64-3.65-5.25c-.69-1-1.38-2-2.08-3-1.66-2.34-3.32-4.68-5-7-.81-1.13-1.63-2.24-2.44-3.36-.58-.81-1.17-1.61-1.76-2.41-93.31-14.79-232.39-25.54-390.64-22.09,0,0,148.08-28.88,356.4-21.61-.31-.37-.62-.75-.94-1.12q-1.68-2-3.38-4l-2.61-3.05q-3.08-3.58-6.18-7.12c-.79-.89-1.56-1.79-2.35-2.67-1.24-1.41-2.5-2.81-3.75-4.21l-2.3-2.55q-1.93-2.16-3.9-4.3l-.11-.12q-4.52-4.93-9.11-9.78c-.65-.69-1.3-1.38-2-2.06q-2.1-2.22-4.22-4.42l-1.58-1.62q-4.37-4.5-8.78-8.92l-.89-.9-4.61-4.56-1.56-1.52q-7.37-7.22-14.89-14.22l-1.19-1.11q-2.52-2.34-5-4.65l-.45-.41q-8.07-7.36-16.29-14.48l-.85-.74q-8.17-7.08-16.51-13.91l-.55-.45Q1396.1,186,1384.3,177l-.29-.22q-8.84-6.75-17.84-13.25l-.13-.09q-12.13-8.78-24.54-17.08c-284.89,3.48-511.3,217-511.3,217,50-102,186.59-227.38,353.08-300.63h0A867.44,867.44,0,0,0,847.56.08c-37.1,39.41-196.33,225.17-202.3,516.53-21.51-65.54-34.22-139.91-34.55-220-72.54,287.49,17.59,544.8,17.59,544.8S434.12,427.92,606.73,39.09l1.9-1.65h0l-4.32,1.34L600,40.14l-4.37,1.4c-2.37.77-4.74,1.54-7.11,2.33-1.45.48-2.9,1-4.35,1.47s-2.87,1-4.31,1.47l-4.32,1.5q-3.53,1.23-7,2.51l-4.35,1.58L559.78,54c-2,.73-3.93,1.47-5.9,2.22l-5.32,2.05c-1.46.56-2.91,1.14-4.36,1.71l-4.4,1.76-6.3,2.55-4.75,2-4.33,1.82-4.57,2-6.32,2.75-4.47,2-4.29,1.93c-1.64.74-3.27,1.49-4.91,2.25q-3,1.4-6.05,2.82l-4.31,2c-1.42.68-2.83,1.35-4.24,2-1.91.92-3.82,1.86-5.72,2.8s-3.5,1.73-5.25,2.61l-4.22,2.13-4.18,2.14c-2.28,1.18-4.56,2.36-6.84,3.56l-4.1,2.18-4.17,2.24-4.09,2.22c-2.27,1.25-4.53,2.5-6.8,3.77l-4.09,2.3-4.17,2.38L427,116.9c-2,1.18-4,2.36-6.05,3.56q-2,1.2-4.06,2.42l-4.23,2.56q-2.78,1.68-5.54,3.39l-4.17,2.59c-55.68,74.75-71.24,176-65.8,251.15,0,0-20.22-69.39-26-123.48,0,0-20.62,88.3,3.18,283.85h0c7.83,47.33,18.39,98.53,32.51,153.07-89.95-142.65-135-285-146.75-388.74Q186.94,322.89,174.61,339l-1.15,1.5q-3.81,5-7.54,10.07l-.11.15C220.36,723,539,1124,876,1176.11c-364.16,93.52-722.43-28.84-862.41-146.92.2,1,.39,2,.59,3s.39,2,.59,3c.61,3,1.22,5.94,1.86,8.9.1.49.21,1,.32,1.45q.84,3.9,1.72,7.78l.66,2.89q.83,3.61,1.69,7.21c.16.68.32,1.37.49,2.06.72,3,1.47,6,2.23,9,.19.79.4,1.57.6,2.35q.9,3.56,1.85,7.1c.23.86.45,1.73.69,2.59q3.66,13.66,7.8,27.25c210.36,275,486.69,320,486.69,320-82.22-47.36-133.08-85.72-185.84-150.41,0,0,123.23,55.82,296.62,71.54-53-17.46-82.83-38.71-82.83-38.71,201.4,48.4,358.87,14.21,358.87,14.21S766.51,1398,584.26,1396.3a2087.84,2087.84,0,0,0,214.66,18.56s-346.76,138-634.26-43.58c0,0-1.24-.89-3.49-2.81a860,860,0,0,0,141.58,153.16c256.45,55.45,608.7-59.34,760.93-213.06,0,0-141.22,242.13-520.25,356.94a867.15,867.15,0,0,0,170.39,47.74c194.48-137.49,484.51-409.24,462.5-639.51,28.55,42.31,42.64,81.68,45.1,88.91l.4,1.19a212.54,212.54,0,0,0-1.82-38.21c-7.91-81.33-40.7-137.16-81.76-175.3,20.1,85.49-33.35,170.14-33.35,170.14,34.29-125.62-15-293.63-139.51-314-1.69-.06-3.83-.17-6.5-.34a199.8,199.8,0,0,0-53.7,3.53,194.09,194.09,0,0,0-61.42,29,124.85,124.85,0,0,0-34.3,47.27C783.14,948,826.8,992.57,826.8,992.57,694,951.09,692.57,792,696.3,805c3.65,12.69,6.49,30.83,39.07,83.06-35.24-82-6.15-176.75,61.91-256.92C729.85,683.28,704,741.56,704,741.56s-24.66-191.62,282-359.86c-100.25,78-150.53,143.74-169.67,200.2,0,0,422.92-307.74,885.69,89.74q-5.6-24.64-12.7-49.07c-75.74-62.1-167.24-99.25-223-123.19,87,20.26,153.35,55.55,216.08,100.61A864.43,864.43,0,0,0,1590.34,402.71ZM973.84,892.62c-40.8-23.48-84.15-21.11-131.25,19.14C846.66,869.25,930.73,826.6,973.84,892.62Z"
                            style={{ fill: "rgb(128, 209, 230)" }}
                        />
                        <path
                            d="M71.65,513.05q-9.33,21.11-17.53,42.66l-.17.45q-1.91,5-3.75,10.09c-.15.39-.29.78-.43,1.17q-1.73,4.76-3.4,9.52l-.48,1.37q-1.65,4.76-3.26,9.52c-.13.41-.27.82-.41,1.24q-1.68,5-3.29,10c0,.15-.1.3-.14.45C67.68,655.22,123.67,741.45,198.87,833c0,0-84.24-72.71-171.18-195.78Q17,676.59,10.07,716.91a1.7,1.7,0,0,0,0,.22Q9.19,722,8.41,726.9c0,.16-.05.32-.08.49q-.76,4.75-1.47,9.52c0,.25-.07.51-.11.77q-.68,4.64-1.32,9.28c0,.33-.09.67-.13,1Q4.68,752.5,4.12,757L4,758.26c-.36,3-.71,5.93-1.05,8.9l-.15,1.39q-.48,4.38-.93,8.77l-.15,1.51c-.28,2.89-.55,5.79-.81,8.68-.05.52-.09,1-.13,1.57C.49,792,.26,794.86,0,797.75l0,.46c120.66,191.35,411.42,401.43,876,377.9C500.44,1143.5,133.86,724.72,71.71,512.93Z"
                            style={{ fill: "rgb(128, 209, 230)" }}
                        />
                        <path d="M1327.66,551.23s265.5,105.21,322.86,437.56c6,89.16-2.18,183.44-29.56,282.11a866.2,866.2,0,0,0,90.75-550.38C1597.64,626.18,1465.27,553.13,1327.66,551.23Z" style={{ fill: "rgb(128, 209, 230)" }} />
                        <path d="M1318.76,1359.76c11.88-79.17,10.64-154.6-.63-222.66-14,106.63-61.72,317.61-223.29,556.5A860.61,860.61,0,0,0,1281.77,1616l1.7-1.08c257.28-475.92,73.79-794,73.79-794S1459.29,1032.49,1318.76,1359.76Z" style={{ fill: "rgb(128, 209, 230)" }} />
                    </g>
                </svg>
            </div>
            <img src="https://ravenscourt-strapi.deeparc.net/uploads/1_card_hero_9a9d33185b.png" alt="" className="character" />
            <div className="out__now absolute bottom-0 left-0 rounded-bl-3xl rounded-tr-3xl px-8 py-3 bg-ravenred">
                <span className="uppercase font-extrabold realtive z-20">Out now</span>
            </div>
        </a>
    );
}
