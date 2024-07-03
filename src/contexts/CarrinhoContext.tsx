import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react'
import { itemsParaCompra, Item } from '../utils/produtos'



interface CarrinhoContextType {
  produtos: Item[]
  setProdutos: Dispatch<SetStateAction<Item[]>>
  produtoDetalhado: Item | null
  setProdutoDetalhado: Dispatch<SetStateAction<Item | null>>
  sincronizarDetalhes: boolean
  setSincronizarDetalhes: Dispatch<SetStateAction<boolean>>
  carrinho: Item[]
  setCarrinho: Dispatch<SetStateAction<Item[]>>
  adicionarProdutoAoCarrinho: (item: Item) => void
  sincronizarCarrinho: boolean
  setSincronizarCarrinho: Dispatch<SetStateAction<boolean>>
  removerProdutoDoCarrinho: (item: Item) => void
  deletarProdutoDoCarrinho: (item: Item) => void
}

export const CarrinhoContext = createContext({} as CarrinhoContextType)

interface CarrinhoContextProviderProps {
  children: ReactNode
}

export function CarrinhoContextProvider({ children }: CarrinhoContextProviderProps) {
  const [produtos, setProdutos] = useState<Item[]>([])

  const [produtoDetalhado, setProdutoDetalhado] = useState<Item | null>(null)

  const [sincronizarDetalhes, setSincronizarDetalhes] = useState<boolean>(false)

  const [carrinho, setCarrinho] = useState<Item[]>([])

  const [sincronizarCarrinho, setSincronizarCarrinho] = useState<boolean>(false)

  function adicionarProdutoAoCarrinho(produto: Item) {
    const produtoExistente = carrinho.find((item: Item) => item.id === produto.id)

    if (produtoExistente) {
        const carrinhoAtualizado = carrinho.map(item =>
          item.id === produto.id ? { ...item, quantidade: item.quantidade! + 1 } : item,
        )

        localStorage.setItem('@carrinho:carrinho-state-1.0.0', JSON.stringify(carrinhoAtualizado))
    } else {
      localStorage.setItem('@carrinho:carrinho-state-1.0.0', JSON.stringify([...carrinho, { ...produto, quantidade: 1 }]))
    }

    setSincronizarCarrinho(!sincronizarCarrinho)
  }

  function removerProdutoDoCarrinho(produto: Item) {
    const produtoExistente = carrinho.find((item: Item) => item.id === produto.id)

    if (produtoExistente) {
      if (produtoExistente.quantidade! > 1) {
        const carrinhoAtualizado = carrinho.map(item =>
          item.id === produto.id ? { ...item, quantidade: item.quantidade! - 1 } : item,
        )

        localStorage.setItem('@carrinho:carrinho-state-1.0.0', JSON.stringify(carrinhoAtualizado))
      } else {
        const carrinhoAtualizado = carrinho.filter(item => item.id !== produto.id)

        localStorage.setItem('@carrinho:carrinho-state-1.0.0', JSON.stringify(carrinhoAtualizado))
      }
    }

    setSincronizarCarrinho(!sincronizarCarrinho)
  }

  function deletarProdutoDoCarrinho(produto: Item) {
    const carrinhoAtualizado = carrinho.filter(item => item.id !== produto.id)

    localStorage.setItem('@carrinho:carrinho-state-1.0.0', JSON.stringify(carrinhoAtualizado))

    setSincronizarCarrinho(!sincronizarCarrinho)
  }

  useEffect(() => {
    localStorage.setItem('@products:products-state-1.0.0', JSON.stringify(itemsParaCompra))

    const produtosDataStorage = JSON.parse(
      localStorage.getItem('@products:products-state-1.0.0') ?? '[]',
    )

    setProdutos(produtosDataStorage)
  }, [])

  useEffect(() => {
    const produtoDataStorage = JSON.parse(
      localStorage.getItem('@products:product-detail-state-1.0.0') ?? 'null',
    )

    setProdutoDetalhado(produtoDataStorage)
  }, [sincronizarDetalhes])

  useEffect(() => {
    const carrinhoDataStorage = JSON.parse(
      localStorage.getItem('@carrinho:carrinho-state-1.0.0') ?? '[]',
    )

    setCarrinho(carrinhoDataStorage)
  }, [sincronizarCarrinho])

  console.log(carrinho)

  return (
    <CarrinhoContext.Provider
      value={{
        produtos,
        setProdutos,
        produtoDetalhado,
        setProdutoDetalhado,
        sincronizarDetalhes,
        setSincronizarDetalhes,
        carrinho,
        setCarrinho,
        adicionarProdutoAoCarrinho,
        sincronizarCarrinho,
        setSincronizarCarrinho,
        removerProdutoDoCarrinho,
        deletarProdutoDoCarrinho
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  )
}