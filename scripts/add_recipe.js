const RecipeRegistry = artifacts.require('./RecipeRegistry.sol')

module.exports = async callback => {
  const registry = await RecipeRegistry.deployed()

  console.log('Account address:', registry.address)

  let accounts = await web3.eth.getAccounts()
  console.log(accounts.length)
  console.log(accounts[0])

  //await registry.createRecipe('name', 'url', ['ingredients', "potato"], ['steps', 'step2'], { from: accounts[0] })
  await registry.createRecipe('recipe no steps', 'dummy', [], ['step one ', 'step two'], { from: accounts[0] })
  //await registry.createRecipe('name', 'url', 'ingredients', 'steps')

  console.log('end')


  callback()
}
