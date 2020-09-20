const RecipeRegistry = artifacts.require('./RecipeRegistry.sol')

module.exports = async callback => {
  const registry = await RecipeRegistry.deployed()

  console.log('Account address:', registry.address)

  let accounts = await web3.eth.getAccounts()
  console.log(accounts.length)
  console.log(accounts[0])

  let recipes2 = require('./my-recipes-merged-beautified.json');


  for ( let i = 3; i < 8; i++) {
    await registry.createRecipe(recipes2[i].title, recipes2[i].image, recipes2[i].ingredients, recipes2[i].steps, { from: accounts[0] })
  }


  //await registry.createRecipe('name', 'url', ['ingredients', "potato"], ['steps', 'step2'], { from: accounts[0] })
  //await registry.createRecipe('name', 'url', 'ingredients', 'steps')

  console.log('end')


  callback()
}
