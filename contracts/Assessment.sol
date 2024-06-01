// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Assessment {
    // State variables
    address public owner;
    uint256 public balance;

    // Constructor to set the initial balance and owner
    constructor(uint256 initBalance) payable {
        // Ensure the initial balance sent matches the initBalance parameter
        require(msg.value == initBalance, "Initial balance must match the value sent");
        owner = msg.sender;
        balance = initBalance;
    }

    // Modifier to restrict functions to the contract owner
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action");
        _;
    }

    // Function to deposit Ether into the contract
    function deposit() public payable {
        balance += msg.value;
    }

    // Function to withdraw a specified amount of Ether from the contract
    function withdraw(uint256 amount) public onlyOwner {
        // Ensure the contract has enough balance for the withdrawal
        require(amount <= balance, "Insufficient balance");
        balance -= amount;
        payable(owner).transfer(amount);
    }

    // Function to get the current balance of the contract
    function getBalance() public view returns (uint256) {
        return balance;
    }
}
