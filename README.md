# openai-bot-cli

Quick way to create OpenAI bots and test them out

0.  if you don't have node and yarn, follow some tutorial to do this.

0.5 `cd openai-bot-cli`
1.  Run `yarn` and then `yarn store_keys` to store your keys into the `openai_key.js` file
2.  To run existing bots: see `scripts` section in `package.json` and run the bot you want, ex: `yarn haikubot`
3.  To add a bot, make a folder, add the index.js and prompt.txt files and then add it to the `scripts` section in `package.json` similar to the other example bots.
