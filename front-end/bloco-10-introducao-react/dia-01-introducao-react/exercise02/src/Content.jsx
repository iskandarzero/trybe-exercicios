import React from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

// class Content extends React.Component {
//   render() {
//     return conteudos.map((teste) => <div><p>{`O conteúdo é: ${teste.conteudo}`}</p>
//     <p>{`Status: ${teste.status}`}</p>
//     <p>{`Bloco: ${teste.bloco}`}</p></div>)
//   }
// }

class Content extends React.Component {
  render() {
    return (
      <div className = 'Contents'>
        {conteudos.map((teste) => (
          <div key={teste.conteudo} className='Content'>
            <h3>{`O conteúdo é: ${teste.conteudo}`}</h3>
            <p>{`Status: ${teste.status}`}</p>
            <p>{`Bloco: ${teste.bloco}`}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Content