import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import BookIcon from '@mui/icons-material/Book';
const Header = () => {
    return ( 
        <AppBar position="sticky">
            <Container>

            <Toolbar>
                <Typography component="h1" variant="h5" fontWeight="bold" flex="1">فروشگاه امپریال</Typography>
            <BookIcon />
            </Toolbar>
            </Container>
        </AppBar>
     );
}
 
export default Header;