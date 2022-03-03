import React from "react";
import RetailerItem from "../retaileritem/retaileritem.component";
import './retailer-list.styles.scss';

const RetailerList = ({retailers}) => {
    return (
    <div className='retailerlist'>
    {retailers.map(
        retailers =>(
            <RetailerItem key={retailers.id} retailers={retailers} />))
    
        }
    </div>
    )
};

export default RetailerList;