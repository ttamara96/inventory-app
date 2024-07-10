import { createTheme } from '@mui/material/styles';
import { amber, indigo } from '@mui/material/colors';
import { huHU } from '@mui/x-data-grid/locales';
import { huHU as coreHuHU } from '@mui/material/locale';

export const theme = createTheme(
  {
    palette: {
      primary: indigo,
      secondary: amber,
    },
  },
  huHU, // x-data-grid translations
  coreHuHU, // core translations
);
