import { createTheme } from '@mantine/core';
import { themeToVars } from '@mantine/vanilla-extract';

// This is where you can edit your theme!
export const theme = createTheme({
  primaryColor: 'orange',
});
export const vars = themeToVars(theme);
