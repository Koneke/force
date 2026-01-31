import { Card, type Rule } from "./card";
import "./App.css";

const energy = "🜍"

function trigger(text: string): Rule {
  return ({
    type: "labeled",
    label: "Trigger",
    color: "red",
    text,
  })
}

function exhaust(text: string): Rule {
  return ({
    type: "labeled",
    label: "Exhaust",
    color: "green",
    text,
  })
}

function flavor(text: string): Rule {
  return ({
    type: "flavor",
    text,
  })
}

const backstreetBrawler: Card = {
  name: "Backstreet Brawler",
  color: "black",
  cost: 3,
  image: "backstreet-brawler",
  rules: [
    trigger("When this card is played, you may sacrifice another creature: Destroy target creature."),
    flavor("A dirty job, but someone's gotta do it"),
  ],
  constructionCost: 2,
  power: 1,
  toughness: 1,
}

const scornedBingus: Card = {
  name: "Scorned Bingus",
  color: "red",
  cost: 2,
  image: "warrior-princess",
  rules: [
    trigger(`When this character fights, gain 2 ${energy}.`),
    flavor("Bingus usually lives in peace, a gentle creature. Until scorned."),
  ],
  constructionCost: 2,
  power: 3,
  toughness: 2,
}

const savvyTrader: Card = {
  name: "Savvy Trader",
  color: "yellow",
  cost: 2,
  image: "savvy-trader",
  rules: [
    exhaust(`Return a card you control to your hand, gain 2 ${energy}.`),
    flavor("Mammon rules."),
  ],
  constructionCost: 3,
  power: 1,
  toughness: 2,
}

const earthBreaker: Card = {
  name: "Earthbreaker",
  color: "green",
  cost: 3,
  image: "farmer",
  rules: [
    trigger(`When a card enters play next to this card, gain 2 ${energy}.`),
    flavor("Farmin' might be simple, but it'll break ya back."),
  ],
  constructionCost: 3,
  power: 2,
  toughness: 3,
}

function App() {
  console.log("bing");
  return (
    <div className="wrapper">
      <Card card={backstreetBrawler} />
      <Card card={scornedBingus} />
      <Card card={savvyTrader} />
      <Card card={earthBreaker} />
    </div>
  );
}

export default App;
