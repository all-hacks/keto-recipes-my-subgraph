const GravatarRegistry = artifacts.require('./GravatarRegistry.sol')

module.exports = async callback => {
  const registry = await GravatarRegistry.deployed()

  console.log('Account address:', registry.address)

  let accounts = [];

  accounts.push('0x7D51869c14C85E79FF76A8C15dc9ed3148E0CCC3'.toLowerCase());
  accounts.push('0x1Fd5F871d1f9865B0Acb8A058FaCB22c6023cdf9');
  accounts.push('0xcAC9978cB45A3C670C3e3beDAe2D018E5fd2C2DE');
  accounts.push('0xF14b630Ce6Ae17b62A6066B8Ce7FbbB3c3924f66');
  accounts.push('0x7a09DA4A9A638974eE0c77b456154d1593366b22');

  console.log(accounts.length)
  console.log(accounts[0])

  for (let a of accounts) {
  var result  = await registry.getGravatar(a)
  console.log(result[0], result[1])
  }

  console.log('end')


  callback()
}
