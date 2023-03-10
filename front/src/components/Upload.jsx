import React, { useState } from 'react'
import axios from 'axios'

export const Upload = () => {

    const [file, setFile] = useState();
    const [category, setCategory] = useState("");

    const handleFileChange = (e) => {
        const { files } = e.target
        if (files) {
            setFile(files[0])
        } else {
            setFile(undefined)
        }
    }

    const handleOnClick = () => {
        
        const formData = new FormData();
        formData.append('title', "titi");
        formData.append('category', category);
        formData.append('content', file);
        console.log(category)

        axios({
            method: "post",
            url: "http://localhost:5000/memes/create",
            data: formData,
            headers: {
                'Accept': 'application/json',
                "Content-Type": "multipart/form-data",
            },
        }).then(() => alert("Uploaded!"))
            .catch(() => alert("Something went wrong :("))
    }

    const handleCategory = (e) => {
        setCategory(e.target.value)
    }

    return (
        <>
            <div>
                <input type="file" onChange={handleFileChange} />
                <input type="text" onChange={handleCategory} />
                <button onClick={handleOnClick}>Upload</button>
            </div>
        </>
    )
}
