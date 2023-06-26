import { Box, Toolbar } from '@mui/material';
import { NavBar } from '../components/NavBar';

export const BlogLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex'}}>

            <NavBar/>

            <Box 
                component='main'
                sx={{ flexGrow: 1, p: 3 }}
            >   
                <Toolbar/>

                { children }
            </Box>
            
        </Box>
    )
}
