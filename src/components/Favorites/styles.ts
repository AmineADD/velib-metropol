import { makeStyles } from '@mui/styles';

export default makeStyles({
    notConnected: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "fixed",
        top: "50%",
    },

    listBg: {
        backgroundColor: "#D3D3D3",
        borderRadius: "25px",
        padding: "5px",
    },
    grid: {
        paddingTop: "2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        flexDirection: "column",
        height: "94vh",
    },
    transparent: {
        backgroundColor: "transparent",
        color: "black",
    },
    dark: {
        backgroundColor: "#121212",
        color: "white",
    },
    ListItemText: {
        display: "flex",
        width: "100%",
    },
    columnList: {
        display: "flex",
        flexDirection: "column",
    },
    list: {
        display: "flex",
        flexWrap: "wrap",
        justifycontent: "flex-start",
        alignItems: "center",
        width: "100%",
        padding: "15px",
        gap: "15px"
    },
    listItem: {
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "5px",
    },
    button: {
        color: "#d32f2f",
        cursor: "pointer",
    },
    item: {
        textAlign: "center",
    }
});
