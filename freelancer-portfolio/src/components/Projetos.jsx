import React from "react";
import whatsapp from "../assets/portfolio/whatsapp-bot.png";
import freechat from "../assets/portfolio/freechat.png";
import excel from "../assets/portfolio/excel-bot.jpg"
import telegram from "../assets/portfolio/telegram-bot.jpg";
import job from "../assets/portfolio/job-webscraping.png";
import socialmedia from "../assets/portfolio/socialmedia.png";
import Contato from "./Contato";
import { Link as ScrollLink } from "react-scroll"; // avoid naming conflicts with other Link components.



const Projetos = () => {
  const projetos = [
    {
      id: 1,
      src: whatsapp,
      demo_link: "contato", // Update with your actual route
      description : "Bot de whatsapp no qual você manda mensagens em massa (sem ser bloqueado pelo whatsapp) para os seus contatos.",
    },
    // {
    //   id: 2,
    //   src: freechat,
    //   demo_link : "https://freeechat.vercel.app/",
    //   code_link : "",
    // },
    {
      id: 3,
      src: excel,
      demo_link : "contato",
      description : "Esse projeto acessa um site da sua escolha, pega as informações de acordo com o que foi pedido e envia elas para uma planilha Excel. Isso acaba com o seu trabalho manual maçante.",
    },
    {
      id: 4,
      src: socialmedia,
      demo_link : "contato",
      description : "Ferramenta que te permite agendar e automatizar postagens em diversas plataformas de mídia social, economizando um tempo enorme.",
    },
    // {
    //   id: 5,
    //   src: telegram,
    //   demo_link : "https://codecraftjisu.tech/",
    //   code_link : "Esse bot extrai a informação do usuário dos membros de um grupo do telegram, adiciona em um arquivo .txt e envia mensagem em massa para todos membros de determinado grupo ou lista de usuários",
    // },
    // {
    //   id: 6,
    //   src: job,
    //   demo_link : "https://codegru.vercel.app/",
    //   code_link : "",
    // },
  ];

  return (
    <div
      name="projetos"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4  mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projetos
          </p>
          <p className="py-6">Dê uma olhada em alguns dos serviços que disponibilizamos!</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projetos.map(({ id, src, demo_link, description }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg ">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex flex-col">
                  <ScrollLink to={demo_link} smooth duration={500}>
                    <button className=" px-6 py-2 m-4 duration-200 hover:scale-105 " >
                      Pedir projeto
                    </button>
                </ScrollLink>
                <a>
                  <button className="px-6 py-2 m-4 duration-200 hover:scale-105 text-justify">
                      {description}
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projetos;
