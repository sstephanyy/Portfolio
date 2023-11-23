import React, { useState } from "react";
import { AiFillForward } from "react-icons/ai";


const Perguntas = () => {

  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const techs = [
    {
      id: 1,
      title: "O que é automação de processos e qual a sua importância?",
      description: (
        <p>
           É a utilização de ferramentas e soluções tecnológicas com o intuito de simplificar e agilizar os processos internos, bem como <span style={{color: 'orange'}}>reduzir seus custos.</span> A ideia base da automação de processos é ser utilizada em diversas frentes e garantir que os métodos de trabalho se tornem mais fáceis, <span style={{color: 'orange'}}> reduzindo a necessidade de tarefas manuais</span>.
        </p>
      ),
      style: "shadow-orange-400",
    },
    {
      id: 2,
      title: "Quanto tempo levará para ter meu bot / automação ficar pronto?",
      description: (
        <p>
          Compreendemos a importância do  <span style={{color: '#8b5cf6'}}>tempo para você.</span> Nosso compromisso é entregar uma automação de alta qualidade e de maneira eficiente. O prazo exato pode variar com base na <span style={{color: '#8b5cf6'}}>complexidade do projeto, personalizações desejadas e sua prontidão para fornecer feedback.</span> Mas em média leva entre 3 dias a 1 semana.
        </p>
      ),
      style: "shadow-purple-400",
    },
    {
      id: 3,
      title: "Quais benefícios a automação pode trazer para o meu negócio? ",
      description: (
        <p>
        O primeiro é o <span style={{color: '#6ee7b7'}}>ganho de produtividade</span>, isso acontece porque as tarefas que eram manuais agora são automatizadas e os colaboradores têm mais tempo livre para se dedicar a outras atividades dentro da empresa. Além disso, <span style={{color: '#6ee7b7'}}>reduz os custos do seu negócio</span>, já que quando automatiza tarefas, é possível conquistar maior produtividade, manter um padrão e reduzir tarefas corporativas, como já mostramos. Consequentemente, temos como resultado a redução de gastos. Um exemplo claro é a geração de relatórios. Sem automação é <span style={{color: '#6ee7b7'}}>necessário solicitar a um colaborador que monte o relatório</span>. Este funcionário deverá coletar informações de diferentes lugares e elaborar o documento. Isso demanda tempo e está atrelado a possíveis erros, já que as informações não são totalmente seguras.
        </p>
      ),
      style: "shadow-green-500",
    },
    {
      id: 4,
      title: "Quanto custa para desenvolver um bot ou um processo de automação?",
      description: (
        <p>
          Estamos aceitando qualquer oferta. Portanto, o <span style={{color: '#ef4444'}}>valor que tocar no seu coração. </span> ❤️
        </p>
      ),
      style: "shadow-red-500",
    },
    {
      id: 5,
      title: "Você sabe o que é Web Scraping e para que ele serve?",
      description: (
        <p>
         Web Scraping ou raspagem de rede é uma <span style={{color: 'cyan'}}>técnica de coleta de dados de plataformas online, como sites, redes sociais etc</span>. Por meio do Web Scraping, é <span style={{color: 'cyan'}}>possível identificar o que os consumidores estão pesquisando no mercado, comparar preços de produtos em lojas diferentes, monitorar o tempo de permanência em determinado site e muito mais!</span> 
        </p>
      ),
      style: "shadow-sky-400",
    },
    {
      id: 6,
      title: "Quem vai manter e atualizar o bot após a criação?",
      description: (
        <p>
             Oferecemos opções flexíveis de suporte e manutenção pós-lançamento para garantir que sua automação/bot permaneça <span style={{ color: '#d4d4d4' }}>atualizado, seguro e funcional</span>. 

        </p>
      ),
      style: "shadow-gray-400",
    }
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

  const handleQuestionClick = (id) => {
    console.log("Question clicked:", id);
    setSelectedQuestion(id === selectedQuestion ? null : id);
  };

  return (
    <div
      name="perguntas"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-100 md:h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Perguntas Frequentes
          </p>
          <p className="py-6">Tiramos todas as suas dúvidas</p>
        </div>

        <div className="w-full grid grid-cols-1 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, title, style, description }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} flex flex-col px-4 cursor-pointer `}
              onClick={() => handleQuestionClick(id)}

            >
              <div className={"flex items-center"}>
              <AiFillForward size={window.innerWidth < 600 ? 28 : 21} /> {/* If the window width is less than 600 pixels, it sets the size to 28; otherwise, it sets it to 21. */}
               <p className="ml-3">{title}</p>
              </div>

              {selectedQuestion === id && (
                <p className="text-justify text-sm px-5 mt-2">{description}</p>
              )}

            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default Perguntas;
