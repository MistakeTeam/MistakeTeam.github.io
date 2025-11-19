import * as React from "react";

export interface IMosaicoProdutoProps {
    nome: string;
    cover: {
        url: string;
    };
    preco: {
        agora: string;
        velho: string;
    };
    display: {
        prioridade: number;
    };
}

export default class MosaicoProduto extends React.Component<IMosaicoProdutoProps> {
    ToClassPrioridade(a: number): string {
        switch (a) {
            case 1:
                return "mosaico__produto--prioridade-coluna-vertical";
            case 2:
                return "mosaico__produto--prioridade-coluna-horizontal";
            case 3:
                return "mosaico__produto--prioridade-bloco-grande";
            case 4:
                return "mosaico__produto--prioridade-um";
            case 5:
                return "mosaico__produto--prioridade-um";
            case 6:
                return "mosaico__produto--prioridade-um";
            case 7:
                return "mosaico__produto--prioridade-um";
            default:
                return "";
        }
    }

    render() {
        const { nome, display, cover, preco } = this.props;

        return (
            <div className={`mosaico__produto ${this.ToClassPrioridade(display.prioridade)}`}>
                <picture className="produto__img">
                    <img src={cover.url} alt="" />
                </picture>
                <span className="produto__titulo">
                    <span className="titulo">{nome}</span>
                </span>
                <div className="produto__sistema-suportado suporte-win suporte-linux suporte-mac" />
                <div className="produto_info">
                    <div className="preco__desconto" />
                    <div className="preco__btn">
                        <div className="preco__agora">
                            <span>{preco.agora}</span>
                        </div>
                        <div className="preco__velho">
                            <span>{preco.velho}</span>
                        </div>
                        <div className="preco__compre-agora">Compre agora</div>
                    </div>
                </div>
            </div>
        );
    }
}
