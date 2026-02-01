import { CreatureCard } from "../card";
import { BodyText, Flavor } from "../typography";
import { Exhaust } from "../label";
import { SYMBOL_ENERGY } from "../symbols";

export const savvyTrader: CreatureCard = {
  type: "creature",
  name: "Savvy Trader",
  color: "yellow",
  cost: 2,
  image: "savvy-trader",
  nodes: [
    <>
      <Exhaust />
      <BodyText>
        Return a card you control to your hand, gain 2 {SYMBOL_ENERGY}.
      </BodyText>
    </>,
    <Flavor>
      Mammon rules.
    </Flavor>
  ],
  constructionCost: 3,
  power: 1,
  toughness: 2,
}

export const yellow = [
  savvyTrader,
]