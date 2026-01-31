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
  image: "warrior-princess",
  rules: [
    trigger("When this card is played, you may sacrifice another creature: Destroy target creature."),
    flavor("A dirty job, but someone's gotta do it"),
  ],
  constructionCost: 2,
  power: 1,
  toughness: 1,
}

function App() {
  console.log("bing");
  return (
    <div className="wrapper">
      <Card
        color="black"
        cost={3}
        constructionCost={2}
        name="Backstreet Brawler"
        rules={[
          trigger("When this card is played, you may sacrifice another creature: Destroy target creature."),
          flavor("A dirty job, but someone's gotta do it"),
        ]}
      />
      <Card
        color="red"
        cost={3}
        constructionCost={2}
        name="Bingus"
        rules={[
          trigger(`When this character fights, gain 2 ${energy}.`),
          flavor("Bingus usually lives in peace, a gentle creature. Until scorned."),
        ]}
      />
      <Card
        color="yellow"
        cost={3}
        constructionCost={2}
        name="Bingus"
        rules={[
          {
            type: "labeled",
            label: "Exhaust",
            color: "green",
            text: `Return a card you control to your hand, gain 2 ${energy}.`,
          },
          flavor("Mammon rules."),
        ]}
      />
      <Card
        color="green"
        cost={3}
        constructionCost={2}
        name="Bingus"
        rules={[
          trigger(`When a card enters play next to this card, gain 2 ${energy}.`),
          flavor("Farmin' might be simple, but it'll break ya back."),
        ]}
      />
    </div>
  );
}

export default App;
