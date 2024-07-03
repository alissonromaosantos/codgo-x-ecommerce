import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom'
import { Badge } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useContext, useState } from 'react'
import { CarrinhoContext } from '../../contexts/CarrinhoContext'

interface Props {
  window?: () => Window
}

const drawerWidth = 240
const navItems = ['Home']

export function Cabecalho(props: Props) {
  const { window } = props
  const [mobileOpen, setMobileOpen] = useState(false)

  const { carrinho } = useContext(CarrinhoContext)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  };

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <Typography variant="h6" sx={{ my: 2, textAlign: 'center' }}>
        Codgo.X E-Commerce
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <NavLink to={`/`} style={{ textDecoration: 'none', color: 'black' }}>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
      <NavLink to={`/carrinho`} style={{ textDecoration: 'none', color: 'black' }}>
        <Badge badgeContent={carrinho.length} color="secondary" sx={{ paddingLeft: '20px' }}>
          <ShoppingCartIcon />
        </Badge>
      </NavLink>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, fontWeight: 'bold'}}
          >
            <NavLink to={`/`} style={{ textDecoration: 'none', color: 'white' }}>
              Codgo.X E-Commerce
            </NavLink>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <NavLink to={`/`} style={{ textDecoration: 'none' }}>
                <Button key={item} sx={{ color: '#fff' }}>
                  {item}
                </Button>
              </NavLink>
            ))}
            <NavLink to={`/carrinho`} style={{ textDecoration: 'none', color: 'white' }}>
              <Badge badgeContent={carrinho.length} color="secondary" sx={{ marginLeft: '20px' }}>
                <ShoppingCartIcon />
              </Badge>
            </NavLink>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
