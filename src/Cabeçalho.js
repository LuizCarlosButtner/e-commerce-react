import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>SóCamisaFalsa.com</h1>
        <div>
          <input type="text" placeholder="Pesquisar..."></input>
          <span style={{"color":"#fff"}} class="material-symbols-outlined">search</span>
        </div>
      </header>
    );
  }
}

export default Header;
