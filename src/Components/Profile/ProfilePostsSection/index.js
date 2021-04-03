import React from "react";
import { observer } from "mobx-react";
import { AppContext } from "../../../Context/AppContext";
import Post from "../../Post/";

class ProfilePostsSection extends React.Component {
  render() {
    const { posts = [] } = this.props;

    return (
      <AppContext.Consumer>
        { (t) => <div className="profile-div-post">
          <div className="selection">
            <div>
              <div> {t("posts")} </div>
              <div> {t("tags")} </div>
              <div> {t("saved")} </div>
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
        </div>}
      </AppContext.Consumer>
    );
  }
}

export default ProfilePostsSection;
