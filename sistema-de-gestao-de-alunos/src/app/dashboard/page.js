import styles from '../../styles/dashboard.module.css';
import Layout from '../../components/Layout';

export default function dashboard() {
    return (
      <>
        <Layout>
        <main className={styles.conteudo__principal}>
            <section className={styles.conteudo__principal__links}>
                <a href="" className={styles.conteudo__principal__link__ancora}>
                    <div className={styles.conteudo__principal__link}>
                        <h2 className={styles.conteudo__principal__link__subtitulo}>Institucional</h2>
                    </div>
                </a>

                <a href="" className={styles.conteudo__principal__link__ancora}>
                    <div className={styles.conteudo__principal__link}>
                        <h2 className={styles.conteudo__principal__link__subtitulo}>Professores</h2>
                    </div>
                </a>

                <a href="alunos" className={styles.conteudo__principal__link__ancora}>
                    <div className={styles.conteudo__principal__link}>
                        <h2 className={styles.conteudo__principal__link__subtitulo}>Alunos</h2>
                    </div>
                </a>

                <a href="" className={styles.conteudo__principal__link__ancora}>
                    <div className={styles.conteudo__principal__link}>
                        <h2 className={styles.conteudo__principal__link__subtitulo}>Turmas</h2>
                    </div>
                </a>

                <a href="" className={styles.conteudo__principal__link__ancora}>
                    <div className={styles.conteudo__principal__link}>
                        <h2 className={styles.conteudo__principal__link__subtitulo}>Estatísticas</h2>
                    </div>
                </a>

                <a href="" className={styles.conteudo__principal__link__ancora}>
                    <div className={styles.conteudo__principal__link}>
                        <h2 className={styles.conteudo__principal__link__subtitulo}>Relatórios</h2>
                    </div>
                </a>
            </section>
        </main>
        </Layout>
      </>
    )
}