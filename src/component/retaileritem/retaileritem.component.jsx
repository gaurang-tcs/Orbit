import React from "react";

import { Link } from "react-router-dom";

import './retaileritem.styles.scss';

const RetailerItem = (props) => (
     <div className="retaileritem">

        <div className='name'>{props.retailers.name}</div>
        <div className='price'>{props.retailers.price}</div>
        <Link to='/details'>&#10095; </Link>
    </div>
);

export default RetailerItem;