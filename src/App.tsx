import { CreatureCard } from "./card";
import { black } from "./cards/black";
import { red } from "./cards/red";
import { green } from "./cards/green";
import { yellow } from "./cards/yellow";
import "./App.css";


function App() {
  return (
    <div className="wrapper">
      {black.map(card => <CreatureCard card={card} />)}
      {red.map(card => <CreatureCard card={card} />)}
      {yellow.map(card => <CreatureCard card={card} />)}
      {green.map(card => <CreatureCard card={card} />)}
    </div>
  );
}

export default App;
