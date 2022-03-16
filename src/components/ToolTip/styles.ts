
import { makeStyles } from '@mui/styles';

export default makeStyles({
    fabButton: {
        position: "fixed",
        bottom: 0,
        zIndex: 1050,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    paper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "15px",
        borderRadius: "8px",
    },
    transparent: {
        backgroundColor: "white",
        color: "black",
    },
    dark: {
        backgroundColor: "#121212",
        color: "white",
    },
    slider: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "15px"
    },
    fabFavorite: {
        position: "fixed",
        bottom: 0,
        right: 0,
    }
}); 
