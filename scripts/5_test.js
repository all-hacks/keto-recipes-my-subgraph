const GravatarRegistry = artifacts.require('./GravatarRegistry.sol')

module.exports = async function(deployer) {
  const registry = await GravatarRegistry.deployed()

  console.log('Account address:', registry.address)

  let accounts = await web3.eth.getAccounts()
  console.log(accounts.length)
  console.log(accounts[0])
}
