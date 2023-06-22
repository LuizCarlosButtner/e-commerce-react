import React from 'react';
import Header from './Cabeçalho';
import MainMenu from './Menu-principal';
import ProdutoInfo from './ProdutoInfo';
import MiniCardProdutos from './MiniCardProdutos'
import VendedorInfo from './VendedorInfo';
import Nota from './Nota'
import Comentario from './Comentario'
import Perguntas from './Perguntas'
import Jequiti from './jequiti'
import './App.css'

class EcommerceApp extends React.Component {
  render() {
    return (
      <div className="ecommerce-app">
        <Jequiti/> 
        <Header />
        <MainMenu />
        <main className="content">
          <ProdutoInfo />
          <MiniCardProdutos />
          <VendedorInfo/>
          <Nota/>
          <Comentario/>
          <Perguntas/>
        
          
        </main>
        <footer className="footer">
          <p>Todos os direitos resevados pra ninguém rs &copy; 2023</p>
        </footer>
      </div>
    );
  }
}

export default EcommerceApp;
