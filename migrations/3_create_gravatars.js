const GravatarRegistry = artifacts.require('./GravatarRegistry.sol')

module.exports = async function(deployer) {
  const registry = await GravatarRegistry.deployed()

  console.log('Account address:', registry.address)

  let accounts = await web3.eth.getAccounts()

//  let account = '0x1Fd5F871d1f9865B0Acb8A058FaCB22c6023cdf9'


  await registry.createGravatar('Peter', 'https://picsum.photos/200/200', {
    from: accounts[0],
  })

/*
  await registry.createGravatar('Lucas', 'https://picsum.photos/200/300', {
    from: account,
  })
  await registry.createGravatar('Chin', 'https://picsum.photos/200/300', {
    from: accounts[0],
  })
  await registry.createGravatar('Aliu', 'https://picsum.photos/200/300', {
    from: accounts[0],
  })
  await registry.createGravatar('Muthu', 'https://picsum.photos/200/300', {
    from: accounts[0],
  })
*/
}
