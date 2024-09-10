import styles from '../../styles/alunos.module.css'

export default function alunos() {
    return (
      <>
        <header>
        
        </header>

        <main className={styles.conteudo__principal}>
          <div className={styles.conteudo__principal__alunos}>
            <h2 className={styles.conteudo__principal__alunos__subtitulo}>
              Alunos
            </h2>
            <div className={styles.conteudo__principal__alunos__navegacao}>
              <input className={styles.conteudo__principal__alunos__navegacao__entrada} placeholder='Pesquise o aluno por nome'></input>
              <select className={styles.conteudo__principal__alunos__navegacao__filtro}></select>
              <a><img src='./images/plus_icon.svg' className={styles.conteudo__principal__alunos__navegacao__imagem} alt='Ícone Adicionar'></img></a>
            </div>
            <div className={styles.conteudo__principal__alunos__resultado}>

            </div>
          </div>

          <div className={styles.conteudo__principal__alunos}>
            <h2 className={styles.conteudo__principal__alunos__subtitulo}>
              Turmas
            </h2>
            <div className={styles.conteudo__principal__alunos__navegacao}>
              <input className={styles.conteudo__principal__alunos__navegacao__entrada} placeholder='Pesquise o aluno por nome'></input>
              <select className={styles.conteudo__principal__alunos__navegacao__filtro}></select>
              <a><img src='./images/plus_icon.svg' className={styles.conteudo__principal__alunos__navegacao__imagem} alt='Ícone Adicionar'></img></a>
            </div>
            <div className={styles.conteudo__principal__alunos__resultado}>

            </div>
          </div>
        </main>

        <footer>

        </footer>
      </>
    )
}