import React from "react";
import './homepage.styles.scss';

import Card from "../../component/card/card.component";
import Retailer  from "../../component/retailer/retailer.component";

const HomePage = () => (
    <div className="homepage">
   
     <Card />
     <Retailer />
    </div>
    
);

export default HomePage;