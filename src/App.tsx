import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { CarrinhoContextProvider } from './contexts/CarrinhoContext'

export function App() {
  return (
    <BrowserRouter>
      <CarrinhoContextProvider>
        <Router />
      </CarrinhoContextProvider>
    </BrowserRouter>
  )
}