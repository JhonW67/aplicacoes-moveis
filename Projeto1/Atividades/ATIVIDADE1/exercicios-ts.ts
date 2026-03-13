
/*
// Fórmula: IMC = peso / (altura * altura)
function calcularIMC(
peso: number,
altura: number
): number {
    
    let imc = peso / (altura * altura)

    return Number(imc.toFixed(2));

}

console.log(calcularIMC(119, 1.83));

/**
 *  rode com ts-node 
 */
/* 
function formatarNome(
  nome: string,
  sobrenome?: string
): string {
    if (sobrenome) {
        return `Olá, ${nome} ${sobrenome}!`;
    }
    return `Olá, ${nome}!`;
}
    console.log(formatarNome("João Vitor","Costa"))
    console.log(formatarNome("João Vitor"))
 */

/* function verificarMaioridade(
  idade: number
): boolean {
    return idade >= 18;
}
    console.log(verificarMaioridade(20))
    console.log(verificarMaioridade(16))
 */

/* interface Produto {
  id: number;
  nome: string;
  preco: number;
  marca?: string;
  descricao?: string;
}

function formatarProduto(produto: Produto): string {
  let textoProduto = `Produto: ${produto.nome} (ID: ${produto.id})\n Preço: R$ ${produto.preco.toFixed(2)}`;
    if (produto.marca) { 
        textoProduto += `\n Marca: ${produto.marca}`;
    }
    if (produto.descricao) {
        textoProduto += `\n Descrição: ${produto.descricao}`;
    }
    return textoProduto;
}
    console.log(formatarProduto({ 
        id: 1, 
        nome: "Smartphone", 
        preco: 1999.99, marca: "Samsung", 
        descricao: "Tela de 6.5 polegadas" 
    }))
    console.log(formatarProduto({ 
        id: 2, 
        nome: "Notebook", 
        preco: 2999.99, 
        marca: "Dell" 
    }))
    console.log(formatarProduto({ 
        id: 3, 
        nome: "Fone de Ouvido", 
        preco: 199.99, 
        descricao: "Áudio de alta qualidade" 
    }))
    console.log(formatarProduto({ 
        id: 4, 
        nome: "Mouse", 
        preco: 49.99 
    }))
 */
/* 
function filtrarPares(
  numeros: number[]
): number[] {
    return numeros.filter(num => num % 2 === 0);
}
    console.log(filtrarPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
 */


/* type UnidadeTemperatura = "celsius" | "fahrenheit";

function converterTemperatura(
  valor: number,
  unidade: UnidadeTemperatura
): number {
  if (unidade === "celsius") {
    return (valor * 9 / 5) + 32;
  }

  // Aqui já sabemos que só pode ser "fahrenheit"
  return (valor - 32) * 5 / 9;
}

    console.log(converterTemperatura(25, "celsius"))
    console.log(converterTemperatura(77, "fahrenheit")) 
*/

/* function contarOcorrencias<T>(
  array: T[],
  elemento: T
): number {
    return array.reduce((contador, item) => {
        return item === elemento ? contador + 1 : contador;
    }, 0);
}
    console.log(contarOcorrencias([1, 2, 3, 4, 2, 5, 2], 2))
    console.log(contarOcorrencias(["maçã", "banana", "laranja", "maçã"], "maçã"))
     */

/* interface Aluno {
    nome: string,
    notas: number[],
    matricula: string;
}

function calcularMedia(aluno: Aluno): number {
  // Implemente aqui
  const soma = aluno.notas.reduce((acc, nota) => acc + nota, 0);
  return soma / aluno.notas.length;
}

const aluno1: Aluno = {
    nome: "João Vitor",
    notas: [8, 7, 9],
    matricula: "2023001"
};
    console.log(calcularMedia(aluno1)); 
*/

/* type ApiResponse<T> = {
    sucesso: boolean;
    dados: T | null;
    erro: string | null;
};

interface Usuario {
  id: number, 
  nome: string,
  email: string;
}

function buscarUsuarios(): ApiResponse<Usuario[]> {
  // Retorne dados mockados
    const usuarios: Usuario[] = [
        { id: 1, nome: "João Vitor", email: "joao.vitor@example.com" },
        { id: 2, nome: "Maria Silva", email: "maria.silva@example.com" }
    ];
    return {
        sucesso: true,
        dados: usuarios,
        erro: null
    };
}
    console.log(buscarUsuarios()); 
*/

/* import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface Tarefa {
  id: number,
  titulo: string,
  concluida: boolean;
}

interface ListaTarefasProps {
  tarefas: Tarefa[],
  onToggle: (id: number) => void;
}

export default function ListaTarefas({
  tarefas, onToggle 
}: ListaTarefasProps) {
  const [filtro, setFiltro] =
    useState<"todas" | "pendentes" | "concluidas">("todas");  
  const tarefasFiltradas = tarefas.filter(tarefa => {
    if (filtro === "todas") return true;
    if (filtro === "pendentes") return !tarefa.concluida;
    if (filtro === "concluidas") return tarefa.concluida;
    return true;
  });
  // exibição se fosse um componente React Native
  return (
    <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', gap: 8}}>
            <TouchableOpacity onPress={() => setFiltro("todas")}>
                <Text>Todas</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setFiltro("pendentes")}>
                <Text>Pendentes</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setFiltro("concluidas")}>
                <Text>Concluídas</Text>
            </TouchableOpacity>
        </View>
        {tarefasFiltradas.map(tarefa => (
            <TouchableOpacity 
            key={tarefa.id} 
            onPress={() => onToggle(tarefa.id)}
            >
                <Text 
                    style={{ textDecorationLine: 
                    tarefa.concluida ? 'line-through' : 'none' }}
                >
                    {tarefa.concluida ? "✓ " : "✗ "}
                    {tarefa.titulo}
                </Text>
            </TouchableOpacity>
        ))}
    </View>

  )
} 
 */