"use client";

import { use, useCallback } from 'react';
import { useSession } from 'next-auth/react';
import Layout from '../../../components/Layout.js';
import AlunoDetalhes from '../../../components/AlunoDetalhes';
import Historico from '../../../components/Historico';

export default function AlunoPage({ params }) {
  const { data: session } = useSession();
  const { id } = params;

  const token = session?.user?.token;
  
  const aluno = await (fetch(`http://127.0.0.1:8000/api/v1/alunos/${id}`, {
    method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
       }
  }).then(res => res.json()));

  if (!aluno) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <Layout>
          <AlunoDetalhes aluno={aluno} />
          <Historico alunoId={id} />
      </Layout>
    </>
  );
}