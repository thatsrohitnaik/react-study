import React, {useState} from "react";
import "./style.css";

const Image = (props) => {

    const [src, setSrc] = useState(props.src);
    const [error, setError] = useState(false);
    const {fallbackSrc = 'asset/images/placeholder.jpg', className = '', loading = 'eager'} = props;

    const onError = () =>{
        if(!error){
           setSrc(fallbackSrc);
           setError(true)
        }
    }

    return (
        <img className={className}
                    src={src}
                    loading={loading}
                    onClick={props.onClick}
                    onError= {onError}/>
    );

}

export default Image;