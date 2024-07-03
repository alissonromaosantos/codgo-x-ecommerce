import { CarrinhoItem } from "../../components/CarrinhoItem";
import styled from './styles.module.css'

export function Carrinho() {
  return (
    <div className={styled['container-carrinho']}>
      <CarrinhoItem />
    </div>
  )
}