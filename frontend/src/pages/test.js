import React, { useState } from "react";
import NavbarComponent from "./admin/NavbarAdmin";
import axios from "axios";
import { Button } from "@nextui-org/react";
import { data } from "autoprefixer";
import Input from "postcss/lib/input";
import { env } from "../../env-local";

function Home() {
//   const endPointImage = `https://api.imgbb.com/1/upload?key=${env.API_KEY}`;

  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const uploadToServer = async (event) => {
    const data = new FormData();
    data.append("file", image);

    console.log(data);
    await fetch(endPoint, {
      method: "POST",
      body: data,
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const endPointImage = `https://api.imgbb.com/1/upload?key=${env.API_KEY}`;
  const submitHandler = async (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const image = form.get("image");

    const data = new FormData();
    data.append("image", image);

    axios
      .post(endPointImage, data)
      .then((response) => {
        console.log(response.data.data.url);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <NavbarComponent></NavbarComponent>
      <div>
        <div>
          <img src={createObjectURL}></img>
          <input type="file" name="myImage" onChange={uploadToClient}></input>
          <button className="btn btn-primary"></button>
          <Button color="default" onClick={() => console.log(env.API_KEY)}>
            Uplodad
          </Button>
        </div>
      </div>
      <div className="mt-24">
        <form onSubmit={submitHandler}>
          <label htmlFor="">Image</label>
          <input type="file" name="image"></input>
          <button className="btn btn-primary" type="submit">
            Send to server
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;
