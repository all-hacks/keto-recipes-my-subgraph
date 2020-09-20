const RecipeRegistry = artifacts.require('./RecipeRegistry.sol')

module.exports = async function(deployer) {
  await deployer.deploy(RecipeRegistry)
}
