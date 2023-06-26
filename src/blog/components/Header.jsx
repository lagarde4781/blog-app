import { Grid } from '@mui/material';

export const Header = ({ title }) => {
    return (
        <Grid 
            container
            direction="column"
            alignItems="center"
            justifyContent="cocenter">

            <img src={`/assets/${title}.png`} alt={ title }></img>
    
        </Grid>
    )
}
