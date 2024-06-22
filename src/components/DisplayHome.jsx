import React from "react";
import Navbar from "./Navbar";
import { albumsData } from "../assets/assets";
import Albumitem from "./Albumitem";
import { songsData } from "../assets/assets";
import Songitem from "./Songitem";
const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="mmy-5 font-bold text-2xl">Featued Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <Albumitem
              key={index}
              image={item.image}
              name={item.name}
              desc={item.desc}
              id={item.id}
            />
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h1 className="mmy-5 font-bold text-2xl">Today's biggest hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((item, index) => (
            <Songitem
              key={index}
              image={item.image}
              name={item.name}
              desc={item.desc}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
