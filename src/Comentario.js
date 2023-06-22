import React from 'react';
import comentariosData from './data/dataComentario.json';

class Comentario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'todos',
    };
  }

  handleTabChange = (tab) => {
    this.setState({ currentTab: tab });
  };

  handleVerOpinioesClick = () => {
    alert('Por que você apertou o botão? Ele é FAKE, cara!!!');
  };

  render() {
    const { currentTab } = this.state;

    const comentarios = comentariosData;

    const comentariosAtuais = comentarios[currentTab];

    return (
      <div className="component">
        <div className="tabs">
          <button
            className={currentTab === 'todos' ? 'active' : ''}
            onClick={() => this.handleTabChange('todos')}
          >
            Todos
          </button>
          <button
            className={currentTab === 'positivas' ? 'active' : ''}
            onClick={() => this.handleTabChange('positivas')}
          >
            Positivas
          </button>
          <button
            className={currentTab === 'negativas' ? 'active' : ''}
            onClick={() => this.handleTabChange('negativas')}
          >
            Negativas
          </button>
        </div>

        <div className="comments">
          {/* Comentários */}
          {comentariosAtuais.map((comentario, index) => (
            <div className="comment" key={index}>
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
              <div className="text">{comentario.text}</div>
              <div className="time">{comentario.time}</div>
            </div>
          ))}
        </div>

        <button className="ver-opinioes" onClick={this.handleVerOpinioesClick}>
          Ver outras opiniões
        </button>
      </div>
    );
  }
}

export default Comentario;
