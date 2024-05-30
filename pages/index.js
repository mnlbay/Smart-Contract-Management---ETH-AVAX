import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import atm_abi from "../artifacts/contracts/Assessment.sol/Assessment.json";

export default function HomePage() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [atm, setATM] = useState(undefined);
  const [balance, setBalance] = useState(undefined);
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [owner, setOwner] = useState("");

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const atmABI = atm_abi.abi;

  useEffect(() => {
    const getWallet = async () => {
      if (window.ethereum) {
        setEthWallet(window.ethereum);
      }
    };
    getWallet();
  }, []);

  useEffect(() => {
    const handleAccount = (account) => {
      if (account) {
        console.log("Account connected: ", account);
        setAccount(account);
      } else {
        console.log("No account found");
      }
    };

    const connectAccount = async () => {
      if (!ethWallet) {
        alert("MetaMask wallet is required to connect");
        return;
      }
      const accounts = await ethWallet.request({ method: "eth_requestAccounts" });
      handleAccount(accounts[0]);
    };

    const getATMContract = () => {
      if (ethWallet) {
        const provider = new ethers.providers.Web3Provider(ethWallet);
        const signer = provider.getSigner();
        const atmContract = new ethers.Contract(contractAddress, atmABI, signer);
        setATM(atmContract);
      }
    };

    if (ethWallet) {
      connectAccount();
      getATMContract();
    }
  }, [ethWallet]);

  useEffect(() => {
    const fetchOwner = async () => {
      if (atm) {
        const owner = await atm.owner();
        setOwner(owner);
      }
    };

    fetchOwner();
  }, [atm]);

  const getBalance = async () => {
    if (atm) {
      const balance = await atm.getBalance();
      setBalance(balance.toNumber());
    }
  };

  const handleDeposit = async () => {
    if (atm && depositAmount) {
      const tx = await atm.deposit(depositAmount);
      await tx.wait();
      getBalance();
      setDepositAmount(""); // Clear input field after deposit
      window.alert("Deposit successful"); // Alert for successful deposit
    }
  };

  const handleWithdraw = async () => {
    if (atm && withdrawAmount) {
      const tx = await atm.withdraw(withdrawAmount);
      await tx.wait();
      getBalance();
      setWithdrawAmount(""); // Clear input field after withdrawal
      window.alert("Withdrawal successful"); // Alert for successful withdrawal
    }
  };

  const handleWithdrawAll = async () => {
    if (atm && balance) {
      const tx = await atm.withdraw(balance);
      await tx.wait();
      getBalance();
      window.alert("Withdrawal successful"); // Alert for successful withdrawal
    }
  };

  const checkBalance = () => {
    window.alert("Your Balance: " + balance);
  };

  const initUser = () => {
    if (!ethWallet) {
      return <p>Please install Metamask in order to use this ATM.</p>;
    }

    if (!account) {
      return (
        <button onClick={() => window.location.reload()}>
          Please connect your Metamask wallet
        </button>
      );
    }

    if (balance === undefined) {
      getBalance();
    }

    return (
      <div>
        <p>Your Account: {account}</p>
        <p>Owner's Address: {owner}</p>
        <button onClick={checkBalance}>Check balance</button>
        <div>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(e.target.value)}
            placeholder="Enter deposit amount"
          />
          <button onClick={handleDeposit}>Deposit BMB coin</button>
        </div>
        <div>
          <input
            type="number"
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(e.target.value)}
            placeholder="Enter withdraw amount"
          />
          <button onClick={handleWithdraw}>Withdraw BMB coin</button>
        </div>
        <button onClick={handleWithdrawAll}>Withdraw All BMB coin</button>
      </div>
    );
  };

  return (
    <main className="container">
      <header>
        <h1>Welcome to BombNet ATM</h1>
      </header>
      {initUser()}
      <style jsx>
        {`
          .container {
            text-align: center;
          }
          div {
            margin-bottom: 10px;
          }
        `}
      </style>
    </main>
  );
}
