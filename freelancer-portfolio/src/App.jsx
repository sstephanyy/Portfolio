import Sobre from "./components/Sobre";
import Contato from "./components/Contato";
import Depoimentos from "./components/Depoimentos";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projetos from "./components/Projetos";
import SocialLinks from "./components/SocialLinks";
import Perguntas from "./components/Perguntas";


function App() {

  return (
    <>
      <div>
      <NavBar />
      <Home />
      <Sobre />
      <Projetos />
      <Depoimentos />
      <Perguntas/>
      <Contato />

      <SocialLinks />
      </div>
    </>
  )
}

export default App
