const fs = require('fs');
const readline = require('readline');
const { organization, apiKey } = require('./openai_key');
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({ apiKey });
const openai = new OpenAIApi(configuration);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

function generatePrompt(question) {
    return `${fs.readFileSync('haikubot_prompt', 'utf8')}Q: ${question}`;
}

async function answer(question) {
    const completion = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: generatePrompt(question),
        temperature: 0.9,
        max_tokens: 400
    });
    return {
        result: completion.data.choices[0].text
    };
}

const haiku_repl = function () {
    rl.question('>>> ', async (prompt) => {
        await answer(prompt)
            .then(response => response.result.length > 0 ? response.result : '🤷🏽')
            .then(result => result.replace(/A:[\n]?/, '\n').trim())
            .then(console.log);
        haiku_repl();
    });
};

haiku_repl();