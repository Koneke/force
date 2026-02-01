import { CreatureCard } from "../card";
import { BodyText, Flavor } from "../typography";
import { Death, Enter, Exhaust, Trigger } from "../label";
import { SYMBOL_ENERGY } from "../symbols";

export const southstreetVandal: CreatureCard = {
  type: "creature",
  name: "Southstreet Vandal",
  color: "black",
  cost: 2,
  image: "southstreet-vandal",
  nodes: [
    <>
      <Enter />
      <BodyText>
        Mill 3 cards.
      </BodyText>
    </>,
    <Flavor>
      Everyone knew. When there was ruckus about,
      surely the Southstreet boys were there.
    </Flavor>,
  ],
  constructionCost: 1,
  power: 2,
  toughness: 1,
  tags: ["starter"],
}

export const triggerman: CreatureCard = {
  type: "creature",
  name: "Triggerman",
  color: "black",
  cost: 3,
  image: "backstreet-brawler",
  nodes: [
    <>
      <Exhaust />
      <BodyText>Sacrifice another creature, gain 2 {SYMBOL_ENERGY}.</BodyText>
    </>,
    <Flavor>
      A dirty job, but someone's gotta do it
    </Flavor>,
  ],
  constructionCost: 2,
  power: 1,
  toughness: 3,
  tags: ["generator"],
}

export const blackmarketDealer: CreatureCard = {
  type: "creature",
  name: "Blackmarket Dealer",
  color: "black",
  cost: 4,
  image: "backstreet-brawler",
  nodes: [
    <>
      <Trigger />
      <BodyText>
        When a card enters your graveyard, you may exhaust this card, draw a card.
      </BodyText>
    </>,
    <Flavor>
      Shady deals? Yes. Good deals? Also yes.
    </Flavor>,
  ],
  constructionCost: 3,
  power: 2,
  toughness: 2,
  tags: ["extender"],
}

export const underworldAgitator: CreatureCard = {
  type: "creature",
  name: "Underworld Agitator",
  color: "black",
  cost: 6,
  image: "underworld-agitator",
  nodes: [
    <>
      <Enter />
      <BodyText>
        Banish any number of cards in your graveyard,
        then, summon any number of creatures from your graveyard with a total cost
        less than or equal the number of cards banished.
      </BodyText>
    </>,
    <Flavor>
      It was just a matter of time.
    </Flavor>,
  ],
  constructionCost: 5,
  power: 5,
  toughness: 3,
  tags: ["payoff"],
}

export const lastborn: CreatureCard = {
  type: "creature",
  name: "Lastborn",
  color: "black",
  cost: 2,
  image: "lastborn",
  nodes: [
    <>
      <Death />
      <BodyText>
        You may pay 2{SYMBOL_ENERGY},
        then summon a creature with cost 3 or less from your graveyard
        to this creature's cell.
      </BodyText>
    </>,
    <Flavor>
      It sure runs in the family.
    </Flavor>,
  ],
  constructionCost: 3,
  power: 2,
  toughness: 1,
  tags: ["extender"],
}

export const enforcer: CreatureCard = {
  type: "creature",
  name: "Enforcer",
  color: "black",
  cost: 3,
  image: "enforcer",
  nodes: [
    <>
      <Enter />
      <BodyText>
        Destroy target creature.
      </BodyText>
    </>,
    <>
      <Exhaust />
      <BodyText>
        Pay 3{SYMBOL_ENERGY}: destroy target creature.
      </BodyText>
    </>,
  ],
  constructionCost: 3,
  power: 3,
  toughness: 3,
  tags: ["interaction"],
}

export const black = [
  triggerman,
  southstreetVandal,
  blackmarketDealer,
  underworldAgitator,
  lastborn,
  enforcer,
]