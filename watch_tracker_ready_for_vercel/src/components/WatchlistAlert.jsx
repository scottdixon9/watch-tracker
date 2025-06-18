import { useState } from 'react';

export default function WatchlistAlert({ refId, brand, model, onSetAlert }) {
  const [price, setPrice] = useState('');

  const handleSubmit = () => {
    if (price) {
      onSetAlert({ ref: refId, brand, model, target_price: Number(price) });
    }
  };

  return (
    <div>
      <h4>Set Price Alert</h4>
      <input
        type="number"
        placeholder="Target Price"
        value={price}
        onChange={e => setPrice(e.target.value)}
      />
      <button onClick={handleSubmit}>Set Alert</button>
    </div>
  );
}
