import React, { useContext, useEffect, useState } from 'react'
import { NavbarContainer } from '../components/InNavbar';
import { toast } from "react-hot-toast";
import { getMemes } from "../assets/api/apis";
import { GifContext } from '../auth/GifContext';

export const GifPage = () => {
  const { meme, setMeme } = useContext(GifContext);

  const [memeData, setMemeData] = useState([]);

  console.log(meme)

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
  };  //0z1KsHPYH5H3QRR917Fnp65Ys2afUUmG

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