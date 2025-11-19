import React, { Component, useEffect, useRef, useState } from "react";
import useMousePosition from "../../hooks/useMousePosition";
import { randomNum, scale } from "../../utility/math";

interface CoffeeStainCardProps {
    Logo: typeof Component;
    url: string;
}

interface LightColorProps {
    r: number;
    g: number;
    b: number;
}

export default function CoffeeStainCard({ Logo, url }: CoffeeStainCardProps) {
    const refRoot = useRef<HTMLAnchorElement>(null);
    const { x, y } = useMousePosition();
    const [transform, setTransform] = useState<string>();
    const [opacity, setOpacity] = useState<string>();
    const [transition, setTransition] = useState<string>();
    const [transitionShadow, setTransitionShadow] = useState<string>();
    const [boxShadow, setBoxShadow] = useState<string>();
    const [svgBoxShadow, setSvgBoxShadow] = useState<string>();
    const [lightPos, setLightPos] = useState({ top: "", left: "" });
    const [logoPos, setLogoPos] = useState({ top: "", left: "" });
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
    const [LightColor, setLightColor] = useState<LightColorProps>({
        r: 0,
        g: 0,
        b: 0,
    });

    function OnMouseLeave() {
        setTransform("rotate(0deg)");
        setOpacity("0");
        setTransition("0.6s ease-in-out");
        setTransitionShadow("1s linear");
        setBoxShadow("rgba(0, 0, 0, 0) 0px 0px 0px 0px");
        setSvgBoxShadow("rgba(0, 0, 0, 0.2) 0px 0px 0px");
        setLightPos({
            top: "50%",
            left: "50%",
        });
        setLogoPos({
            top: "50%",
            left: "50%",
        });
    }

    function OnMouseMove() {
        let Xn = Math.floor(scale(x, dimensions.left, dimensions.right, -3, 3));
        let Yn = Math.floor(scale(y, dimensions.top, dimensions.bottom, -3, 3));
        let Xn_shadow = Math.floor(scale(x, dimensions.left, dimensions.right, -8, 8));
        let Yn_shadow = Math.floor(scale(y, dimensions.top, dimensions.bottom, -8, 8));

        setTransform(`scale(1) rotateX(${-Yn}deg) rotateY(${Xn}deg)`);
        setOpacity("1");
        setTransition("linear");
        setTransitionShadow("linear");
        setBoxShadow(`rgba(0, 0, 0, 0.6) ${-Xn_shadow}px ${-Yn_shadow}px 8px -4px`);
        setSvgBoxShadow(`rgba(0, 0, 0, 0.2) ${-Xn_shadow}px ${-Yn_shadow}px 1px`);
        setLightPos({
            left: `${x - dimensions.left}px`,
            top: `${y - dimensions.top}px`,
        });
        setLogoPos({
            left: `calc(50% + ${Xn}px)`,
            top: `calc(50% + ${Yn}px)`,
        });
    }

    useEffect(() => {
        setLightColor({
            r: Math.floor(randomNum(0, 255)),
            g: Math.floor(randomNum(0, 255)),
            b: Math.floor(randomNum(0, 255)),
        });

        const handleScroll = () => {
            if (refRoot.current) {
                setDimensions(refRoot.current.getBoundingClientRect());
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
            href={url}
            rel="noopener noreferrer"
            className="studio-card relative w-full text-base studio-card"
            style={{
                transition,
                transform,
                zIndex: 0,
                backgroundColor: "rgba(197, 196, 195, 1)",
                boxShadow,
            }}
            ref={refRoot}
            onMouseMove={OnMouseMove}
            onMouseLeave={OnMouseLeave}
        >
            <div
                className="light"
                style={{
                    transition,
                    background: `radial-gradient(rgba(${LightColor.r}, ${LightColor.g}, ${LightColor.b}, 0.8) 12%, rgba(255, 255, 255, 0))`,
                    opacity,
                    top: lightPos.top,
                    left: lightPos.left,
                }}
            ></div>
            <div
                className="studio-logo duration-200 h-full text-center w-full p-10"
                style={{
                    transition,
                    top: logoPos.top,
                    left: logoPos.left,
                }}
            >
                <Logo svgBoxShadow={svgBoxShadow} transition={transitionShadow}></Logo>
            </div>
            <div className="studio-logo">
                <h1 className="studio-name duration-200 text-center text-lg px-2 lg:px-1 uppercase font-secondary sr-only">Coffee Stain Studios</h1>
            </div>
        </a>
    );
}
