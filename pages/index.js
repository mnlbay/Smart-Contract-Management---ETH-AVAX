import React, { useState } from 'react';

const App = () => {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [message, setMessage] = useState('');
  const [itemQuantities, setItemQuantities] = useState({});

  const setItemQuantity = () => {
    const itemQuantity = parseInt(quantity);
    if (isNaN(itemQuantity) || itemQuantity <= 0) {
      setMessage("Error: Quantity must be a positive integer");
      return;
    }
    setItemQuantities({ ...itemQuantities, [itemName]: itemQuantity });
    setMessage(`Quantity of ${itemName} set to ${quantity}`);
  };

  const getItemQuantity = () => {
    const itemQuantity = itemQuantities[itemName];
    if (itemQuantity === undefined) {
      setMessage(`Error: Quantity is not set for ${itemName}`);
      return;
    }
    setMessage(`Quantity of ${itemName} is ${itemQuantity}`);
  };

  const resetItemQuantity = () => {
    if (itemQuantities[itemName] === undefined) {
      setMessage(`Error: Quantity is not set for ${itemName}`);
      return;
    }
    const updatedQuantities = { ...itemQuantities };
    delete updatedQuantities[itemName];
    setItemQuantities(updatedQuantities);
    setMessage(`Quantity of ${itemName} has been reset`);
  };

  const getTotalQuantity = () => {
    let totalQuantity = 0;
    Object.values(itemQuantities).forEach(qty => {
      totalQuantity += qty;
    });
    setMessage(`Total quantity of all items: ${totalQuantity}`);
  };

  const getAllItems = () => {
    let allItems = 'Items and Quantities:\n';
    for (const [item, qty] of Object.entries(itemQuantities)) {
      allItems += `${item}: ${qty}\n`;
    }
    setMessage(allItems);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', fontFamily: 'Arial, sans-serif', background: '#f2f2f2' }}>
      <div style={{ maxWidth: '600px', width: '100%', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <h1 style={{ color: '#333', textAlign: 'center', marginBottom: '20px', fontSize: '28px' }}>Item Quantity Tracker</h1>
        <div style={{ marginBottom: '20px' }}>
          <input 
            type="text" 
            placeholder="Item Name" 
            value={itemName} 
            onChange={(e) => setItemName(e.target.value)} 
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px', width: 'calc(100% - 20px)', marginBottom: '10px' }}
          />
          <input 
            type="number" 
            placeholder="Quantity" 
            value={quantity} 
            onChange={(e) => setQuantity(e.target.value)} 
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px', width: 'calc(100% - 20px)' }}
          />
        </div>
        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
          <button 
            onClick={setItemQuantity} 
            style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer', fontSize: '16px', marginRight: '10px' }}
          >
            Set Item Quantity
          </button>
          <button 
            onClick={getItemQuantity} 
            style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer', fontSize: '16px', marginRight: '10px' }}
          >
            Get Item Quantity
          </button>
          <button 
            onClick={resetItemQuantity} 
            style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer', fontSize: '16px', marginRight: '10px' }}
          >
            Reset Item Quantity
          </button>
          <button 
            onClick={getTotalQuantity} 
            style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer', fontSize: '16px', marginRight: '10px' }}
          >
            Get Total Quantity
          </button>
          <button 
            onClick={getAllItems} 
            style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer', fontSize: '16px' }}
          >
            Get All Items
          </button>
          </div>
        <p style={{ margin: '10px 0', fontWeight: 'bold', color: '#333', textAlign: 'center', fontSize: '16px' }}>{message}</p>
      </div>
    </div>
  );
};

export default App;
