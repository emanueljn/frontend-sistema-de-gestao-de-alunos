"use client";

import { useState, useEffect } from "react";
import Link from 'next/link';
import styles from '../../styles/alunos.module.css';
import Layout from '../../components/Layout.js';

export default function Page() {
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(true); // Estado de loading
  const [data, setData] = useState([]);
  const [disciplinas, setDisciplinas] = useState([]);
  const [filtroDisciplina, setFiltroDisciplina] = useState('');

  const fetchProfessores = async (query = '') => {
    setLoading(true); // Ativa o loading antes de iniciar a requisição
    try {
      let url = `http://127.0.0.1:8000/api/v1/professores/?ilike(full_name,${query}*)`;
        
        // Se um ano estiver selecionado, adicione o filtro de ano
        if (filtroDisciplina) {
            url += `,eq(disciplina,'${filtroDisciplina})`;
        }

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Erro na requisição');
      }
      const result = await response.json();
      setData(result); // Armazena os dados recebidos no estado

      // Extrair as disciplinas únicas
      const disciplinasUnicas = Array.from(new Set(result.map(professor => professor.disciplina))).sort();
      setDisciplinas(disciplinasUnicas); // Armazena as disciplinas no estado
    } catch (error) {
      console.error('Erro ao fazer a requisição:', error);
    } finally {
      setLoading(false); // Desativa o loading após a requisição ser concluída
    }
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    fetchAlunos(value); // Chama a função de busca com o valor atual do input
  };

  useEffect(() => {
    fetchProfessores(''); // Chama a função de busca com uma string vazia
  }, []);

  return (
    <>
      <Layout>
      <main className={styles.conteudo__principal}>
        <div className={styles.conteudo__principal__alunos}>
          <h2 className={styles.conteudo__principal__alunos__subtitulo}>Professores</h2>
          
          <div className={styles.conteudo__principal__alunos__navegacao}>
            <input 
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className={styles.conteudo__principal__alunos__navegacao__entrada} 
              placeholder='Pesquise o professor por nome'
            />
            
            <select 
              className={styles.conteudo__principal__alunos__navegacao__filtro} 
              onChange={(e) => setFiltroAno(e.target.value)} // Função para filtrar por ano
            >
                <option value="">Todos os anos</option>
                {disciplinas.map(ano => (
                    <option key={ano} value={ano}>{ano}</option>
                ))}
            </select>

            <a href="/cadastrarAluno">
              <img src='./images/plus_icon.svg' className={styles.conteudo__principal__alunos__navegacao__imagem} alt='Ícone Adicionar'></img>
            </a>
          </div>

          <div className={styles.conteudo__principal__alunos__resultado}>
            {loading ? (
              <div className={styles.loadingText}>
                Carregando<span className={styles.dots}></span>
              </div>
            ) : data.length > 0 ? (
              data.map((professor, index) => (
                <div
                  key={index}
                  className={styles.conteudo__principal__alunos__resultado__aluno}
                >
                  {/* Link sem a tag <a> */}
                  <Link 
                  className={styles.conteudo__principal__alunos__resultado__aluno}
                  href={`/professor/${professor.id}`}>
                    <h3 className={styles.conteudo__principal__alunos__resultado__nome}>
                      {professor.full_name}
                    </h3>
                    <p className={styles.conteudo__principal__alunos__resultado__matricula}>
                      {professor.matricula}
                    </p>
                  </Link>
                </div>
              ))
            ) : (
              <p>Nenhum professor encontrado.</p>
            )}
          </div>
        </div>
      </main>
      </Layout>
    </>
  )
}


