import React, {useState} from "react";
import "./style.css";

const Image = (props) => {

    const [src, setSrc] = useState(props.src);
    const [error, setError] = useState(false);
    const {fallbackSrc = 'asset/images/placeholder.jpg', className = ''} = props;

    const onError = () =>{
        if(!error){
           setSrc(fallbackSrc);
           setError(true)
        }
    }

    return (
        <img className={className}
                    src={src}
                    loading="lazy"
                    onClick={props.onClick}
                    onError= {onError}/>
    );

}

export default Image;