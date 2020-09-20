const GravatarRegistry = artifacts.require('./GravatarRegistry.sol')

module.exports = async callback => {
  const registry = await GravatarRegistry.deployed()

  console.log('Account address:', registry.address)

  let accounts = await web3.eth.getAccounts()
  console.log(accounts.length)
  console.log(accounts[0])

  console.log("lucas", accounts[0])
  await registry.createGravatar('Lucas', 'https://picsum.photos/200/200', { from: accounts[0] })

  console.log('end')


  callback()
}
