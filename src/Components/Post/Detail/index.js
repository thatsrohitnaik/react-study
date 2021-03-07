import React from "react";
import "./style.css";

const Post = (props) =>{

    const {src} = props.post;
    return(
        <>
        <div className="flex">
            <div className="div-img">
               <img className="details-img" src={src}/>
            </div>
            <div>
              detail
            </div>
        </div>
        </>
    )
}

export default Post;