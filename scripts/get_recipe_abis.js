/// run with node, not npx truffle


const fs = require('fs');
const contract = JSON.parse(fs.readFileSync('./build/contracts/RecipeRegistry.json', 'utf8'));
console.log(JSON.stringify(contract.abi));
