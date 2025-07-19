import React from "react";
("use client");
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Product Table`;
const Nav = () => {
  return (
    <div>
      <div className="">
        {/* <h1 className="text-4xl font-bold text-center mb-4 "> */}
          <TextGenerateEffect className='text-center ' duration={2} filter={false} words={words} />
        {/* </h1> */}
      </div>
    </div>
  );
};

export default Nav;
