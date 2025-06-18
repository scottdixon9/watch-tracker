import React from 'react';
import PriceChart from './components/PriceChart';
import RedditComments from './components/RedditComments';
import WatchlistAlert from './components/WatchlistAlert';

const dummyHistory = [{ date: '2024-01-01', price: 10000 }, { date: '2024-02-01', price: 10500 }];
const dummyComments = [{ user: 'Alice', timestamp: Date.now(), text: 'Love this watch!' }];
const handleSetAlert = (alert) => console.log('Alert Set:', alert);

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h2>Watch Tracker Demo</h2>
      <PriceChart history={dummyHistory} />
      <hr />
      <RedditComments comments={dummyComments} />
      <hr />
      <WatchlistAlert refId="116610LN" brand="Rolex" model="Submariner Date" onSetAlert={handleSetAlert} />
    </div>
  );
}

export default App;
