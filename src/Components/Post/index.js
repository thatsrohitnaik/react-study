import React from "react";
import Modal from "../Modal/";
import DetailPost from "./Detail/";
import Image from "../../Components/Image/";
import "./style.css";

class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }
    toggleDialog = () => {
        const { open } = this.state;
        this.setState({ open: !open })
    }
    render() {
        const { post } = this.props;
        const { src } = post;
        const { open } = this.state;
        return (<>
            <Image className="post-image"
                 src={src}
                 onClick={this.toggleDialog}
                 loading="lazy"/>
            {
                open && <Modal toggleDialog={this.toggleDialog}><DetailPost post={post} /></Modal>
            }
        </>)
    }
}

export default Post;