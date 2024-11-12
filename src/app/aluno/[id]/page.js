"use client";

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Layout from '../../../components/Layout.js';
import AlunoDetalhes from '../../../components/AlunoDetalhes';
import Historico from '../../../components/Historico';

export default function AlunoPage({ params }) {
  const { data: session } = useSession();
  const { id } = params;
  const [aluno, setAluno] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = session?.user?.token;
  
  useEffect(() => {
    if (!token) return;

    const fetchAluno = async () => {
      try {
        const response = await fetch(`https://sjweb.com.br/api/v1/alunos/${id}`, {  
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          }
        });

        if (!response.ok) {
          throw new Error('Erro na busca dos dados');
        }

        const data = await response.json();
        setAluno(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAluno();
  }, [id, token]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <>
      <Layout>
          <AlunoDetalhes aluno={aluno} />
          <Historico alunoId={id} />
      </Layout>
    </>
  );
}