import { Box, Button, CardMedia, Paper, Typography, useMediaQuery } from '@mui/material'
import { useContext } from 'react'
import { CarrinhoContext } from '../../contexts/CarrinhoContext'
import styled from './styles.module.css'

export function Item() {
  const isMobile = useMediaQuery('(max-width: 767px)')
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1024px)')

  const { produtoDetalhado, adicionarProdutoAoCarrinho } = useContext(CarrinhoContext)

  return (
    <>
      <Typography variant={isMobile ? "h5" : isTablet ? "h4" : "h3"} component="div" className={styled['css-1ss7tz5-MuiTypography-root']}>
        Detalhes do Produto
      </Typography> 
      <Paper elevation={3} className={styled['css-7mzaav-MuiPaper-root']}>
        <CardMedia
          component="img"
          alt={produtoDetalhado?.nome}
          height="220"
          image={produtoDetalhado?.img}
          className={styled['css-1d3ft9k-MuiCardMedia-root']}
        />
        <Box className={styled['css-1sngk3y']}>
          <Box className={styled['css-1nj4yz3']}>
            <Typography variant="h6" component="div" className={styled['css-2ulfj5-MuiTypography-root']}>
              Produto:
            </Typography> 
            <Typography variant="h6" component="div" className={styled['css-1nr8djg-MuiTypography-root']}>
              {produtoDetalhado?.nome}
            </Typography> 
          </Box>
          <Box className={styled['css-1j52cd2']}>
            <Typography variant="body1" component="div" className={styled['css-1m18ozv-MuiTypography-root']}>
              Descrição:
            </Typography>
            <Typography variant="body1" component="div" className={styled['css-7al9ge-MuiTypography-root']}>
              {produtoDetalhado?.descricao}
            </Typography> 
          </Box>
          <Box className={styled['css-1j52cd2']}>
            <Typography variant="h6" component="div" className={styled['css-7urs1a-MuiTypography-root']}>
              Preço:
            </Typography>
            <Typography variant="h6" component="div" className={styled['css-1r7fhq2-MuiTypography-root']}>
              {produtoDetalhado?.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </Typography> 
          </Box>
          <Button size="small" onClick={() => adicionarProdutoAoCarrinho(produtoDetalhado!)}>Adicionar ao Carrinho</Button>
        </Box>
      </Paper>
    </>
  )
}