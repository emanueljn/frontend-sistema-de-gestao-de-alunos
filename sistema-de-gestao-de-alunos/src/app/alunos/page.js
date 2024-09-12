<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alunos Matriculados - Disciplina</title>
    <style>
        /* Definindo a paleta de cores */
        :root {
            --primary-color: #007BFF;
            --secondary-color: #f8f9fa;
            --text-color: #333;
            --button-hover-color: #0056b3;
            --button-bg-color: #007BFF;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            background-color: var(--secondary-color);
            display: flex;
            flex-direction: column;
            min-height: 100vh;
        }

        header {
            background-color: var(--primary-color);
            color: white;
            padding: 1.5rem;
            text-align: center;
        }

        header h1 {
            margin: 0;
            font-size: 2.2rem;
        }

        .container {
            padding: 2rem;
            flex: 1;
        }

        .table-container {
            max-width: 1000px;
            margin: 0 auto;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            padding: 2rem;
        }

        h2 {
            text-align: center;
            color: var(--primary-color);
            margin-bottom: 2rem;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 2rem;
        }

        table th, table td {
            padding: 12px;
            border: 1px solid #ddd;
            text-align: left;
        }

        table th {
            background-color: var(--primary-color);
            color: white;
        }

        table td a {
            text-decoration: none;
            color: var(--primary-color);
            font-weight: bold;
        }

        table td a:hover {
            color: var(--button-hover-color);
        }

        /* Botões de ação */
        .actions a {
            display: inline-block;
            padding: 10px 15px;
            color: white;
            background-color: var(--button-bg-color);
            border-radius: 4px;
            text-decoration: none;
            margin-right: 10px;
            transition: background-color 0.3s ease;
        }

        .actions a:hover {
            background-color: var(--button-hover-color);
        }

        footer {
            text-align: center;
            padding: 1rem;
            background-color: var(--primary-color);
            color: white;
            margin-top: auto;
        }
    </style>
</head>
<body>

    <header>
        <h1>Página de Alunos Matriculados na Disciplina</h1>
    </header>

    <div class="container">
        <div class="table-container">
            <h2>Visão Professor/Admin</h2>
            <table>
                <thead>
                    <tr>
                        <th>Aluno</th>
                        <th>Matrícula</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Rafael Pedroso</td>
                        <td>123456</td>
                        <td class="actions">
                            <a href="#lancar-frequencia">Lançar Frequência</a>
                            <a href="#avaliacao-nota">Avaliação e Nota</a>
                            <a href="#conclusao">Conclusão</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Kauã Lima</td>
                        <td>123456</td>
                        <td class="actions">
                            <a href="#lancar-frequencia">Lançar Frequência</a>
                            <a href="#avaliacao-nota">Avaliação e Nota</a>
                            <a href="#conclusao">Conclusão</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Lucas Jonatan</td>
                        <td>123456</td>
                        <td class="actions">
                            <a href="#lancar-frequencia">Lançar Frequência</a>
                            <a href="#avaliacao-nota">Avaliação e Nota</a>
                            <a href="#conclusao">Conclusão</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Marcos Alexandre</td>
                        <td>123456</td>
                        <td class="actions">
                            <a href="#lancar-frequencia">Lançar Frequência</a>
                            <a href="#avaliacao-nota">Avaliação e Nota</a>
                            <a href="#conclusao">Conclusão</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Vitório Felício</td>
                        <td>123456</td>
                        <td class="actions">
                            <a href="#lancar-frequencia">Lançar Frequência</a>
                            <a href="#avaliacao-nota">Avaliação e Nota</a>
                            <a href="#conclusao">Conclusão</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Eduardo Vinicius</td>
                        <td>6654343</td>
                        <td class="actions">
                            <a href="#lancar-frequencia">Lançar Frequência</a>
                            <a href="#avaliacao-nota">Avaliação e Nota</a>
                            <a href="#conclusao">Conclusão</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Emanuel Nardes</td>
                        <td>654321</td>
                        <td class="actions">
                            <a href="#lancar-frequencia">Lançar Frequência</a>
                            <a href="#avaliacao-nota">Avaliação e Nota</a>
                            <a href="#conclusao">Conclusão</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Silvio José</td>
                        <td>987654</td>
                        <td class="actions">
                            <a href="#lancar-frequencia">Lançar Frequência</a>
                            <a href="#avaliacao-nota">Avaliação e Nota</a>
                            <a href="#conclusao">Conclusão</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <footer>
        <p>© 2024 Sistema de Gestão Escolar</p>
    </footer>

</body>
</html>
