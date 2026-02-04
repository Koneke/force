import { Card } from "./card";
import { black } from "./cards/black";
import { red } from "./cards/red";
import { green } from "./cards/green";
import { yellow } from "./cards/yellow";
import "./App.css";


function App() {
  return (
    <div className="wrapper">
      {black.map(card => <Card card={card} />)}
      {red.map(card => <Card card={card} />)}
      {yellow.map(card => <Card card={card} />)}
      {green.map(card => <Card card={card} />)}
    </div>
  );
}

export default App;
