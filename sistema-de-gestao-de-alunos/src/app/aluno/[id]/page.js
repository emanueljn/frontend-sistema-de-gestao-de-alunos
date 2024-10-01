import { use } from 'react';
import Layout from '../../../components/Layout.js';
import AlunoDetalhes from '../../../components/AlunoDetalhes';

export default function AlunoPage({ params }) {
  const { id } = params;
  const aluno = use(fetch(`http://127.0.0.1:8000/api/v1/alunos/${id}`).then(res => res.json()));

  if (!aluno) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <Layout>
          <AlunoDetalhes aluno={aluno} />
      </Layout>
    </>
  );
}