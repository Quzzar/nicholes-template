import '@mantine/core/styles.css';
import { Box, MantineProvider, Stack } from '@mantine/core';
import { theme } from './theme';
import { ColorSchemeToggle } from './components/ColorSchemeToggle';
import { Welcome } from './components/Welcome';
import { PandorasBox } from './components/PandorasBox';

export default function App() {
  /* This is your main core component! */
  return (
    <MantineProvider theme={theme}>
      {/* Put color scheme toggle button in the top right corner */}
      <Box
        style={{
          position: 'absolute',
          top: 15,
          right: 15,
        }}
      >
        <ColorSchemeToggle />
      </Box>
      {/* Stack is a layout component that arranges its children in a vertical stack */}
      <Stack gap={'lg'}>
        <Welcome />
        <PandorasBox />
      </Stack>
    </MantineProvider>
  );
}
