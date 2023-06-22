import React from 'react';
import perguntasData from './data/dataPerguntas.json';
import './App.css';

class Perguntas extends React.Component {
  render() {
    return (
      <div className="perguntas-container">
        <h3 className="perguntas-title">Perguntas de outros usuários</h3>
        <ul className="perguntas-list">
          {perguntasData.map((pergunta) => (
            <li key={pergunta.id} className="pergunta-item">
              <div className="pergunta-usuario">{pergunta.usuario}</div>
              <div className="pergunta-data">Data de publicação: {pergunta.dataPublicacao}</div>
              <div className="pergunta-duvida">Dúvida: {pergunta.duvida}</div>
              <div className="pergunta-resposta">Resposta: {pergunta.resposta}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Perguntas;
