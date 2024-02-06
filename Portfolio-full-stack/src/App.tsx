import Contatos from "./components/Contatos/Contatos";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Projetos from "./components/Projetos/Projetos";
import Tecnologias from "./components/Tecnologias/Tecnologias";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Projetos />
      <Tecnologias />
      <Contatos />
      <Footer />
    </>
  );
}

export default App;
