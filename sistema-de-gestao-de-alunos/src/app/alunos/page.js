"use client";
import { useState } from "react";
import styles from '../../styles/alunos.module.css';
import Layout from '../../components/Layout.js';

export default function Page() {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState([]); // Estado para armazenar os dados da API

  const fetchAlunos = async (query = '') => {
    try {
      const url = `http://127.0.0.1:8000/api/v1/alunos/?ilike(user__username,${query}*)`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Erro na requisição');
      }
      const result = await response.json();
      setData(result); // Armazena os dados recebidos no estado
    } catch (error) {
      console.error('Erro ao fazer a requisição:', error);
    }
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    fetchAlunos(value); // Chama a função de busca com o valor atual do input
  };

  // Busca todos os alunos inicialmente
  useState(() => {
    fetchAlunos(''); // Chama a função de busca com uma string vazia
  }, []);

  return (
    <>
      <Layout>
      <main className={styles.conteudo__principal}>
        <div className={styles.conteudo__principal__alunos}>
          <h2 className={styles.conteudo__principal__alunos__subtitulo}>Alunos</h2>
          <div className={styles.conteudo__principal__alunos__navegacao}>
            <input 
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className={styles.conteudo__principal__alunos__navegacao__entrada} 
              placeholder='Pesquise o aluno por nome'
            />
            <select className={styles.conteudo__principal__alunos__navegacao__filtro}></select>
            <a><img src='./images/plus_icon.svg' className={styles.conteudo__principal__alunos__navegacao__imagem} alt='Ícone Adicionar'></img></a>
          </div>
          <div className={styles.conteudo__principal__alunos__resultado}>
            {/* Renderiza os dados recebidos */}
            {data.length > 0 ? (
              data.map((aluno, index) => (
                <div
                  key={index}
                  className={styles.conteudo__principal__alunos__resultado__aluno}
                >
                  <h3>Nome: {aluno.user.username}</h3>
                  <p>Matrícula: {aluno.matricula}</p>
                </div>
              ))
            ) : (
              <p>Nenhum aluno encontrado.</p>
            )}
          </div>
        </div>

        <div className={styles.conteudo__principal__alunos}>
          <h2 className={styles.conteudo__principal__alunos__subtitulo}>
            Turmas
          </h2>
          <div className={styles.conteudo__principal__alunos__navegacao}>
            <input className={styles.conteudo__principal__alunos__navegacao__entrada} placeholder='Pesquise o aluno por nome'></input>
            <select className={styles.conteudo__principal__alunos__navegacao__filtro}></select>
            <a href="cadastrarAluno">
              <img src='./images/plus_icon.svg' className={styles.conteudo__principal__alunos__navegacao__imagem} alt='Ícone Adicionar'></img>
            </a>
          </div>
          <div>

          </div>
        </div>
      </main>
      </Layout>
    </>
  )
}


