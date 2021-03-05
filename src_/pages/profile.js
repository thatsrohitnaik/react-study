import React from "react";
import Image from "../components/image/";
import "./style.css"

class Profile extends React.Component {

    constructor(props){
        super(props)
        debugger;

        const { profileStore } = this.props.store;
        profileStore.getProfileData2();
    }

    componentDidMount() {

      }
    
    render() {
        
        const src= "https://instagram.fnag1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/102460924_723054888498401_6995821502154327219_n.jpg?_nc_ht=instagram.fnag1-2.fna.fbcdn.net&_nc_ohc=IH9GkTYRNEsAX90D-Qs&tp=1&oh=7e623d245c3ca8a6e24e8659b00f83da&oe=604FCB95";
        const src2= "https://instagram.fnag6-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/125051052_801733890395934_532019517797682182_n.jpg?_nc_ht=instagram.fnag6-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=uTSxmRQRMnsAX9GHF4m&tp=1&oh=49c26bc3f8e2547c213b2595b6c050af&oe=60529FCD";
        return (
            <div className="profile-div-main">
                <div className="profile-div-info">
                    <div className="profile-picture">
                        <img
                          className="profile-img" 
                          src="https://instagram.fnag1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/102460924_723054888498401_6995821502154327219_n.jpg?_nc_ht=instagram.fnag1-2.fna.fbcdn.net&_nc_ohc=IH9GkTYRNEsAX90D-Qs&tp=1&oh=7e623d245c3ca8a6e24e8659b00f83da&oe=604FCB95"/>
                    </div>
                    <div className="profile-information">
                        <div className="profile-username">
                            <h1>itsrohitnaike</h1>
                        </div>
                        <div className="profile-post-count">
                            <div>176 posts</div>
                            <div>73 follower</div>
                            <div>172 following</div>
                        </div>
                        <div className="profile-bio-info">
                            <h3>Rohit Naik Kundaikar</h3>
                            <p>You and I in this beautiful world 😘😘😘</p>
                        </div>
                    </div>
                </div>
                <div className="profile-div-post">
                    <div className="selection">
                        <div>
                            <div> posts </div>
                            <div> tags </div>
                            <div> saved </div>
                        </div>
                    </div>
                     <div className="image-grid">
                         <Image src={src}/>
                         <Image src={src2}/>
                         <Image src={src}/>
                         <Image src={src}/>
                         <Image src={src}/>
                     </div>
                     <div className="profile-tags">
                     </div>
                     <div className="profile-posts-save">
                     </div>
                </div>
            </div>
            );
    }
}

export default Profile;