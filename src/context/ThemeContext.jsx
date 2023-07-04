import React, { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState('')

    function themeEvent(themeActual) {
        setTheme(themeActual)
    }

    const contextValue = {
        themeEvent,
        theme
    }

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;
