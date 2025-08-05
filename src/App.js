
import './App.css';

import Rotas from './Routes/routes';
import ChatBot from "./components/Chatbot/Chatbot";

import BotaoAcessibilidade from "../src/components/acessibilidade/BotaoAcessibilidade";

function App() {
  return (
    <>
      <Rotas/>
      <BotaoAcessibilidade />
       <ChatBot />
    </>
  );
}

export default App;
