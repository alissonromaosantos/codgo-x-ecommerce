import { Outlet } from 'react-router-dom'
import { Cabecalho } from '../../../components/Cabecalho'
import { Rodape } from '../../../components/Rodape'

export function DefaultLayout() {
  return (
    <>
      <Cabecalho />
      <Outlet />
      <Rodape />
    </>
  )
}