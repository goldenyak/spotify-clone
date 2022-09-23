import * as React from 'react';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import ForwardToInboxSharpIcon from '@mui/icons-material/ForwardToInboxSharp';
import ChevronLeftSharpIcon from '@mui/icons-material/ChevronLeftSharp';
import {useRouter} from "next/router";
import {
  AppBar,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon, ListItemText,
  Toolbar,
  Typography
} from "@mui/material";

const menuItems = [
  {text: 'Главная', href: '/'},
  {text: 'Список треков', href: '/tracks'},
  {text: 'Список альбомов', href: '/albums'},
]

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter()

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div >
      <CssBaseline />
      <AppBar
        position="fixed"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
          >
            <MenuSharpIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Меню
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
      >
        <div>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftSharpIcon />
          </IconButton>
        </div>
        <List>
          {menuItems.map(({text, href}, index) => (
            <ListItem button key={href} onClick={() => router.push(href)}>
              <ListItemIcon>
                {index % 2 === 0 ? <ForwardToInboxSharpIcon /> : <MenuSharpIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}