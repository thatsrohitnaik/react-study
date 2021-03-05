import React from "react";
import "./style.css";
import Modal from "../Modal/";
import DetailPost from "./Detail/";

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
            <img className="post-image" src={src} onClick={this.toggleDialog} />
            {
                open && <Modal toggleDialog={this.toggleDialog}><DetailPost post={post} /></Modal>
            }
        </>)
    }
}

export default Post;