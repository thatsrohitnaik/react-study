import React from "react";
import Image from "../../../Components/Image/";
import "./style.css";

class ProfileIntroSection extends React.Component {
  render() {
    const { tag, name, img, count, bio } = this.props.info;
    const { post, follower, following } = count;
    return (
      <>
        <div className="profile-div-info">
          <div className="profile-picture">
            <Image
              className="profile-img"
              src={img}
              fallbackSrc='asset/images/avatar.png'/>
          </div>
          <div className="profile-information">
            <div className="profile-username">
              <h1>{tag}</h1>
            </div>
            <div className="profile-post-count">
              <div>{post}</div>
              <div>{follower}</div>
              <div>{following}</div>
            </div>
            <div className="profile-bio-info">
              <h3>{name}</h3>
              <p>{bio}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProfileIntroSection;
