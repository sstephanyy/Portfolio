import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { FaRobot } from "react-icons/fa";

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); 

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize); //When the window is resized, the handleResize function is called, updating the isMobile state based on the new window width.

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-6xl font-bold text-white">
            Precisando de um sistema ou automação / bot ?
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          Você está pronto para levar o seu negócio a um novo patamar de eficiência e produtividade?  </p>
          <div>
            <Link
              to="contato"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Solitar Orçamento
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        {/* Conditionally render the rocket icon based on the screen size */}
        {isMobile ? null : (
          <div style={{ paddingBottom: "110px" }}>
            <FaRobot size={150} color="cyan" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
