import styles from '../../styles/dashboard.module.css'

export default function dashboard() {
    return (
      <>
        <header>
        
        </header>

        <main className={styles.conteudo__principal}>
            <a href="alunos" className={styles.conteudo__principal__link__ancora}>
                <div className={styles.conteudo__principal__link}>
                    <h2 className={styles.conteudo__principal__link__subtitulo}>Alunos</h2>
                </div>
            </a>
        </main>

        <footer>

        </footer>
      </>
    )
}