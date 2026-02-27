type Produto<T = string> = {
    data: T
    active: boolean
}

const mesa: Produto = {
    data: "MESA",
    active: true
}

const carro: Produto<{ qtdRodas: number }> = {
    data: {
        qtdRodas: 4
    },
    active: true
}

interface APIResponse<T> {
    data: T
    state: number;
    error?: Error[]
}