import { CreatureCard } from "../card";
import { BodyText, Flavor } from "../typography";
import { Trigger } from "../label";
import { SYMBOL_ENERGY } from "../symbols";

export const scornedBingus: CreatureCard = {
  type: "creature",
  name: "Scorned Bingus",
  color: "red",
  cost: 2,
  image: "warrior-princess",
  nodes: [
    <>
      <Trigger />
      <BodyText>
        When this character fights, gain 2 {SYMBOL_ENERGY}.
      </BodyText>
    </>,
    <Flavor>
      Bingus usually lives in peace, a gentle creature. Until scorned.
    </Flavor>
  ],
  constructionCost: 2,
  power: 3,
  toughness: 2,
}

export const red = [
  scornedBingus,
]