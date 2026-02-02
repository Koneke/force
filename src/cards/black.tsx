import { CreatureCard } from "../card";
import { BodyText, Flavor, Keyword } from "../typography";
import { Death, Enter, Exhaust, Trigger } from "../label";
import { SYMBOL_ENERGY } from "../symbols";

export const southstreetVandal: CreatureCard = {
  type: "creature",
  name: "Southstreet Vandal",
  color: "black",
  cost: 2,
  image: "backstreet-brawler",
  nodes: [
    <>
      <Enter />
      <BodyText>
        Mill 2 cards.
      </BodyText>
    </>,
    <Flavor>
      Everyone knew. When there was ruckus about,
      surely the Southstreet boys were there.
    </Flavor>,
  ],
  constructionCost: 1,
  power: 3,
  toughness: 1,
  tags: ["starter"],
}

export const recklessScavenger: CreatureCard = {
  type: "creature",
  name: "Reckless Scavenger",
  color: "black",
  cost: 1,
  image: "reckless-scavenger",
  nodes: [
    <>
      <Trigger />
      <BodyText>
        When this creature attacks, mill 1.
      </BodyText>
    </>,
    <Flavor>
      People throw good stuff out way too carelessly.
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
  image: "southstreet-vandal",
  nodes: [
    <>
      <Exhaust />
      <BodyText>Sacrifice another creature, gain 2{SYMBOL_ENERGY}.</BodyText>
    </>,
    <Flavor>
      A dirty job, but someone's gotta do it
    </Flavor>,
  ],
  constructionCost: 2,
  power: 2,
  toughness: 3,
  tags: ["generator"],
}

export const blackmarketDealer: CreatureCard = {
  type: "creature",
  name: "Blackmarket Dealer",
  color: "black",
  cost: 4,
  image: "blackmarket-dealer",
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
  toughness: 3,
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
  power: 3,
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
        then summon a creature with cost 4 or less from your graveyard
        to this creature's cell.
      </BodyText>
    </>,
    <Flavor>
      It sure runs in the family.
    </Flavor>,
  ],
  constructionCost: 2,
  power: 1,
  toughness: 1,
  tags: ["extender"],
}

export const enforcer: CreatureCard = {
  type: "creature",
  name: "Enforcer",
  color: "black",
  cost: 2,
  image: "enforcer",
  nodes: [
    <>
      <Exhaust />
      <BodyText>
        Pay 2{SYMBOL_ENERGY}: deal 2 damage to target creature.
      </BodyText>,
    </>,
    <Flavor>
      On the street. Round the corner. Under ya bed.
    </Flavor>,
  ],
  constructionCost: 3,
  power: 1,
  toughness: 3,
  tags: ["interaction"],
}

export const securityDetail: CreatureCard = {
  type: "creature",
  name: "Security Detail",
  color: "black",
  cost: 3,
  image: "security-detail",
  nodes: [
    <Keyword>Blocker</Keyword>,
    <>
      <Trigger />
      <BodyText>
        When this creature fights, mill 1.
      </BodyText>
    </>,
  ],
  constructionCost: 3,
  power: 1,
  toughness: 4,
  tags: ["protection"],
}

export const blackmailer: CreatureCard = {
  type: "creature",
  name: "Extortionist",
  color: "black",
  cost: 4,
  image: "blackmailer",
  nodes: [
    <>
      <Enter />
      <BodyText>
        Opponent sacrifices a creature
      </BodyText>
    </>,
    <Flavor>
      You don't HAVE to pay up. But you probably want to.
    </Flavor>,
  ],
  constructionCost: 5,
  power: 4,
  toughness: 3,
  tags: ["payoff"],
}

export const infiltrator: CreatureCard = {
  type: "creature",
  name: "Infiltrator",
  color: "black",
  cost: 3,
  image: "infiltrator",
  nodes: [
    <Keyword>Evasive</Keyword>,
    <Flavor>
      Always watching. Always.
    </Flavor>,
  ],
  constructionCost: 3,
  power: 2,
  toughness: 1,
  tags: ["consistency?"],
}

export const treasureDiver: CreatureCard = {
  type: "creature",
  name: "Treasure Diver",
  color: "black",
  cost: 2,
  image: "treasure-diver",
  nodes: [
    <>
      <Enter />
      <BodyText>
        Return a creature card from your graveyard to your hand.
      </BodyText>
    </>,
    <Flavor>
      One man's trash.
    </Flavor>
  ],
  constructionCost: 3,
  power: 1,
  toughness: 3,
  tags: ["extender"],
}

export const black = [
  southstreetVandal,
  recklessScavenger,
  triggerman,
  blackmarketDealer,
  lastborn,
  enforcer,
  securityDetail,
  underworldAgitator,
  blackmailer,
  infiltrator,
  treasureDiver,
]
