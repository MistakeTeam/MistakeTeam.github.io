import React, { JSX } from "react";
import CoffeeStain from "../Componentes/CoffeeStain";
import MosaicoProduto from "../Componentes/MosaicoProduto";
import Swiper from "../Componentes/Swiper";

export default function RemyHome() {
    function removeClassfromElement(e: Element, to: string) {
        for (let i = 0; i < e.classList.length; i++) {
            const element = e.classList[i];
            if (element !== to) continue;
            e.classList.remove(element);
        }
    }

    function carrosselHoverClick() {
        const carrosselItens = document.getElementsByClassName("carrossel-box")[0].getElementsByClassName("carrossel-item");
        for (let i = 0; i < document.getElementsByClassName("carrossel-box")[0].getElementsByClassName("carrossel-item").length; i++) {
            if (carrosselItens[i].classList.contains("carrossel-item-visible")) {
                removeClassfromElement(carrosselItens[i], "carrossel-item-visible");
                (carrosselItens[i + 1] ?? carrosselItens[0]).classList.add("carrossel-item-visible");
                return;
            }
        }
    }

    function carrosselHoverClick2() {
        const carrosselItens = document.getElementsByClassName("carrossel-box")[0].getElementsByClassName("carrossel-item");
        for (let i = 0; i < document.getElementsByClassName("carrossel-box")[0].getElementsByClassName("carrossel-item").length; i++) {
            if (carrosselItens[i].classList.contains("carrossel-item-visible")) {
                removeClassfromElement(carrosselItens[i], "carrossel-item-visible");
                (carrosselItens[i - 1] ?? carrosselItens[carrosselItens.length - 1]).classList.add("carrossel-item-visible");
                return;
            }
        }
    }

    /// GERADOR DE MOSAICO
    let VerfCasa = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let ArrMosaico = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let rows: JSX.Element[] = [];

    function EscolhaNumeroMinMax(max = 3) {
        return Math.floor(Math.random() * (max - 0 + 1)) + 0;
    }
    function EscolhaEntreDoisNumeros(n1: number, n2: number) {
        return Math.random() > 0.5 ? n1 : n2;
    }
    function GenNum(i: number) {
        if (ArrMosaico[i] === -1 || VerfCasa[i] === 1) {
            // console.debug("==> casa verificada (pulando)");
            VerfCasa[i] = 1;
            // console.debug(VerfCasa);
            // console.debug(ArrMosaico);
            return;
        }

        if (i % 2 !== 0) {
            if (i === 11) {
                // console.debug("==> 11 indice do loop");
                ArrMosaico[i] = 0;
                // console.debug(VerfCasa);
                // console.debug(ArrMosaico);
                return;
            }
            ArrMosaico[i] = EscolhaEntreDoisNumeros(0, 2);
            return;
        }
        if (i === 10) {
            // console.debug("==> 10 indice do loop");
            ArrMosaico[i] = EscolhaNumeroMinMax(1);
            // console.debug(VerfCasa);
            // console.debug(ArrMosaico);
            return;
        }

        if (ArrMosaico[i - 1] !== undefined) {
            if (ArrMosaico[i - 1] === 1) {
                // console.debug("==> casa anterior é vertical");
                ArrMosaico[i] = EscolhaNumeroMinMax(2);
                ArrMosaico[i + 1] = EscolhaNumeroMinMax(2);
                VerfCasa[i + 1] = 1;
                // console.debug(VerfCasa);
                // console.debug(ArrMosaico);
                return;
            }
            if (ArrMosaico[i - 1] === 2) {
                // console.debug("==> casa anterior é horizontal");
                // console.debug(ArrMosaico[i - 1])
                ArrMosaico[i] = 0;
                VerfCasa[i] = 1;
                // console.debug(VerfCasa);
                // console.debug(ArrMosaico);
                return;
            }
        }

        // console.debug("==> gerando um numero (ultimo)");
        ArrMosaico[i] = EscolhaNumeroMinMax();
        // console.debug(VerfCasa);
        // console.debug(ArrMosaico);
    }

    function GenArrMosaico() {
        // console.group()
        // console.debug(VerfCasa);
        // console.debug(ArrMosaico);
        VerfCasa = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        ArrMosaico = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        rows = [];
        for (let i = 0; i < ArrMosaico.length; i++) {
            // console.debug("================================");
            // console.debug(i);
            GenNum(i);

            // console.debug("==> verificando casas");
            if (ArrMosaico[i] === 1) {
                // console.debug("==> casa vertical");
                if (ArrMosaico[i + 1] == null) continue;
                ArrMosaico[i + 1] = -1;
                VerfCasa[i + 1] = 1;
            } else if (ArrMosaico[i] === 2) {
                // console.debug("==> casa horizontal");
                if (i === 9) {
                    // if (ArrMosaico[i + 2] == null) continue;
                    ArrMosaico[i + 1] = 0;
                    VerfCasa[i + 1] = 1;
                }
                if (ArrMosaico[i + 2] == null) continue;
                ArrMosaico[i + 2] = -1;
                VerfCasa[i + 2] = 1;
            } else if (ArrMosaico[i] === 3) {
                // console.debug("==> casa grande");
                if (ArrMosaico[i + 1] || ArrMosaico[i + 2] || ArrMosaico[i + 3] == null) continue;
                ArrMosaico[i + 1] = -1;
                VerfCasa[i + 1] = 1;
                ArrMosaico[i + 2] = -1;
                VerfCasa[i + 2] = 1;
                ArrMosaico[i + 3] = -1;
                VerfCasa[i + 3] = 1;
            } else {
                // console.debug("==> casa normal :)");
            }
            VerfCasa[i] = 1;
            // console.debug(VerfCasa);
            // console.debug(ArrMosaico);
        }
        // console.debug("==============FIM===============");
        // console.debug(VerfCasa);
        // console.debug(ArrMosaico);
        // console.groupEnd()

        for (let i = 0; i < ArrMosaico.length; i++) {
            const priori = ArrMosaico[i];
            if (priori === -1) continue;

            rows.push(
                <MosaicoProduto
                    key={i}
                    nome="S.T.A.L.K.E.R.: Shadow of Chernobyl"
                    cover={{
                        url: "https://images.gog-statics.com/384064881c0c18cbd2b7ebc076c0d905f0a6b5c17e6c37814cc52287e1cc46c3_product_tile_extended_432x243_2x.jpg",
                    }}
                    preco={{
                        agora: "19,99",
                        velho: "7,99",
                    }}
                    display={{
                        prioridade: priori,
                    }}
                />,
            );
        }
        // console.debug(rows);
    }

    const mosaicorows: JSX.Element[] = [];
    for (let g = 0; g < 3; g++) {
        GenArrMosaico();
        mosaicorows.push(
            <div className="mosaico__row" key={g * 299}>
                {rows}
            </div>,
        );
    }
    /// /////////////////////////////////////////////////////////////////

    return (
        <>
            <section className="cabeçalho-destaques promo-container">
                <div className="promo-item">
                    <div className="promo-background">
                        <img src="https://web.archive.org/web/20180508185145im_/https://images-2.gog.com/b6fdd140ff2f2f91a6673e666325d10c032bee2edc99d0274f28260de6e3eb8d.jpg" alt="Pillars of Eternity II: Deadfire" />
                    </div>
                    <div className="promo-content" />
                </div>
            </section>
            <section className="mosaico">
                <div className="mosaico-container">{mosaicorows}</div>
            </section>
            <section className="carrossel-destaques carrossel-box">
                <div className="carrossel-hover">
                    <div className="carrossel-hover-esquerda" onClick={carrosselHoverClick2} />
                    <div className="carrossel-hover-direita" onClick={carrosselHoverClick} />
                </div>
                <div className="carrossel-container">
                    <div className="carrossel-item carrossel-item-visible">
                        <div className="carrossel-background">
                            <img src="https://web.archive.org/web/20180508185145im_/https://images-2.gog.com/b6fdd140ff2f2f91a6673e666325d10c032bee2edc99d0274f28260de6e3eb8d.jpg" alt="Pillars of Eternity II: Deadfire" />
                        </div>
                        <div className="carrossel-content" />
                    </div>
                    <div className="carrossel-item ">
                        <div className="carrossel-background">
                            <img src="https://web.archive.org/web/20181129073030im_/https://images-1.gog.com/a5490e1be79e776d353360cfc2cad3b5c73fd4a54ec063fb2d7587cd9ffeb50d.jpg" alt="" />
                        </div>
                        <div className="carrossel-content" />
                    </div>
                    <div className="carrossel-item ">
                        <div className="carrossel-background">
                            <img src="https://web.archive.org/web/20181128012924im_/https://images-4.gog.com/13da701fe0aa61970907f7ae85cfe7f652e315f811976448c559c56fdf93b813.jpg" alt="" />
                        </div>
                        <div className="carrossel-content" />
                    </div>
                    <div className="carrossel-item ">
                        <div className="carrossel-background">
                            <img src="https://web.archive.org/web/20181128012924im_/https://images-1.gog.com/1202fab854e76a87f9d58ab64e5f7b24173986a3062da18c23e4aa0ddc2cc384.jpg" alt="" />
                        </div>
                        <div className="carrossel-content" />
                    </div>
                    <div className="carrossel-item ">
                        <div className="carrossel-background">
                            <img src="https://web.archive.org/web/20200314055215im_/https://images-3.gog-statics.com/34b5672b5fc7804810fcee820371eaef137b5c2358caa419b2f9dfe702cd7610_bs_background_1275.jpg" alt="" />
                        </div>
                        <div className="carrossel-content" />
                    </div>
                </div>
            </section>
            <section className="carrossel-destaques carrossel-destaques-wide">
                <div className="carrossel-hover">
                    <div className="carrossel-hover-esquerda" onClick={carrosselHoverClick2} />
                    <div className="carrossel-hover-direita" onClick={carrosselHoverClick} />
                </div>
                <div className="carrossel-container">
                    <div className="carrossel-item carrossel-item-visible">
                        <div className="carrossel-background">
                            <img src="https://web.archive.org/web/20180508185145im_/https://images-2.gog.com/b6fdd140ff2f2f91a6673e666325d10c032bee2edc99d0274f28260de6e3eb8d.jpg" alt="Pillars of Eternity II: Deadfire" />
                        </div>
                        <div className="carrossel-content" />
                    </div>
                    <div className="carrossel-item ">
                        <div className="carrossel-background">
                            <img src="https://web.archive.org/web/20181129073030im_/https://images-1.gog.com/a5490e1be79e776d353360cfc2cad3b5c73fd4a54ec063fb2d7587cd9ffeb50d.jpg" alt="" />
                        </div>
                        <div className="carrossel-content" />
                    </div>
                    <div className="carrossel-item ">
                        <div className="carrossel-background">
                            <img src="https://web.archive.org/web/20181128012924im_/https://images-4.gog.com/13da701fe0aa61970907f7ae85cfe7f652e315f811976448c559c56fdf93b813.jpg" alt="" />
                        </div>
                        <div className="carrossel-content" />
                    </div>
                    <div className="carrossel-item ">
                        <div className="carrossel-background">
                            <img src="https://web.archive.org/web/20181128012924im_/https://images-1.gog.com/1202fab854e76a87f9d58ab64e5f7b24173986a3062da18c23e4aa0ddc2cc384.jpg" alt="" />
                        </div>
                        <div className="carrossel-content" />
                    </div>
                    <div className="carrossel-item ">
                        <div className="carrossel-background">
                            <img src="https://web.archive.org/web/20200314055215im_/https://images-3.gog-statics.com/34b5672b5fc7804810fcee820371eaef137b5c2358caa419b2f9dfe702cd7610_bs_background_1275.jpg" alt="" />
                        </div>
                        <div className="carrossel-content" />
                    </div>
                </div>
            </section>
            <section className="blog">
                <div className="blog-container">
                    <div className="blog-row">
                        <div className="blog-postagem">
                            <div className="blog-capa">
                                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/298050/header_292x136.jpg?t=1708071557" alt="" />
                            </div>
                            <div className="blog-content">
                                <p className="blog-resume">Curabitur accumsan turpis quis metus hendrerit egestas. Aenean in pharetra nunc, et elementum odio. Praesent non convallis libero. Vivamus nec nibh faucibus, sodales dui vitae, eleifend libero.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="swiper featured__swiper swiper-container">
                <div className="swiper-wrapper">
                    <Swiper></Swiper>
                </div>
            </section>
            <section className="games-archive relative z-10 w-full pt-[5rem] max-md:pb-16 -mt-48 md:-mt-40 lg:-mt-48 show- game-press-">
                <div className="container relative z-30">
                    <h2 className="font-secondary text-2xl md:text-3xl uppercase mb-4 lg:-mt-10 text-grey-100 pt-4 md:pb-8 lg:pb-12 xl:pb-24">
                        Games
                        <div id="games-list" className="parent w-full" data-limit="9" style={{ transition: "height 0.4s" }}>
                            <div className="relative flex flex-col game-card">
                                <a href="https://coffeestain.com/game/as-we-descend/" className="w-full">
                                    <div className="game-card-image relative w-full aspect-[16/9]">
                                        <div className="game-logo relative aspect-[16/9] bottom-0 drop-shadow-md ease-out duration-200 z-20 flex items-center justify-center p-0 h-full">
                                            <img loading="lazy" alt="" decoding="async" src="https://coffeestain.com/wp-content/uploads/as-we-descend-logo.webp" width="550" height="450" className="image object-center object-contain h-full w-full px-8 max-h-[145px] max-w-[400px]" />
                                        </div>
                                        <div className="game-card-image--foreground">
                                            <img loading="lazy" alt="" decoding="async" src="https://coffeestain.com/wp-content/uploads/as-we-descend-foreground.webp" width="800" height="800" className="fg-image ease-out duration-200 absolute top-0 left-0 z-0 image object-cover object-center w-full h-full" />
                                        </div>
                                        <div className="game-card-image--background">
                                            <img loading="lazy" alt="" decoding="async" src="https://coffeestain.com/wp-content/uploads/as-we-descend-bg.webp" width="800" height="800" className="bg-image duration-300 ease-out absolute top-0 left-0 z-0 image object-cover object-center w-full h-full" />
                                        </div>
                                    </div>
                                    <h3 className="title duration-200 py-3 font-secondary uppercase text-primary text-md">As We Descend</h3>
                                </a>
                            </div>
                        </div>
                    </h2>
                </div>
            </section>
            <CoffeeStain></CoffeeStain>
        </>
    );
}
