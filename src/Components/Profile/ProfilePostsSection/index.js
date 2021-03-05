import React from "react";
import { observer } from "mobx-react";
import Post from "../../Post/"

@observer
class ProfilePostsSection extends React.Component {
  render() {
    const { posts = [] } = this.props;
    return (
      <>
        <div className="profile-div-post">
          <div className="selection">
            <div>
              <div> posts </div>
              <div> tags </div>
              <div> saved </div>
            </div>
          </div>
          <div className="image-grid">
            {
              posts.map((post, index) => <Post key={index} post={post} />)
            }
          </div>
          <div className="profile-tags">
          </div>
          <div className="profile-posts-save">
          </div>
        </div>
      </>
    );
  }
}

export default ProfilePostsSection;
