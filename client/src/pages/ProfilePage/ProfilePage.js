import React, { Component } from "react";
// import API from "../../utils/API";

import ProfileBanner from "../../components/Profile/ProfileBanner";
import QuizFeed from "../../components/Feed/QuizFeed";
import Cookies from "js-cookie"
import QuizScores from "../../components/Profile/QuizScores";

class ProfilePage extends Component {

    state = {
        savedVisits: [],
        // id: Cookies.get("id")
    };

    // componentDidMount() {
    //     let id = this.state.id;
    //     API.getMyVisits(id)
    //     .then(res => {
    //         if (res.data.data === "error") {
    //             throw new Error(res.data.data);
    //         }
    //         else {
    //             this.setState({ savedVisits: res.data})
    //             console.log(this.state.savedVisits)
    //             }
    //         })
    //         .catch(err => console.log(err))
    // }

render() {
        return (
            <div>
                <ProfileBanner />
                {/* <Feed visits = {this.state.savedVisits}/> */}
                <QuizScores />
            </div>
        )
    }
}

export default ProfilePage;