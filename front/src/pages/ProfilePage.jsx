import React, { useContext } from "react";
import {OutNavbarContainer} from '../components/OutNavbar'
// import { Link } from "react-router-dom";
// import { AuthContext } from "../auth/authContext/AuthContext";

export const ProfilePage = () => {
  const { login, authState } = useContext(AuthContext);
  const { isLogged, user } = authState;

  return (
    <>
    <OutNavbarContainer/>
      <main className="main">
        <div>
        <p>profile</p>
          <div>
            {/* <div className="image">
              <img
                src={
                  user.picture
                    ? user.picture
                    : "https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true"
                }
              />
              <button className="bt-ed">
                <Link to="/editProfile">
                  <p>Edit Profile</p>
                </Link>
              </button>
            </div> */}
          </div>
          <div>
            <div>
              <label className="line">Username:</label>
              <input> {user?.userName}</input>
            </div>
            <div>
              <label className="line">Name:</label>
              <input> {user?.firstName}</input>
            </div>
            <div>
              <label className="line">First Name:</label>
              <input> {user?.lastName}</input>
            </div>
            <div>
              <label className="line">Email:</label>
              <input> {user?.email}</input>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
