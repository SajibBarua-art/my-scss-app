import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetail = () => {
    const category = useContext(CategoryContext)
    return (
        <div>
            {/* <h1>Category details with props method: {props.count}</h1> */}
            <h6>Selected Category with context API method: {category}</h6>
        </div>
    );
};

export default CategoryDetail;