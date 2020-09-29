const SanctionRegistry = artifacts.require('./SanctionRegistry.sol')

module.exports = async function(deployer) {
  await deployer.deploy(SanctionRegistry)
}
