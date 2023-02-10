import React, { useEffect, useState } from 'react'
import axios from "axios";
import { NavbarContainer } from '../components/InNavbar';

export const ClipsPage = () => {

  const [animalsData, setAnimalsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await axios(
        "https://api.giphy.com/v1/gifs/categories/sports",
        {
          params: {
            api_key: "0z1KsHPYH5H3QRR917Fnp65Ys2afUUmG",
            limit: 4
          },
        }
      );
      console.log(results);
      setAnimalsData(results.data.data);
    };

    fetchData();
  }, []);

  const renderAnimalsGifs = () => {
    return animalsData.map((el) => {
      return (
        <div key={el.gif.id}>
          <img src={el.gif.images.fixed_height.url} />
        </div>
      );
    });
  };

  return (
    <>
      <NavbarContainer />
      
      <div style={{ display: "flex" }}>{renderAnimalsGifs()}</div>;
    </>
  );
};
