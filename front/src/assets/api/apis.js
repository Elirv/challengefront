import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "react-hot-toast";

export const getMemes = async (id) => {
  try {
    const url = `http://localhost:5000/memes/${id}`;

    const resp = await fetch(url);
    const apiData = await resp.json();
    return apiData;
  } catch (error) {
    console.log("Algo fallo en la api");
  }
};

export const postUsers = async (userData) => {
  try {
    const rawResponse = await fetch("http://localhost:5000/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const content = await rawResponse.json();

    return content.data;
  } catch (error) {
    toast.error(error.message);
  }
};

export const getUsers = async () => {
  const { getAccessTokenSilently } = useAuth0();

  const url = "http://localhost:5000/user";

  try {
    const token = await getAccessTokenSilently();
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const users = await response.json();

    return users;
  } catch (error) {
    toast.error("Api error fetching users");
  }
};

export const checkUserByEmail = async (userData) => {
  const url = "http://localhost:5000/user/create";

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await res.json();
    return data.data;
  } catch (error) {
    toast.error("Something went wrong");
  }
};