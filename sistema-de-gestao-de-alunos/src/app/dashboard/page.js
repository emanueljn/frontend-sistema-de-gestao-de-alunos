<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Escola ECEEJA de Miracatu -  Sistema de gestão de alunos.</title>

    <style>
        /* Definindo uma paleta de cores */
        :root {
            --primary-color: #007BFF;
            --secondary-color: #f0f8ff;
            --text-color: #333;
            --hover-color: #0056b3;
            --footer-color: #003f7f;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background-color: var(--secondary-color);
        }

        header {
            background-color: var(--primary-color);
            color: white;
            text-align: center;
            padding: 1.5rem;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        header h1 {
            margin: 0;
            font-size: 2.5rem;
            font-weight: 300;
        }

        .container {
            display: flex;
            flex: 1;
        }

        nav {
            background-color: white;
            width: 250px;
            padding: 2rem;
            box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
        }

        nav ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
        }

        nav ul li {
            margin: 20px 0;
        }

        nav ul li a {
            text-decoration: none;
            color: var(--text-color);
            font-size: 1.2rem;
            padding: 12px;
            display: block;
            border-radius: 4px;
            transition: background-color 0.3s, color 0.3s;
        }

        nav ul li a:hover {
            background-color: var(--primary-color);
            color: white;
        }

        main {
            flex: 1;
            padding: 2rem;
            background-color: var(--secondary-color);
        }

        main h2 {
            color: var(--primary-color);
            font-size: 2rem;
            margin-bottom: 1rem;
        }

        main p {
            font-size: 1.1rem;
            line-height: 1.6;
            color: var(--text-color);
        }

        .center-nav {
            text-align: center;
            margin-bottom: 2rem;
        }

        .center-nav a {
            text-decoration: none;
            color: var(--text-color);
            font-size: 1.2rem;
            margin: 0 15px;
            padding: 10px 20px;
            display: inline-block;
            border: 1px solid var(--primary-color);
            border-radius: 4px;
            transition: background-color 0.3s, color 0.3s;
        }

        .center-nav a:hover {
            background-color: var(--primary-color);
            color: white;
        }

        footer {
            background-color: var(--footer-color);
            color: white;
            text-align: center;
            padding: 1rem;
            font-size: 0.9rem;
            margin-top: auto;
        }

        footer ul {
            list-style-type: none;
            padding: 0;
        }

        footer ul li {
            display: inline;
            margin: 0 10px;
        }

        footer ul li a {
            color: white;
            text-decoration: none;
            font-size: 0.9rem;
        }

        footer ul li a:hover {
            text-decoration: underline;
        }

        /* Responsividade para dispositivos móveis */
        @media (max-width: 768px) {
            nav {
                width: 100%;
                padding: 1rem;
            }

            .container {
                flex-direction: column;
            }

            main {
                padding: 1rem;
            }

            .center-nav a {
                margin: 10px 0;
                display: block;
            }
        }
    </style>
</head>
<body>
    <header>
        <h1>Escola ECEEJA de Miracatu - Sistema de gestão de alunos</h1>
    </header>

    <div class="container">
        <nav>
            <ul>
                <li><a href="#institucional" onclick="showTab('institucional')">Institucional</a></li>
                <li><a href="#alunos" onclick="showTab('alunos')">Alunos/Turmas</a></li>
                <li><a href="#professores" onclick="showTab('professores')">Professores</a></li>
                <li><a href="#relatorios" onclick="showTab('relatorios')">Relatórios</a></li>
                <li><a href="#estatisticas" onclick="showTab('estatisticas')">Estatísticas</a></li>
            </ul>
        </nav>

        <main>
            <!-- Navegação central no conteúdo principal -->
            <div class="center-nav">
                <a href="#institucional" onclick="showTab('institucional')">Institucional</a>
                <a href="#alunos" onclick="showTab('alunos')">Alunos/Turmas</a>
                <a href="#professores" onclick="showTab('professores')">Professores</a>
                <a href="#relatorios" onclick="showTab('relatorios')">Relatórios</a>
                <a href="#estatisticas" onclick="showTab('estatisticas')">Estatísticas</a>
            </div>

            <section id="institucional" style="display: block;">
                <h2>Institucional</h2>
                <p>Bem-vindo ao setor institucional da Escola ECEEJA de Miracatu.</p>
            </section>
            <section id="alunos" style="display: none;">
                <h2>Alunos/Turmas</h2>
                <p>Informações sobre alunos e turmas da escola.</p>
            </section>
            <section id="professores" style="display: none;">
                <h2>Professores</h2>
                <p>Informações sobre os professores da escola.</p>
            </section>
            <section id="relatorios" style="display: none;">
                <h2>Relatórios</h2>
                <p>Acesse os relatórios da escola aqui.</p>
            </section>
            <section id="estatisticas" style="display: none;">
                <h2>Estatísticas</h2>
                <p>Veja as estatísticas escolares detalhadas.</p>
            </section>
        </main>
    </div>

    <footer>
        <p>© 2024 Escola ECEEJA de Miracatu. Todos os direitos reservados.</p>
        <ul>
            <li><a href="#termo-uso" onclick="showTab('institucional')">Termo de uso</a></li>
            <li><a href="#termo-responsabilidade" onclick="showTab('institucional')">Termo de responsabilidade</a></li>
        </ul>
    </footer>

    <script>
        function showTab(tabId) {
            // Ocultar todas as seções
            var sections = document.querySelectorAll('main section');
            sections.forEach(function(section) {
                section.style.display = 'none';
            });

            // Mostrar a seção clicada
            document.getElementById(tabId).style.display = 'block';
        }
    </script>
</body>
</html>
