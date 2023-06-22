import React from 'react';
import data from './data/dadosVendedor.json'; 

class VendedorInfo extends React.Component {
  render() {
    const { nome, email, telefone } = data;
    console.log({data})

    return (
    
      <div className="seller-info">
        <h3><span className="material-symbols-outlined corBranca">
          storefront
        </span>Informações de {nome}</h3>
        <p>
          <span className="material-symbols-outlined corBranca">
            mail
          </span> {email}
        </p>
        <p>
          <span className="material-symbols-outlined corBranca">
            call
          </span> {telefone}
        </p>
        <p>
        <span className="material-symbols-outlined">star</span>
        <span className="material-symbols-outlined">star</span>
        <span className="material-symbols-outlined">star</span>
        <span className="material-symbols-outlined">star</span>
        <span className="material-symbols-outlined">star_half</span>
        </p>
      </div>
    );
  }
}

export default VendedorInfo;

