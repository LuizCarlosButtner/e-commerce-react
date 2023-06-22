import React from 'react';
import data from './data/produtoInfo.json';

class ProdutoInfo extends React.Component {
  state = {
    tamanhoSelecionado: null,
    imgPrincipal: data.img1,
  };

  trocaImg = (url) => {
    this.setState({ imgPrincipal: url });
  };

  selecionarTamanho = (tamanho) => {
    const { tamanhoSelecionado } = this.state;
    if (tamanhoSelecionado === tamanho) {
      this.setState({ tamanhoSelecionado: null });
    } else {
      this.setState({ tamanhoSelecionado: tamanho });
    }
  };

  render() {
    const { tamanhoSelecionado, imgPrincipal } = this.state;
    const {
      loja,
      titulo,
      precoAntigo,
      precoNovo,
      parcelas,
      precoBoleto,
      descricao,
      img,
    } = data;

    return (
      <section className="product-info">
        <div className="div-imgCanto">
          {img.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Imagem ${index + 1}`}
              onClick={() => this.trocaImg(url)}
            />
          ))}
        </div>
        <div className="product-info-image">
          <img src={imgPrincipal} alt="Imagem Principal" />
        </div>
        <div className="product-info-details">
          <p>{loja}</p>
          <h2>{titulo}</h2>
          <span className="midleLine">R$ {precoAntigo}</span>{' '}
          <span>R$ {precoNovo}</span>
          <br />
          <span>{parcelas}</span>
          <br />
          <span>
            <strong className="fs">{precoBoleto}</strong> no boleto/pix
          </span>
          {/* estrelas... */}
          <ul className="ul-tamanho">
            {/* tamanhos... */}
          </ul>
          <button>
            Adicionar a Sacola<span className="material-symbols-outlined">local_mall</span>
          </button>
          <p>{descricao}</p>
        </div>
      </section>
    );
  }
}

export default ProdutoInfo;
