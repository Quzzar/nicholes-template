import { Title, Text, Anchor, rem, Code } from '@mantine/core';

export function Welcome() {
  return (
    <>
      <Title
        ta='center'
        mt={15}
        style={{
          fontSize: rem(100),
          fontWeight: 900,
          letterSpacing: rem(-2),
        }}
      >
        Welcome to{' '}
        <Text inherit variant='gradient' component='span' gradient={{ from: 'pink', to: 'yellow' }}>
          Nichole's Site
        </Text>
      </Title>
      <Text c='dimmed' ta='center' size='lg' maw={580} mx='auto' mt='xl'>
        <Text>
          This starter template includes a minimal setup. This is a{' '}
          <Anchor href='https://react.dev/' target='_blank' size='lg'>
            React
          </Anchor>{' '}
          application, using the{' '}
          <Anchor href='https://mantine.dev/' target='_blank' size='lg'>
            Mantine
          </Anchor>{' '}
          component library with{' '}
          <Anchor href='https://tabler.io/icons' target='_blank' size='lg'>
            Tabler Icons
          </Anchor>
          .
        </Text>
        <Text>
          To get started edit <Code>./App.tsx</Code>, <Code>./common/**</Code>, and{' '}
          <Code>./components/**</Code>.
        </Text>
      </Text>
    </>
  );
}
