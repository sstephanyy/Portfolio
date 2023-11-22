import React from "react";
import avatar1 from "../assets/avatar-1.png";
import avatar2 from "../assets/avatar-2.png";
import avatar3 from "../assets/avatar-3.png";

const Depoimentos = () => {
  const techs = [
    {
      id: 1,
      src: avatar1,
      title: "Jõao Almeida",
      description:
      "Fiz um freela com a Sdweb (automação do nosso email marketing), super simpáticos, valor muito bom, prometeram que entregaria no dia e ficamos até tarde corrigindo detalhes (mesmo eu dizendo que estava tudo bem outro dia, mas eles se empenharam pra entregar logo), bem pacientes e atenciosos quanto às demandas.",
      style: "shadow-orange-400",

    },
    {
      id: 2,
      src: avatar2,
      title: "Luana Souza",
      description:
      "Realizei um projeto de automatização de planilhas do Excel com a Sdweb, e a experiência foi excepcional. Antes, lidar com dados era uma tarefa cansativa e propensa a erros. Agora, graças à automação inteligente da SDWeb, conseguimos processar dados com eficiência e precisão. A automação de tarefas rotineiras liberou tempo valioso, permitindo-nos focar em análises mais estratégicas.",
      style: "shadow-purple-400",
      
    },
    {
      id: 3,
      src: avatar3,
      title: "Catarine dos Santos",
      description:
      "A equipe da SDWeb superou todas as nossas expectativas ao criar um bot de WhatsApp personalizado para nossa empresa. A automação das interações com os clientes simplificou significativamente nossos processos de atendimento, proporcionando respostas rápidas e precisas. Isso não só economizou nosso tempo, mas também melhorou a experiência do cliente.",
      style: "shadow-green-500",
    }
    // {
    //   id: 4,
    //   src: reactImage,
    //   title: "React",
    //   style: "shadow-blue-600",
    // },
    // {
    //   id: 5,
    //   src: tailwind,
    //   title: "Tailwind",
    //   style: "shadow-sky-400",
    // },
    // {
    //   id: 6,
    //   src: mongodb,
    //   title: "MonoDB",
    //   style: "shadow-green-400",
    // },
    // {
    //   id: 7,
    //   src: python,
    //   title: "Python",
    //   style: "shadow-purple-400",
    // },
    // {
    //   id: 8,
    //   src: github,
    //   title: "GitHub",
    //   style: "shadow-gray-400",
    // },
  ];

  return (
    <div
      name="depoimentos"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-100 md:h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Depoimentos
          </p>
          <p className="py-6">O que os nossos clientes têm a dizer sobre nós</p>
        </div>

        <div className="w-full grid grid-cols-1 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style, description }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} flex flex-col `}
            >
              <div className={"flex items-center"}>
                <img src={src} alt="" className="w-20" />
                <p className="">{title}</p>
              </div>

              <p className="text-justify text-sm px-5">{description}</p>

            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default Depoimentos;
