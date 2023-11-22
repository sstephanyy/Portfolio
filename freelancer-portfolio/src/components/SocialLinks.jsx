import React from "react";
import { FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Email <HiOutlineMail size={30} />
        </>
      ),
      href: "sdwebagencia@gmail.com",
    },
    {
      id: 2,
      child: (
        <>
          Celular <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "+55 (71) 98656-7954"
    },
    {
      id: 3,
      child: (
        <>
          Instagram <FaInstagram size={30} />
        </>
      ),
      href: "skksokosk"
    }


  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
