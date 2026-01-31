import { BodyText, CreatureCard, Keyword, Label, type Rule } from "./card";
import "./App.css";
import type { ReactNode } from "react";

const energy = "🜍"

function trigger(text: string): Rule {
  return ({
    type: "labeled",
    label: "Trigger",
    color: "red",
    text,
  })
}

function Trigger({ children }: { children: ReactNode }): ReactNode {
  return (<>
    <Label color="red">Trigger</Label>
    {children}
  </>)
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

const backstreetBrawler: CreatureCard = {
  type: "creature",
  name: "Backstreet Brawler",
  color: "black",
  cost: 3,
  image: "backstreet-brawler",
  rules: [
    trigger("When this card is played, you may sacrifice another creature: Destroy target creature."),
    flavor("A dirty job, but someone's gotta do it"),
  ],
  // FIXME: wip stuff
  nodes: [
    // <>
    //   <Label color="#917313">Piss-time</Label>
    //   <BodyText>Target creature gains</BodyText>
    //   <Keyword>Blocker</Keyword>
    //   <BodyText>until end of turn.</BodyText>
    // </>,
    // <>
    //   <Trigger>
    //     <BodyText>
    //       When this card is played, you may sacrifice another creature: Destroy target creature.
    //     </BodyText>
    //   </Trigger>
    // </>
  ],
  constructionCost: 2,
  power: 1,
  toughness: 1,
}

const scornedBingus: CreatureCard = {
  type: "creature",
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

const savvyTrader: CreatureCard = {
  type: "creature",
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

const earthBreaker: CreatureCard = {
  type: "creature",
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
      <CreatureCard card={backstreetBrawler} />
      <CreatureCard card={scornedBingus} />
      <CreatureCard card={savvyTrader} />
      <CreatureCard card={earthBreaker} />
    </div>
  );
}

export default App;
