import React from 'react';

class MainMenu extends React.Component {
  render() {
    return (
      <nav className='menuPrincipal-nav'>
        <ul>
          <li><h2><a href='#'>Home</a></h2></li>
          <li><h2><a href='#'>Produtos</a></h2></li>
          <li><h2><a href='#'>Carrinho</a></h2></li>
          <li><h2><a href='#'>Contato</a></h2></li>
        </ul>
      </nav>
    );
  }
}

export default MainMenu;
