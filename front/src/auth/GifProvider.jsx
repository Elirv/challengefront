import { useEffect, useState } from "react";
import { GifContext } from "./GifContext";
import { getMemes, getUsers, checkUserByEmail } from "../assets/api/apis";

export const GifProvider = ({ children }) => {

  const [query, setQuery] = useState("");
  const [meme, setMeme] = useState([]);

  // useEffect(() => {

  //   const memes = async () => {
  //     const response = await searchMemes(query)
  //     setList(response)
  //     console.log("providerresponse", response)
  //     console.log("query", query)
  //   }

  //   if (query.length > 3) memes();
  // }, [query]);

  return (

    <GifContext.Provider
      value={{ query, setQuery, meme, setMeme }}
    >
      {children}
    </GifContext.Provider>
  );
}