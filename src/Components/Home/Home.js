import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Categories from '../Categories/Categories';

const Home = () => {
    const count = useContext(CategoryContext);
    return (
        <div style={{border:"1px solid blue"}}>
            <h1>Home: {count}</h1>
            <Categories count={count}></Categories>
        </div>
    );
};

export default Home;