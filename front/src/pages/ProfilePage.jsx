import React, { useContext } from "react";
import {OutNavbarContainer} from '../components/OutNavbarContainer'
// import { Link } from "react-router-dom";
// import { AuthContext } from "../auth/authContext/AuthContext";

export const ProfilePage = () => {
  const { login, authState } = useContext(AuthContext);
  const { isLogged, user } = authState;

  return (
    <>
    <p>holaaaaaaa</p>
    <OutNavbarContainer/>
    <main className="main">
            <div className="image">
              {/* <img
                src={
                  user.picture
                    ? user.picture
                    : "https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true"
                }
              /> */}
              {/* <button className="bt-ed">
                <Link to="/editProfile">
                  <Texto>Edit Profile</Texto>
                </Link>
              </button> */}
            </div>

          <form>
            <div>
              <label className="line">Username:</label>
              <TextArea> {user?.userName}</TextArea>
            </div>
            <div>
              <label className="line">Name:</label>
              <TextArea> {user?.firstName}</TextArea>
            </div>
            <div>
              <label className="line">First Name:</label>
              <TextArea> {user?.lastName}</TextArea>
            </div>
            <div>
              <label className="line">Email:</label>
              <TextArea> {user?.email}</TextArea>
            </div>
          </form>
      </main>
    </>
  );
};
