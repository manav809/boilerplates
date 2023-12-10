import { createTheme, responsiveFontSizes } from "@mui/material";
import { blue, red, green } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[200],
      light: blue[800],
      dark: blue[100],
    },
    secondary: {
      main: red[100],
    },
    success: {
      main: green[50],
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlinedPrimary: {
          borderRadius: 20,
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.size === "large" && {
            width: 100,
            height: 100,
          }),
        }),
      },
      defaultProps: {
        size: "medium"
      },
    },
  },
});

export default responsiveFontSizes(theme);
