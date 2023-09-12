import React from "react";
import ReactDOM from "react-dom/client";

// Router for SPA
import { BrowserRouter as Router } from "react-router-dom";

// Themes
import { ThemeProvider } from "@mui/material/styles";
import theme from "./utils/theme";
import "./index.css";

// App
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
