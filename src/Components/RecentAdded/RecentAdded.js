import React from 'react';
import './RecentAdded.css';
import Product from '../Product/Product';

const RecentAdded = () => {

    return (
        <div className="recentlySoldProducts">
            <div className="cardHead">
                <h4>Recently Added</h4>
                <p>View more</p>
            </div>
            <Product></Product>
        </div>
    );
};

export default RecentAdded;