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

    const handleNavigate = (dado: Produto) => {

        router.push(
            `/pages/detalhe?id=${dado.id}&nome=${encodeURIComponent(
                dado.nome
            )}&preco=${dado.preco}`
        );
    };

    const produto: Produto = {
        id: 123,
        nome: 'Produto X',
        preco: 199.99
    };

    return (
        <div className='p-4'>
            <h1>Página Mestra</h1>

            <button
                className={estiloDoBotao}
                onClick={() => handleNavigate(produto)}
            >
                Ir para a página de Detalhes do Produto
            </button>
        </div>
    );
}