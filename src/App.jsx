import "./App.css";

import Birthday from "./assets/birthday.jpg";

import Title from "./components/Title";
import Counter from "./components/Counter";
import useCountDown from "./hooks/useCountDown";

function App() {
  const [day, hour, minute, second] = useCountDown("Jun 24, 2023 10:00:00");

  return (
    <div className="App" style={{ backgroundImage: `url(${Birthday})` }}>
      <div className="container">
        <Title title="Contagem regressiva para o meu aniversário" />
        <div className="countdown-container">
          <Counter title="Dias" number={day} />
          <Counter title="Horas" number={hour} />
          <Counter title="Minutos" number={minute} />
          <Counter title="Segundos" number={second} />
        </div>
      </div>
    </div>
  );
}

export default App;
