"use client";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import React from "react";

const darkTheme = {
  colors: {
    background: "#0D1117",
    primary: "#00BFA6",
    secondary: "#7F5AF0",
    text: "#C9D1D9",
  },
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: black;
    color: #c8d1d9;
    font-family: var(--font-geist-sans), var(--font-geist-mono), sans-serif;
    line-height: 1.6;
    overflow-x: hidden;
  }

  ::selection {
    background: red;
    color: red;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #161b22;
  }

  ::-webkit-scrollbar-thumb {
    background: #03bfa6;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #03bfa6;
  }
`;

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}