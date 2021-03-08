import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Shipment = () => {
    const [count, setCount] = useContext(CategoryContext);
    return (
        <div>
            <h3>Shipment count is: {count}</h3>
            <button onClick={() => setCount(count + 1)}>Shipment Increment</button>
        </div>
    );
};

export default Shipment;