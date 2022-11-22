const fs = require('fs');
const readline = require('readline');
const { organization, apiKey } = require('../openai_key');
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({ apiKey });
const openai = new OpenAIApi(configuration);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

async function answer(prompt) {
    const completion = await openai.createCompletion({
        model: 'code-davinci-002',
        prompt: `<|endoftext|>/* I start with a blank HTML page, and incrementally modify it via <script> injection. Written for Chrome. */\n/* Command: Add \"Hello World\", by adding an HTML DOM node */\nvar helloWorld = document.createElement('div');\nhelloWorld.innerHTML = 'Hello World';\ndocument.body.appendChild(helloWorld);\n/* Command: Clear the page. */\nwhile (document.body.firstChild) {\n  document.body.removeChild(document.body.firstChild);\n}\n\n/* Command: write a function to reverse a string */\nfunction reverseString(str) {\n  return str.split('').reverse().join('');\n}\n\n/* Command: write a function that tests if a number is prime or not */\nfunction isPrime(num) {\n  if (num < 2) {\n    return false;\n  }\n  for (var i = 2; i < num; i++) {\n    if (num % i === 0) {\n      return false;\n    }\n  }\n  return true;\n}\n\n/* Command: ${prompt} */\n`,
        temperature: 0,
        max_tokens: 1000,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop: '/* Command:'
    });

    return {
        result: completion.data.choices[0].text
    };
}

const codex_repl = function () {
    rl.question('>>> ', async (prompt) => {
        await answer(prompt)
            .then(response => response.result.length > 0 ? response.result : '🤷🏽')
            .then(result => result.trim())
            .then(console.log);
            codex_repl();
    });
};

codex_repl();