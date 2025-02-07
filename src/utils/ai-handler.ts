// A rate limited wrapper around the OpenAI API, feel free to use this for your own projects
const AI_FUNCTION_URL =
  'https://msgback.azurewebsites.net/api/OpenAICompletion?code=URUj647XlDjbH1PMiOXrVZQi7OEoBGezlfnb5VOfOMeqAzFuD92TcQ==';

/**
 * Generate a desire for the AI to create
 * @param desire - The desire to generate
 * @returns - The generated code
 */
export async function generateDesire(
  desire: string,
  width: number,
  height: number
): Promise<string> {
  const requestBody = {
    content: `
Good afternoon AI, you've heard of p5.js right? The JavaScript library that allows you to easily make art and designs in JS?

Yeah that's the one - you're so smart. Okay, you're gonna be given the p5 instance and and some instructions on what you're supposed to create with p5. And you're gonna output the javascript code using that p5 instance that would be getting pasted in the p5's draw callback function.
It'll basically go like this:
(p5: P5CanvasInstance) => {
      p5.setup = () => p5.createCanvas(width, height, p5.WEBGL);

      p5.draw = () => {
        <YOUR CODE HERE>
      };
    }

Btw, don't use p5.width or p5.height, the width is ${width} and height is ${height}. Make sure the positions start from -${width}, -${height}. Any functions need to be called on the p5 instance, like p5.fill(139, 69, 19);
All I want you to do is output your code in plain text. Please do NOT wrap it in \`\`\`javascript or anything like that. Just plain text. And ONLY the code that goes inside the draw function. No setup function code - just the code inside draw function.

You ready? Okay here's your instructions on what you need to draw:

${desire}

# Output:
`.trim(),
    model: 'gpt-4o',
  };

  try {
    const response = await fetch(AI_FUNCTION_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      console.error(`AI request failed with status ${response.status}`);
      return '';
    }

    return await response.text();
  } catch (error) {
    console.error('AI request failed with error', error);
    return '';
  }
}
