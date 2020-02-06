import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import responsiveFontSizes from "@material-ui/core/styles/responsiveFontSizes";

const theme = responsiveFontSizes(createMuiTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
        background: {
            default: "#212121"
        },
    },
    typography: {
        h1: {
            fontFamily: "Poppins, sans-serif",
            fontWeight: "bold",
            fontSize: "32px"
        },
        h2: {
            fontFamily: "Quicksand, sans-serif",
            fontWeight: "100",
            fontSize: "24px",
        },
        h3: {
            fontFamily: "Quicksand, sans-serif",
            fontWeight: "100",
            fontSize: "24px",
            padding: "0 0 10px 0"
        },
        h4: {
            fontFamily: "Quicksand, sans-serif",
            fontWeight: 800,
            fontSize: "18px"
        },
        body1: {
            fontFamily: "Roboto, sans-serif",
            fontWeight: 300,
            fontSize: "16px"
        },
        body2: {
            fontFamily: "Roboto, sans-serif",
            fontWeight: 300,
            fontSize: "12px"
        }
    }
}));


ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>, document.getElementById('root'));

serviceWorker.unregister();
