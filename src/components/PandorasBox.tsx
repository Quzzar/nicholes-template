import { Box, Button, Group, LoadingOverlay, Stack, Textarea } from '@mantine/core';
import { P5CanvasInstance, ReactP5Wrapper } from '@p5-wrapper/react';
import { useCallback, useState } from 'react';
import { generateDesire } from '../utils/ai-handler';
import { DEFAULT_PANDORAS } from '../utils/defaults';

export function PandorasBox() {
  const [opened, setOpened] = useState(false);

  const width = Math.min(window.innerWidth / 3, 300); // = min of a third the screen width or 300px
  const height = width; // square canvas

  const [loading, setLoading] = useState(false);
  const [inputDesire, setInputDesire] = useState(DEFAULT_PANDORAS.desire);
  const [displayingResult, setDisplayingResult] = useState(DEFAULT_PANDORAS.result);

  // Only when the user clicks the "Manifest" button, we update the displayed result
  const sketch = useCallback(
    (p5: P5CanvasInstance) => {
      p5.setup = () => p5.createCanvas(width, height, p5.WEBGL); // use WEBGL renderer

      p5.draw = () => {
        // Run the code generated by the AI
        // (btw this is incredibly unsafe and you should never do this in production)
        eval(displayingResult);
      };
    },
    [displayingResult]
  );

  return (
    <Group justify='center'>
      <Stack w={width} gap={0}>
        {opened ? (
          <Stack gap={'sm'} pb={'xl'}>
            <Box style={{ borderRadius: 5, overflow: 'hidden', position: 'relative' }}>
              <ReactP5Wrapper sketch={sketch} />
              <LoadingOverlay visible={loading} />
            </Box>
            <Textarea
              placeholder={`Imagine your heart's desire...`}
              value={inputDesire}
              onChange={(e) => setInputDesire(e.currentTarget.value)}
            />
            <Button
              disabled={!inputDesire.trim()}
              onClick={async () => {
                if (loading) return;
                setLoading(true);
                const result = await generateDesire(inputDesire, width, height);
                // console.log(result);
                setDisplayingResult(result);
                setLoading(false);
              }}
              // loading={loading}
            >
              Manifest
            </Button>
          </Stack>
        ) : (
          <Button
            variant={opened ? 'filled' : 'outline'}
            onClick={() => {
              setOpened(true);
            }}
          >
            Open Pandora's Box
          </Button>
        )}
      </Stack>
    </Group>
  );
}
