import "./index.less";

import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router";

import Logo from "../assets/MistakeTeam_Logo.svg";
import RemyHome from "./Remy";
import LogoRemy from "./Componentes/SVGs/LogoRemy";
import WavesSeparator from "./Componentes/SVGs/WavesSeparator";

export default function App() {
    const useNav = useNavigate();

    function removeClassfromElement(e: Element, to: number = 0) {
        for (let i = 0; i < e.classList.length; i++) {
            if (to === 0) to = e.classList.length;
            if (i === 0 || i >= to) continue;
            const element = e.classList[i];
            e.classList.remove(element);
        }
    }

    function ClickRoute(to: string) {
        const nav = document.getElementsByClassName("nav-bar")[0];
        removeClassfromElement(nav);
        if (to.length > 1) nav.classList.add(`nav-${to.slice(1, to.length)}`);
        useNav(to);
    }

    useEffect(() => {
        const nav = document.getElementsByClassName("nav-bar")[0];
        removeClassfromElement(nav);
        if (location.pathname.length > 1) nav.classList.add(`nav-${location.pathname.slice(1, location.pathname.length)}`);
    }, []);

    return (
        <>
            <nav className="nav-root">
                <ul className="nav-bar">
                    <div id="nav-logo" onClick={() => ClickRoute("/")}>
                        <Logo />
                    </div>
                    <div>
                        <slot>
                            <Routes>
                                <Route path="/remy/*" element={<LogoRemy />} />
                            </Routes>
                        </slot>
                        <slot>
                            <li>
                                <button type="button" onClick={() => ClickRoute("/remy")}>
                                    <span>Remy</span>
                                </button>
                            </li>
                            <li>
                                <button type="button" onClick={() => ClickRoute("/any")}>
                                    <span>Warcraft</span>
                                </button>
                            </li>
                        </slot>
                    </div>
                </ul>
            </nav>
            <div className="universe">
                <div className="mist-page-store">
                    <Routes>
                        <Route path="/*" element={<RemyHome />} />
                        <Route path="/remy/*" element={<RemyHome />} />
                    </Routes>
                </div>
                <footer className="bg-black-30">
                    <div
                        style={{
                            zIndex: 16,
                            position: "relative",
                        }}
                    >
                        <section>
                            <button type="button">
                                <span>Sobre</span>
                            </button>
                        </section>
                        <section />
                        <section />
                    </div>
                    <div
                        className="section-bg"
                        style={{
                            top: "-9rem",
                            zIndex: 10,
                        }}
                    >
                        <WavesSeparator style_background="black-30"></WavesSeparator>
                    </div>
                </footer>
            </div>
        </>
    );
}
