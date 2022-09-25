import { useState } from "react";
import "../styles/header.css";
import { Dropdown } from "./Dropdown";
export const Header = () => {
  return (
    <header className="">
      <img
        className=""
        src="https://www.pngitem.com/pimgs/m/138-1385757_logo-random-png-download-logo-random-png-transparent.png"
        alt=""
      />
      {/* <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">

      <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
    </svg> */}

      <Dropdown isHeader={true} />
    </header>
  );
};
