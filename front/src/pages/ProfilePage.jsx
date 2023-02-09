import React, { useContext } from "react";
import { OutNavbarContainer } from '../components/OutNavbarContainer'
// import { Link } from "react-router-dom";
import { GifContext } from "../auth/GifContext";

export const ProfilePage = () => {
  const { login, authState } = useContext(GifContext);
  // const { isLogged, user } = authState;
// console.log(user);
  return (
    <>
      <OutNavbarContainer />
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
            <input input type="text"/>
          </div>
          <div>
            <label className="line">Name:</label>
            <input input type="text"/>
          </div>
          <div>
            <label className="line">First Name:</label>
            <input input type="text"/>
          </div>
          <div>
            <label className="line">Email:</label>
            <input input type="email"/> {/* {user?.email} */}
          </div>
        </form>
      </main>
    </>
  );
};
