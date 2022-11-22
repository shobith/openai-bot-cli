# openai-bot-cli

Quick way to create OpenAI bots and test them out

0.  if you don't have node and yarn, follow some tutorial to do this.
1. `cd openai-bot-cli`
2.  Run `yarn` and then `yarn store_keys` to store your key and organization into the `openai_key.js` file
3.  To run existing bots: see `scripts` section in `package.json` and run the bot you want, ex: `yarn haikubot`
4.  To add a bot, make a folder, add the index.js and prompt.txt files and then add it to the `scripts` section in `package.json` similar to the other example bots.
