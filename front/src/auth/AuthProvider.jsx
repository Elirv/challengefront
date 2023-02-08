import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { getMemes, getUsers, checkUserByEmail } from "../assets/api/apis";
import { AuthReducer } from "./AuthReducer";
import { types } from "./types";

export const AuthProvider = ({ children }) => {

  const init = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    return {
      isLogged: !!user,
      user,
    };
  };

  const [authState, dispatch] = useReducer(AuthReducer, {}, init);
  const { user } = authState;
  // console.log(user);

  const login = (userLogin) => {
    const userData = {
      firstName: userLogin.given_name || "default_name",
      lastName: userLogin.family_name || "default_lastname",
      userName: userLogin.nickName || "DEFAULT NICKname",
      email: userLogin.email,
      picture: userLogin.picture,
    };
    console.log(userData, "standard object copy");

    if (userData) {
      console.log("calling login function", userData);

      const callAsync = async () => {
        const userDB = await checkUserByEmail(userData);
        console.log(userDB, "async function frontpage");

        localStorage.setItem("user", JSON.stringify(userDB));
        dispatch({
          type: types.login,
          payload: userDB,
        });
      };
      callAsync();
    }
  };

  const logoutReducer = () => {
    localStorage.removeItem("user");

    dispatch({
      type: types.logout,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        login: login,
        logoutReducer: logoutReducer,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
