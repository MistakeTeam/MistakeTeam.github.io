import React from "react";
import CoffeeStainCard from "./CoffeeStainCard";
import Boxdragon from "./SVGs/CoffeeStainLogos/Boxdragon";
import CoffeeStainMalmo from "./SVGs/CoffeeStainLogos/CoffeeStainMalmo";
import CoffeeStainNorth from "./SVGs/CoffeeStainLogos/CoffeeStainNorth";
import CoffeeStainPublishing from "./SVGs/CoffeeStainLogos/CoffeeStainPublishing";
import CoffeeStainStudios from "./SVGs/CoffeeStainLogos/CoffeeStainStudios";
import EasyTrigger from "./SVGs/CoffeeStainLogos/EasyTrigger";
import GhostShip from "./SVGs/CoffeeStainLogos/GhostShip";
import InvisibleWalls from "./SVGs/CoffeeStainLogos/InvisibleWalls";
import Lavapotion from "./SVGs/CoffeeStainLogos/Lavapotion";
import TuxedoLabs from "./SVGs/CoffeeStainLogos/TuxedoLabs";
import WavesSeparator from "./SVGs/WavesSeparator";

export default function CoffeeStain() {
    return (
        <section className="studios col-span-full  coffee-stain-studios z-10">
            <div className="container relative z-20 flex flex-col-reverse items-center lg:flex-row gap-10 pt-20 lg:pt-48 pb-48">
                <div className="studios w-full lg:w-9/12 grid gap-3 lg:gap-6 grid-cols-2 md:grid-cols-4 xl:grid-cols-5">
                    <CoffeeStainCard Logo={CoffeeStainStudios} url="https://coffeestain.com/studio/coffee-stain/"></CoffeeStainCard>
                    <CoffeeStainCard Logo={CoffeeStainNorth} url="https://coffeestain.com/studio/coffee-stain-north/"></CoffeeStainCard>
                    <CoffeeStainCard Logo={CoffeeStainPublishing} url="https://coffeestain.com/studio/coffee-stain-publishing/"></CoffeeStainCard>
                    <CoffeeStainCard Logo={CoffeeStainMalmo} url="https://coffeestain.com/studio/coffee-stain-malmo/"></CoffeeStainCard>
                    <CoffeeStainCard Logo={Lavapotion} url="https://www.lavapotion.com/"></CoffeeStainCard>
                    <CoffeeStainCard Logo={Boxdragon} url="https://www.boxdragon.se/"></CoffeeStainCard>
                    <CoffeeStainCard Logo={EasyTrigger} url="https://easytrigger.com/"></CoffeeStainCard>
                    <CoffeeStainCard Logo={InvisibleWalls} url="https://www.invisiblewalls.co/"></CoffeeStainCard>
                    <CoffeeStainCard Logo={GhostShip} url="https://ghostship.dk/"></CoffeeStainCard>
                    <CoffeeStainCard Logo={TuxedoLabs} url="https://tuxedolabs.com/"></CoffeeStainCard>
                </div>
                <div className="studios-content w-full lg:w-[25%] text-center lg:text-right flex flex-col justify-center items-center lg:items-end gap-3">
                    <p className="!font-secondary text-primary uppercase !text-h3 mx-auto lg:mx-0">Say Hi To The</p>
                    <div className="title mx-auto lg:mx-0">
                        <p>
                            Coffee
                            <br />
                            Stain
                            <br />
                            Family
                        </p>
                    </div>
                    <div className="text">
                        <p>Coffee Stain comprises of many people and many parts. Please welcome all our studios…</p>
                    </div>
                    <div className="flex items-center justify-center lg:justify-end gap-3 relative w-auto">
                        <div className="button-container pt-4">
                            <a href="https://coffeestain.com/about" className="btn btn--secondary">
                                <div className="light"></div>
                                <span className="btn-text">About Us</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-bg">
                <WavesSeparator style_background="grey-100"></WavesSeparator>
            </div>
        </section>
    );
}
