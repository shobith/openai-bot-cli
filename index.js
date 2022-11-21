const fs = require('fs');
const prompt = require('prompt-sync')();

function writeKeys() {
    const organization = prompt('Organization: ');
    const key = prompt('API key: ');

    fs.writeFileSync('openai_key.js', `module.exports = {
    'organization': '${organization}',
    'apiKey': '${key}'
}
`);
}

writeKeys();