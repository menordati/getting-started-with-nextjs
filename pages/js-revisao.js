import React, { useState } from 'react';
import Mensagem from '../components/Mensagem';
import { fetchDados } from '../lib/api';

const ReviewPage = ({ dadosIniciais }) => {
  const [dados, setDados] = useState(dadosIniciais);

  const removerItem = (index) => {
    setDados(dados.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Exemplo Next.js</h1>
      <Mensagem texto="Olá, mundo!" />
      <ul>
        {dados.map((item, index) => (
          <li key={index} onClick={() => removerItem(index)}>
            {item}
          </li>
        ))}
      </ul>
      <p>Clique no item para remover :)</p>
    </div>
  );
};

export async function getServerSideProps() {
  const dadosIniciais = await fetchDados();
  return { props: { dadosIniciais } };
}

export default ReviewPage;
