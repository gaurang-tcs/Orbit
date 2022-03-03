import React from "react";

import './details.styles.scss';

import CardItem from '../../component/card-item/card-item.component';

const Details = () => (
    <div className="details">
        <span className="details-title">anjali retailer</span>
        <span className="orders"> Orders:60000</span>

        <div className='progress-history'>
            <div className="in-progress">
                In Progress
            </div>

            <div className="Order-history">
                Order History
            </div>
        </div>

            <CardItem />
              <br/>
            <CardItem />

    </div>
);

export default Details;