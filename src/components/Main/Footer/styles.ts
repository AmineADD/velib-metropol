import { makeStyles } from '@mui/styles';

export default makeStyles({
    description: {
        lineHeight: 1.5,
        fontSize: "1.5rem",
        textAlign: "center",
    },
    transparent: {
        backgroundColor: "transparent",
        color: "black",
    },
    dark: {
        backgroundColor: "#121212",
        color: "white",
    },
    code: {
        background: "transparent",
        borderRadius: "5px",
        padding: "0.75rem",
        fontSize: "1.1rem",
        fontFamily: `Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace`
    }
});
