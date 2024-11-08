// src/app/aluno/[id]/page.js

import Layout from '../../../components/Layout';
import AlunoDetalhes from '../../../components/AlunoDetalhes';
import Historico from '../../../components/Historico';

export default async function AlunoPage({ params }) {
  const { id } = params;
  
  const res = await fetch(`http://sjweb/api/v1/alunos/${id}`, {
    cache: 'no-store', // Impede o uso de cache
  });

  if (!res.ok) {
    return <div>Aluno não encontrado.</div>;
  }

  const aluno = await res.json();

  return (
    <Layout>
      <AlunoDetalhes aluno={aluno} />
      <Historico alunoId={id} />
    </Layout>
  );
}
