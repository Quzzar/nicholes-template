import { ActionIcon, Group, useMantineColorScheme } from '@mantine/core';
import { IconMoonFilled, IconSunFilled } from '@tabler/icons-react';

export function ColorSchemeToggle() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  return (
    <Group justify='center'>
      {colorScheme === 'dark' ? (
        <ActionIcon
          variant='gradient'
          size='lg'
          radius='lg'
          aria-label='Enable light mode'
          gradient={{ from: 'pink', to: 'yellow' }}
          onClick={() => setColorScheme('light')}
        >
          <IconSunFilled />
        </ActionIcon>
      ) : (
        <ActionIcon
          variant='gradient'
          size='lg'
          radius='lg'
          aria-label='Enable dark mode'
          gradient={{ from: 'pink', to: 'yellow' }}
          onClick={() => setColorScheme('dark')}
        >
          <IconMoonFilled />
        </ActionIcon>
      )}
    </Group>
  );
}
