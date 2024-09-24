// src/app/aluno/[id]/page.js


import { use } from 'react';
import Layout from '../../../components/Layout.js';
import AlunoDetalhes from '../../../components/AlunoDetalhes'; // ajuste o caminho se necessário

export default function AlunoPage({ params }) {
  const { id } = params;
  const aluno = use(fetch(`http://127.0.0.1:8000/api/v1/alunos/${id}`).then(res => res.json()));

  if (!aluno) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <Layout>
        <div>
          <h1>Detalhes do Aluno</h1>
          <AlunoDetalhes aluno={aluno} />
        </div>
      </Layout>
    </>
  );
}