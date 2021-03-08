import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Header = () => {
    const [count, setCount] = useContext(CategoryContext);
    return (
        <div>
            <h1>Header: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default Header;