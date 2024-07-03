import { Typography } from '@mui/material'
import styled from './styles.module.css'

export function Rodape() {
  return (
    <footer className={styled.rodape}>
      <Typography variant="h6" component="div" className={styled['css-2ulfj5-MuiTypography-root']}>
        Desenvolvido por Alisson Romão Santos
      </Typography>
    </footer>
  )
}