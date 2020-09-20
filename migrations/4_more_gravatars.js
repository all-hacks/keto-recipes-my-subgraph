const GravatarRegistry = artifacts.require('./GravatarRegistry.sol')

module.exports = async function(deployer) {
  const registry = await GravatarRegistry.deployed()

  console.log('Account address:', registry.address)

  let accounts = []

  //accounts.push('0xf02beB4F17598440Ca0B6990927a30dA2C01eB1E');
  accounts.push('0x7D51869c14C85E79FF76A8C15dc9ed3148E0CCC3');
  accounts.push('0x1Fd5F871d1f9865B0Acb8A058FaCB22c6023cdf9');
  accounts.push('0xcAC9978cB45A3C670C3e3beDAe2D018E5fd2C2DE');
  accounts.push('0xF14b630Ce6Ae17b62A6066B8Ce7FbbB3c3924f66');
  accounts.push('0x7a09DA4A9A638974eE0c77b456154d1593366b22');

  console.log(accounts.length);


/*

  await registry.createGravatar('Mandy', 'https://picsum.photos/200/300', {
    from: accounts[0],
  })

  await registry.createGravatar('Lucas', 'https://picsum.photos/200/300', {
    from: account,
  })
*/
  console.log("lucas", accounts[4])
  await registry.createGravatar('Lucas', 'https://picsum.photos/200/200', {
    from: accounts[4],
  })

/*
  console.log("chin", accounts[0])
  await registry.createGravatar('Chin', 'https://picsum.photos/200/200', {
    from: accounts[0],
  })
  console.log("ali", accounts[1])
  await registry.createGravatar('Ali', 'https://picsum.photos/300/300', {
    from: accounts[1],
  })
  console.log("muthu", accounts[2])
  await registry.createGravatar('Muthu', 'https://picsum.photos/250/300', {
    from: accounts[2],
  })
*/
}
