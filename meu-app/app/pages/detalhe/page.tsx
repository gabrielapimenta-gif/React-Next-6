'use client';

import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function PaginaDeDetalhe() {

    const searchParams = useSearchParams();
    const router = useRouter();

    const estiloDoDetalhe =
        "w-full p-3 my-3 rounded-lg text-white bg-red-500";

    const estiloDoBotao =
        "w-full py-3 my-3 rounded-lg text-white bg-blue-700";

    // Recuperando os parâmetros enviados
    const id = searchParams.get('id');
    const nome = searchParams.get('nome');
    const preco = searchParams.get('preco');

    return (
        <div className="p-4">

            <h1 className="text-2xl font-bold">
                Página de Detalhes
            </h1>

            {id && nome && preco ? (

                <p className={estiloDoDetalhe}>
                    Exibindo detalhes para:
                    ID {id},
                    Nome: {nome},
                    Preço: R$ {preco}
                </p>

            ) : (

                <p className={estiloDoDetalhe}>
                    Nenhum dado de produto encontrado.
                </p>

            )}

            <button
                className={estiloDoBotao}
                onClick={() => router.push('/pages/mestre')}
            >
                Voltar para a Página Mestra
            </button>

        </div>
    );
}