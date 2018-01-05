function loadContract() {
    personal.unlockAccount(eth.accounts[0]);

    var contract = MyContract.new({from: eth.accounts[0], data: "0x6060604052341561000f57600080fd5b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506005600181905550610166806100666000396000f300606060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630ee2cb101461005c5780636ffd773c146100b1578063b32e737f146100d4575b600080fd5b341561006757600080fd5b61006f6100fd565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156100bc57600080fd5b6100d26004808035906020019091905050610126565b005b34156100df57600080fd5b6100e7610130565b6040518082815260200191505060405180910390f35b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b8060018190555050565b60006001549050905600a165627a7a72305820c6a3b53622a506e82212d5f9da387128f25f6e185e5df2411fe0db72c22536390029", gas: 500000});
}