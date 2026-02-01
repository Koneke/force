import { CreatureCard } from "../card";
import { BodyText, Flavor } from "../typography";
import { Trigger } from "../label";
import { SYMBOL_ENERGY } from "../symbols";

export const earthBreaker: CreatureCard = {
  type: "creature",
  name: "Earthbreaker",
  color: "green",
  cost: 3,
  image: "farmer",
  nodes: [
    <>
      <Trigger />
      <BodyText>
        When a card enters play next to this card, gain 2 {SYMBOL_ENERGY}.
      </BodyText>
    </>,
    <Flavor>
      Farmin' might be simple, but it'll break ya back.
    </Flavor>
  ],
  constructionCost: 3,
  power: 2,
  toughness: 3,
}

export const green = [
  earthBreaker,
]