import { createContext, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Shipment from './Components/Shipment/Shipment';

// To pass a value in any location
export const CategoryContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  return (
    <CategoryContext.Provider value={[count, setCount]}>
      <p>Count value: {count}</p>
      <Header></Header>
      <Home></Home>
      <Shipment></Shipment>
    </CategoryContext.Provider>
  );
}

export default App;
