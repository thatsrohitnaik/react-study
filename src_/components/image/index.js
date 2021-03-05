import React from "react";
import "./style.css";

class Image extends React.Component{
    render(){
        const { src } = this.props;
        return <img className="post-image" src={src}/>
    }
}

export default Image;