import { PropTypes } from "mobx-react";
import React from "react";
import { Link } from 'react-router-dom';
import "./Style.css";

const Navbar = (props) => {
    return (<div className="topnav">
        {props.children}
    </div>)
}

export default Navbar;