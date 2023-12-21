import React, { useEffect } from "react";

const Head = () => {
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
      }, [])

  return (
    <div className="w-full flex flex-col">
      <div style={{ filter: "brightness(80%)" }} className="terms"></div>
      <div className="lg:w-[90%] flex justify-center items-center mx-auto absolute flex-col top-[30%] ml-[15%] md:ml-[5%] px-4 ">
      <h1 className="flex text-center md:text-[40px] text-[#EC6B2E] font-[700] items-center justify-center">TERMS OF USE</h1>
      <h1 className="flex text-center md:text-[52px] uppercase text-white font-[700]  justify-center">Our TERMS AND CONDITIONS</h1>
        </div>
 
  

    </div>
  );
};

export default Head;
