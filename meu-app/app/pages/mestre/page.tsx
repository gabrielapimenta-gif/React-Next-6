'use client';

import { useRouter } from 'next/navigation';

interface Produto {
    id: number;
    nome: string;
    preco: number;
}

export default function PaginaMestra() {

    const router = useRouter();

    const estiloDoBotao =
        "w-full py-3 my-3 rounded-lg text-white bg-blue-700";

    const handleNavigate = (produto: Produto) => {

        router.push(
            `/pages/detalhe?id=${produto.id}&nome=${encodeURIComponent(
                produto.nome
            )}&preco=${produto.preco}`
        );
    };

    const produto: Produto = {
        id: 123,
        nome: 'Produto X',
        preco: 199.99
    };

    return (
        <div className="p-4">

            <h1 className="text-2xl font-bold">
                Página Mestra
            </h1>

            <button
                className={estiloDoBotao}
                onClick={() => handleNavigate(produto)}
            >
                Ir para a página de Detalhes do Produto
            </button>

        </div>
    );
}