import { Box, CardMedia, Paper, Typography, useMediaQuery } from '@mui/material'
import styled from './styles.module.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from 'react';
import { CarrinhoContext } from '../../contexts/CarrinhoContext';
import { Item } from '../../utils/produtos';

export function CarrinhoItem() {
  const isMobile = useMediaQuery('(max-width: 767px)')
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1024px)')

  const { carrinho, adicionarProdutoAoCarrinho, removerProdutoDoCarrinho, deletarProdutoDoCarrinho } = useContext(CarrinhoContext)

  const total: number = carrinho.reduce((acc, curr) => {
    const itemTotal = curr.preco * curr.quantidade!
    return acc + itemTotal
  }, 0)

  return (
    <>
      <Typography variant={isMobile ? "h5" : isTablet ? "h4" : "h3"} component="div" className={styled['css-gepadz-MuiTypography-root']}>
        Carrinho
      </Typography> 
      {carrinho.length < 1 ? 
        <Typography variant="h6" component="div">
          Não há produtos no carrinho
        </Typography>
        : carrinho.map((produto: Item) => {
          return (
            <Paper elevation={3} className={styled['css-3su884-MuiPaper-root']} key={produto.id}>
              <Box className={styled['css-0']}>
                <CardMedia
                  component="img"
                  alt={produto.nome}
                  height="220"
                  image={produto.img}
                  className={styled['css-o69gx8-MuiCardMedia-root']}
                />
                <Typography variant="h6" component="div" className={styled['css-gepadz-MuiTypography-root']}>
                  {produto.nome}
                </Typography>
                <div className={styled['quantidade-item']}>
                  <RemoveIcon className={styled['css-i4bv87-MuiSvgIcon-root']} onClick={() => removerProdutoDoCarrinho(produto)} />
                  <Typography variant="body1" component="div">
                    {produto.quantidade}
                  </Typography>
                  <AddIcon className={styled['css-i4bv87-MuiSvgIcon-root']} onClick={() => adicionarProdutoAoCarrinho(produto)} />
                </div>
                <DeleteIcon className={styled['css-i4bv87-MuiSvgIcon-root']} onClick={() => deletarProdutoDoCarrinho(produto)} />
              </Box>
              <Typography variant="h6" component="div">
                {(produto.preco * produto.quantidade!).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </Typography>
            </Paper>
          )
      })}
      {carrinho.length >= 1 && 
        <div className={styled['container-total']}>
          <Typography variant="h5" component="div" className={styled['css-ag7rrr-MuiTypography-root']}>
            Total:
          </Typography>
          <Typography variant="h5" component="div">
            {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </Typography>
        </div>
      }
    </>
  )
}