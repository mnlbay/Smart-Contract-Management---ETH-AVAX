// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ItemQuantityTracker {
    mapping(string => uint256) private itemQuantities;

    function setItemQuantity(string memory itemName, uint256 quantity) public {
        require(quantity > 0, "Quantity must be greater than zero");
        itemQuantities[itemName] = quantity;
    }

    function getItemQuantity(string memory itemName) public view returns (uint256) {
        return itemQuantities[itemName];
    }

    function resetItemQuantity(string memory itemName) public {
        delete itemQuantities[itemName];
    }

    function getTotalQuantity() public view returns (uint256) {
        uint256 totalQuantity;
        for (uint256 i = 0; i < items.length; i++) {
            totalQuantity += itemQuantities[items[i]];
        }
        return totalQuantity;
    }

    function getAllItems() public view returns (string memory) {
        string memory allItems;
        for (uint256 i = 0; i < items.length; i++) {
            allItems = string(abi.encodePacked(allItems, items[i], ": ", toString(itemQuantities[items[i]]), "\n"));
        }
        return allItems;
    }

    // Helper function to convert uint to string
    function toString(uint256 value) internal pure returns (string memory) {
        // Inspired by OraclizeAPI's implementation - MIT license
        if (value == 0) {
            return "0";
        }
        uint256 temp = value;
        uint256 digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));
            value /= 10;
        }
        return string(buffer);
    }
}
