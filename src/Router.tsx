import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './pages/layouts/DefaultLayout'
import { Home } from './pages/Home'
import { Detalhes } from './pages/Detalhes'
import { Carrinho } from './pages/Carrinho'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/produto/:id" element={<Detalhes />} />
        <Route path="/carrinho" element={<Carrinho />} />
      </Route>
    </Routes>
  )
}