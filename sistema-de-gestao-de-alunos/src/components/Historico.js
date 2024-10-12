"use client";

import { useState, useEffect  } from "react";

export default function Historico({ alunoId }) {
  const [aluno, setAluno] = useState(alunoId || ''); // Usando o alunoId como valor inicial
  const [historico, setHistorico] = useState([]);
  const [periodo, setPeriodo] = useState('');
  const [nota, setNota] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [error, setError] = useState('');

  // Fetch histórico from the API
  const fetchHistorico = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/v1/historico/?aluno_id=${aluno}`);
      const data = await response.json();
      setHistorico(data);
    } catch (err) {
      console.error("Erro ao buscar histórico:", err);
    }
  };

  useEffect(() => {
    fetchHistorico();
  }, []);

  // Agrupa o histórico por período
  const historicoPorPeriodo = historico.reduce((acc, item) => {
    if (!acc[item.periodo]) {
      acc[item.periodo] = [];
    }
    acc[item.periodo].push(item);
    return acc;
  }, {});

  const addHistorico = async (e) => {
    e.preventDefault();
    const newHistorico = { aluno, periodo, nota, disciplina };

    try {
      const response = await fetch('http://127.0.0.1:8000/api/v1/historico/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newHistorico),
      });

      if (response.ok) {
        setPeriodo('');
        setNota('');
        setDisciplina('');
        setError('');
      } else {
        setError('Erro ao adicionar o histórico');
      }
    } catch (err) {
      console.error("Erro ao adicionar histórico:", err);
      setError('Erro ao adicionar o histórico');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
        Histórico de Notas
      </h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      
      {/* Tabelas por período */}
      {Object.keys(historicoPorPeriodo).map((periodo) => (
        <div key={periodo} className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Período: {periodo}
          </h3>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b" colSpan="2">
                  {historicoPorPeriodo[periodo][0].escola} {/* Exibe o nome da escola */}
                </th>
              </tr>
              <tr>
                <th className="py-2 px-4 border-b">Disciplina</th>
                <th className="py-2 px-4 border-b">Nota</th>
              </tr>
            </thead>
            <tbody>
              {historicoPorPeriodo[periodo].map((item) => (
                <tr key={item.id} className="border-t border-gray-200">
                  <td className="py-2 px-4 border-b">{item.disciplina}</td>
                  <td className="py-2 px-4 border-b">{item.nota}</td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      ))}

      <h3 className="text-xl font-semibold mt-10 mb-4 text-gray-800">Adicionar Histórico</h3>
      <form onSubmit={addHistorico} className="space-y-4 bg-white p-6 rounded-lg shadow-md">

        <div>
          <label className="block text-gray-700">Período: </label>
          <input
            type="text"
            value={periodo}
            onChange={(e) => setPeriodo(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700">Nota: </label>
          <input
            type="number"
            value={nota}
            onChange={(e) => setNota(e.target.value)}
            step="0.01"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700">Disciplina: </label>
          <input
            type="text"
            value={disciplina}
            onChange={(e) => setDisciplina(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600 transition duration-200"
        >
          Adicionar Histórico
        </button>
      </form>
    </div>
  );
}