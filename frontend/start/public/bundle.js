

// we find those in the contract artifacts, in the build folder that is created
// after compiling. here, we need to check HelloWorld.json,
// find the ABI and paste it into the var contractABI

var contractABI = [
    {
        "constant": true,
        "inputs": [],
        "name": "hello",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function"
      }
    ];
// for the var contractAddress, 1st deploy the contract
// in the terminal and get that address
//truffle develop, followed by truffle migrate
var contractAddress = "0x02FF5a3E3741237add2dF9e2Cf1F6E5af159A8df";

// Get web3 to interact with the smart contract
var web3 = new Web3('http://localhost:5777');

// create the contract instance (js object to interact with our smart contract)
// it's basically a pointer to the contract
var helloWorld = new web3.eth.Contract(contractABI, contractAddress);

// We need the hello method to be called, but we don't want it to be called
// before the HTML page finishes loading.
// so we will wrap the call method into a callback :
document.addEventListener('DOMContentLoaded', () => { 
  helloWorld.methods.hello().call()
      .then(result => {
          getElementById('hello').innerHTML = result
      })
});