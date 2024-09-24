// components/AlunoDetalhes.js
"use client";

import { useState } from 'react';

const AlunoDetalhes = ({ aluno }) => {
    const [formData, setFormData] = useState({
        full_name: aluno.full_name,
        email: aluno.email || '',
        cpf: aluno.cpf,
        escola: aluno.escola,
        logradouro: aluno.endereco.logradouro,
        numero: aluno.endereco.numero,
        bairro: aluno.endereco.bairro,
        cidade: aluno.endereco.cidade,
        uf: aluno.endereco.uf,
        cep: aluno.endereco.cep,
        complemento: aluno.endereco.complemento || '',
        telefone_1: aluno.telefone_1,
        telefone_2: aluno.telefone_2,
        matricula: aluno.matricula,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Adicione a lógica de envio do formulário aqui
        console.log(formData);
    };

    return (
        <form className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen" onSubmit={handleSubmit}>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Detalhes do Aluno</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        Informações do aluno, por favor, verifique se estão corretas.
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="full_name" className="block text-sm font-medium leading-6 text-gray-900">
                                Nome
                            </label>
                            <div className="mt-2">
                                <input
                                    id="full_name"
                                    name="full_name"
                                    type="text"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={formData.full_name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="cpf" className="block text-sm font-medium leading-6 text-gray-900">
                                CPF
                            </label>
                            <div className="mt-2">
                                <input
                                    id="cpf"
                                    name="cpf"
                                    type="text"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={formData.cpf}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="escola" className="block text-sm font-medium leading-6 text-gray-900">
                                Escola
                            </label>
                            <div className="mt-2">
                                <input
                                    id="escola"
                                    name="escola"
                                    type="text"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={formData.escola}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="logradouro" className="block text-sm font-medium leading-6 text-gray-900">
                                Endereço
                            </label>
                            <div className="mt-2">
                                <input
                                    id="logradouro"
                                    name="logradouro"
                                    type="text"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={formData.logradouro}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="numero" className="block text-sm font-medium leading-6 text-gray-900">
                                Número
                            </label>
                            <div className="mt-2">
                                <input
                                    id="numero"
                                    name="numero"
                                    type="number"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={formData.numero}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="bairro" className="block text-sm font-medium leading-6 text-gray-900">
                                Bairro
                            </label>
                            <div className="mt-2">
                                <input
                                    id="bairro"
                                    name="bairro"
                                    type="text"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={formData.bairro}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2 sm:col-start-1">
                            <label htmlFor="cidade" className="block text-sm font-medium leading-6 text-gray-900">
                                Cidade
                            </label>
                            <div className="mt-2">
                                <input
                                    id="cidade"
                                    name="cidade"
                                    type="text"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={formData.cidade}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2 sm:col-start-1">
                            <label htmlFor="uf" className="block text-sm font-medium leading-6 text-gray-900">
                                Estado (UF)
                            </label>
                            <div className="mt-2">
                                <input
                                    id="uf"
                                    name="uf"
                                    type="text"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={formData.uf}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2 sm:col-start-1">
                            <label htmlFor="cep" className="block text-sm font-medium leading-6 text-gray-900">
                                CEP
                            </label>
                            <div className="mt-2">
                                <input
                                    id="cep"
                                    name="cep"
                                    type="text"
                                    autoComplete="address-level2"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={formData.cep}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2 sm:col-start-1">
                            <label htmlFor="complemento" className="block text-sm font-medium leading-6 text-gray-900">
                                Complemento
                            </label>
                            <div className="mt-2">
                                <input
                                    id="complemento"
                                    name="complemento"
                                    type="text"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={formData.complemento}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="telefone_1" className="block text-sm font-medium leading-6 text-gray-900">
                                Telefone 1
                            </label>
                            <div className="mt-2">
                                <input
                                    id="telefone_1"
                                    name="telefone_1"
                                    type="text" // Pode ser "tel" para melhor semântica
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={formData.telefone_1}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="telefone_2" className="block text-sm font-medium leading-6 text-gray-900">
                                Telefone 2
                            </label>
                            <div className="mt-2">
                                <input
                                    id="telefone_2"
                                    name="telefone_2"
                                    type="text" // Pode ser "tel" para melhor semântica
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={formData.telefone_2}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="matricula" className="block text-sm font-medium leading-6 text-gray-900">
                                Matrícula
                            </label>
                            <div className="mt-2">
                                <input
                                    id="matricula"
                                    name="matricula"
                                    type="text"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={formData.matricula}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end">
                    <button
                        type="button"
                        className="mr-2 text-sm font-semibold leading-6 text-gray-900"
                        onClick={() => {/* Lógica para cancelar, ex: redirecionar */}}
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        className="inline-block rounded-lg bg-indigo-600 px-3 py-1.5 text-white"
                    >
                        Salvar
                    </button>
                </div>
            </div>
        </form>
    );
};

export default AlunoDetalhes;
