import React from 'react';

const Mensagem = ({ texto }) => {
  const estilo = {
    color: texto.length > 10 ? 'green' : 'red',
  };

  return <p style={estilo}>{`Mensagem: ${texto}`}</p>;
};

export default Mensagem;
