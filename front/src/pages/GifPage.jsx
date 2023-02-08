import React, { useEffect, useState } from 'react'
import { NavbarContainer } from '../components/InNavbar';
import { toast } from "react-hot-toast";
import { getMemes } from "../assets/api/apis";

export const GifPage = () => {

  const [memeData, setMemeData] = useState([]);

  useEffect(() => {
    getAllMemes();
  }, []);

  const getAllMemes = async () => {
    try {
      const response = await axios.get("http://localhost:5000/memes");
      setMemeData(response.data.data);
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <>
      <NavbarContainer />
          <div>
            {memeData?.map((meme) => {
              return (
                <div key={meme.id}>
                  <img src={meme.meme} alt={ups} />
                </div>
              );
            })}
          </div>
    </>
  )
}