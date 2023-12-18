//SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.7;

contract Transaction {
    string public userName;
    string public userAddress;

    //Address --> Contract -- deposit
    // function deposit() external payable {
    // }

    function deposit(string memory _uaddress) external payable {
        userAddress = _uaddress;
    }

    //Contract --> Address  -- withdrawal
    function withdraw(address payable _to, uint _amount) external {
        _to.transfer(_amount);
    }

    function getBalance() external view returns(uint) {
        return address(this).balance;
    }

    function getAddress() external view returns(address) {
        return address(this);
    }

    // Function to get the user's name
    // function getUserName() external view returns (string memory) {
    //     return userName;
    // }

    // Function to get the user's address
    function getUserAddress() external view returns (string memory) {
        return userAddress;
    }
}