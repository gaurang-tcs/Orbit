import React from "react";
import {FaPowerOff} from 'react-icons/fa';

import './header.styles.scss';

const Header = () => (
    <div className="header">
    <FaPowerOff className="logo" />

    <span className="title">rbit</span>
    
    </div>
    
);

export default Header;