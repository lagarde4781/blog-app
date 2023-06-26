import { AppBar, Grid, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const NavBar = ({ drawerWidth = 240 }) => {
    return (
        <AppBar position='fixed'>
            <Toolbar>
                <Grid container direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6" noWrap component="div">
                        <NavLink to="/" className={ ({ isActive }) => isActive ? 'active' : '' }>Blog App</NavLink>
                    </Typography>
                    <Typography variant="h6" noWrap component="div"> 
                        <NavLink to="/nike" className={ ({ isActive }) => isActive ? 'active' : '' }>Nike</NavLink>
                    </Typography>
                    <Typography variant="h6" noWrap component="div">
                        <NavLink to="/vans" className={ ({ isActive }) => isActive ? 'active' : '' }>Vans</NavLink>
                    </Typography>
                    <Typography variant="h6" noWrap component="div">
                        <NavLink to="/adidas" className={ ({ isActive }) => isActive ? 'active' : '' }>Adidas</NavLink>
                    </Typography>
                    <Typography variant="h6" noWrap component="div">
                        <NavLink to="/puma" className={ ({ isActive }) => isActive ? 'active' : '' }>Puma</NavLink>
                    </Typography>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
