import React, { Component } from 'react';
import productsData from './data/products.json';

class ProductCard extends Component {
  render() {
    const { name, image, price } = this.props;

    return (
      <div className="product-card">
        <img src={image} alt={name} className="product-image" />
        <h3 className="product-name">{name}</h3>
        <p className="product-price">{price}</p>
      </div>
    );
  }
}

class MiniCardProdutos extends Component {
  render() {
    const products = productsData;

    return (
      <div className="related-products-miniCard">
        <div className="product-list">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default MiniCardProdutos;
