import { Button, Card, CardActions, CardContent, CardMedia, Typography, useMediaQuery } from "@mui/material"
import { useContext } from "react"
import { CarrinhoContext } from "../../contexts/CarrinhoContext"
import { Item } from "../../utils/produtos"
import styled from './styles.module.css'
import { NavLink } from "react-router-dom"

export function Produto() {
  const { produtos, sincronizarDetalhes, setSincronizarDetalhes, adicionarProdutoAoCarrinho } = useContext(CarrinhoContext)
  const isMobile = useMediaQuery('(max-width: 767px)')
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1024px)')

  return (
    <div className={styled['css-ce8e53-MuiContainer-root']}>
      <Typography variant={isMobile ? "h5" : isTablet ? "h4" : "h3"} component="div" className={styled['css-gepadz-MuiTypography-root']}>
        Produtos
      </Typography> 
      <div className={styled['css-1itvvrr-MuiContainer-root']}>
        {produtos.length < 1 ?
          <Typography variant="h6" component="div">
            Não há produtos disponíveis
          </Typography>
        : produtos.map((produto: Item) => {
          return (
            <Card sx={{ maxWidth: 345 }} key={produto.id}>
              <CardMedia
                component="img"
                alt={produto.nome}
                height="220"
                image={produto.img}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 700 }}>
                  {produto.nome}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {produto.descricao}
                </Typography>
                <Typography  variant="h5" component="div" sx={{ fontWeight: 700, marginTop: '30px' }}>
                  {produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </Typography>
              </CardContent>
              <CardActions>
                <NavLink to={`/produto/${produto.id}`} className={styled['link-navegacao']}>
                  <Button size="small" onClick={() => {
                      localStorage.setItem('@products:product-detail-state-1.0.0', JSON.stringify(produto))
                      setSincronizarDetalhes(!sincronizarDetalhes)
                    }
                  }>Ver Detalhes</Button>
                </NavLink>
                <Button size="small" onClick={() => adicionarProdutoAoCarrinho(produto)}>Adicionar ao Carrinho</Button>
              </CardActions>
            </Card>
          )
        })}
      </div>
    </div>
  )  
}