import React, { useRef } from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaWhatsapp  } from "react-icons/fa";

const Contato = () => {

  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      setShowPopup(true);


      emailjs.sendForm('service_1pnoxfo', 'template_uy2huwe', form.current, 'Zu8FZetoe1Btflp-D')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        })

        setEmail('');
        e.target.reset();

        // Hide the popup after a few seconds (adjust the timeout as needed)
        setTimeout(() => {
          setShowPopup(false);
        }, 2000);

    }  
    
  

  return (
    <div
      name="contato"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contato
          </p>
          <p className="py-6">Envie o formulário abaixo para entrar em contato comigo</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            ref={form}
            onSubmit={sendEmail}
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              required
              type="text"
              name="to_name"
              placeholder="Escreva seu nome"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              required
              type="text"
              name="from_name"
              placeholder="Escreva seu email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />       
              <input
                required
                type="text"
                name="from_number"
                placeholder="Digite seu telefone"
                className="mb-4 mt-0 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />   
            <textarea
              required
              name="message"
              placeholder="Escreva sua mensagem"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button type="submit" value="Send" className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Vamos Conversar!
            </button>
          </form>
        </div>

        {/* Popup message */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-md text-center">
              <p className="text-green-500">Mensagem enviada! 👍 </p>
            </div>
          </div>
        )}

         {/* Footer with mail and phone for mobile navigation */}
         <div className="md:hidden text-center mt-1">
          <p className="text-lg">
            <FaEnvelope className="inline mr-2" />
            sdwebagencia@gmail.com
          </p>
          <p className="text-lg">
            <FaWhatsapp className="inline mr-2" />
            +55 (71) 98656-7954
          </p>
        </div>

      </div>
    </div>
  );
};


export default Contato;
