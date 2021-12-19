import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { FC } from "react";

export type CustomizeOptions = typeof optionsTheme;

const optionsTheme = {
  spaces: {
    default: "10px",
    medium: "25px",
    big: "50px",
  },
  borderRadius: {
    default: "10px",
    large: "20px",
  },
  fontSize: {
    big: "40px",
    medium: "32px",
    primary: "28px",
    text: "20px",
    small: "18px"
  },
  lineHeight: {
    wide: "36px",
  },
  colors: {
    orange: "#ff890f",
    limeGreen: "#69d681",
    grayish: "#808385",
    black: "#000",
    blue: "#1976d2",
  },
};

const theme = {
  ...createTheme(optionsTheme),
};

const CustomThemeProvider: FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
