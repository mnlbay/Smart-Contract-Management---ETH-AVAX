# Item Quantity Tracker

This repository contains a Solidity smart contract for tracking the quantities of items, along with a frontend application for interacting with the deployed contract.

## Smart Contract

The `ItemQuantityTracker` contract allows users to set, get, reset, and retrieve the quantities of different items. It's designed to be simple and efficient for managing inventory and stock levels on the Ethereum blockchain.

### Features

- **setItemQuantity**: Allows users to set the quantity for a specific item.
- **getItemQuantity**: Enables users to retrieve the quantity of a specific item.
- **resetItemQuantity**: Provides functionality to reset the quantity of a specific item.
- **getTotalQuantity**: Calculates and returns the total quantity of all items combined.
- **getAllItems**: Returns a formatted string containing all items and their quantities for easy monitoring.

## Frontend Application

The frontend application provides a user-friendly interface for interacting with the deployed smart contract. Users can perform various actions such as setting item quantities, getting item quantities, resetting item quantities, calculating total quantities, and retrieving a list of all items and their quantities.

### Deployment with Frontend Application

To deploy the smart contract along with the frontend application, follow these steps:

1. **Compile and Deploy Smart Contract**:
   - Compile the `ItemQuantityTracker.sol` file using a Solidity compiler like [Remix](https://remix.ethereum.org/).
   - Deploy the compiled contract to an Ethereum-compatible network using a tool like [Remix](https://remix.ethereum.org/) or [Truffle](https://www.trufflesuite.com/truffle). Note the deployed contract address.

2. **Set Up Frontend Application**:
   - Clone the repository containing the frontend application code to your local machine.
   - Install the required dependencies by navigating to the cloned directory and running `npm install`.
   - Open the frontend application code and replace the placeholder `'YOUR_CONTRACT_ADDRESS'` with the actual deployed contract address.

3. **Run Frontend Application Locally**:
   - Start the development server by running `npm start`.
   - Interact with the frontend application interface to interact with the deployed smart contract.

4. **Deploy Frontend Application**:
   - If you wish to deploy the frontend application to a hosting service for public access, build the application using `npm run build` and deploy the generated build files to a hosting service like GitHub Pages, Netlify, Vercel, or any other hosting provider of your choice.

## Author
-8202636
-Alexander Yeoj B.Bombais

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
