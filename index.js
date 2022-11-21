const fs = require('fs');
const prompt = require('prompt-sync')();

function writeKeys() {
    const organization = prompt('Organization: ');
    const key = prompt('API key: ');

    if (fs.existsSync('openai_key.js')) {
        fs.renameSync('openai_key.js', 'openai_key.js.bak');
    }

    fs.writeFileSync('openai_key.js', `module.exports = {
    'organization': '${organization}',
    'apiKey': '${key}'
}
`);
}

writeKeys();