import "./App.css";

import Birthday from "./assets/birthday.jpg";

import Title from "./components/Title";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${Birthday})` }}>
      <div className="container">
        <Title title="Contagem regressiva para o meu aniversário" />
        <div className="countdown-container">
          <Counter title="Dias" number={2} />
          <Counter title="Horas" number={2} />
          <Counter title="Minutos" number={2} />
          <Counter title="Segundos" number={2} />
        </div>
      </div>
    </div>
  );
}

export default App;
