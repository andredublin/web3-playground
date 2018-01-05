pragma solidity 0.4.19;

contract MyContract {
    address creator;
    uint myNumber;
    
    function MyContract() public {
        creator = msg.sender;
        myNumber = 5;
    }

    function getCreator() public constant returns(address) {
        return creator;
    }
    
    function setMyNumber(uint myNewNumber) public {
        myNumber = myNewNumber;
    }
 
    function getMyNumber() public constant returns(uint) {
        return myNumber;
    }
}