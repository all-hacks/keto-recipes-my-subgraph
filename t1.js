const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://kovan.infura.io/v3/518884975627490dbd75c65bb329b603'));

async function app() {
let accounts = await web3.eth.getAccounts()
console.log(accounts.length)
}

web3.eth.getBalance("0x5A0b54D5dc17e0AadC383d2db43B0a0D3E029c4c", function(err, result) {
  if (err) {
    console.log(err)
  } else {
    console.log(web3.utils.fromWei(result, "ether") + " ETH")
  }
})



app()
console.log('111')
