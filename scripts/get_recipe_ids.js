const RecipeRegistry = artifacts.require('./RecipeRegistry.sol')

module.exports = async callback => {
  const registry = await RecipeRegistry.deployed()

  console.log('Account address:', registry.address)

  let result = await registry.getRecipeIds()
  console.log(result)

  console.log('end')


  callback()
}
