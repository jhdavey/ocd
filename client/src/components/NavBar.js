import React, { useState } from "react";
import FaqModalRender from "./FaqsModal";

export default function NavBar() {
  const [modalShow, setModalShow] = useState(false);

  const handleClick = () => {
    alert("We are not currently accepting new detailers.");
  };

  return (
    <>
      <FaqModalRender modalShow={modalShow} setModalShow={setModalShow} />

      <div className="p-3 md:flex md:items-center md:justify-between">
        <a href="/" className="text-blue-800 no-underline font-bold text-2xl md:text-[36px]">
          Orlando Car Detailing
        </a>
        <div>
          <button
            className="bg-white border border-black rounded-2xl px-4 m-1 font-bold"
            onClick={handleClick}
          >
            Join our Pro Network
          </button>
          <a
            className="bg-white text-black no-underline border border-black rounded-2xl px-4 m-1 font-bold cursor-pointer"
            onClick={() => setModalShow(true)}
          >
            FAQs
          </a>
        </div>
      </div>
    </>
  );
}
