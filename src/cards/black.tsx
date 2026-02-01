import { CreatureCard } from "../card";
import { BodyText, Flavor } from "../typography";
import { Enter, Trigger } from "../label";

export const backstreetBrawler: CreatureCard = {
  type: "creature",
  name: "Backstreet Brawler",
  color: "black",
  cost: 3,
  image: "backstreet-brawler",
  nodes: [
    <>
      <Trigger />
      <BodyText>When this card is played, you may sacrifice another creature: Destroy target creature.</BodyText>
    </>,
    <Flavor>
      A dirty job, but someone's gotta do it
    </Flavor>,
  ],
  constructionCost: 2,
  power: 1,
  toughness: 1,
}

export const southstreetVandal: CreatureCard = {
  type: "creature",
  name: "South-street Vandal",
  color: "black",
  cost: 2,
  image: "southstreet-vandal",
  nodes: [
    <>
      <Enter />
      <BodyText>
        Mill 3 cards.
      </BodyText>
    </>
  ],
  constructionCost: 1,
  power: 2,
  toughness: 1,
}

// Big payoff; banish tons from grave to pay for reanim? Or to generate big energy?
export const underworldAgitator: CreatureCard = {
  type: "creature",
  name: "Underworld Agitator",
  color: "black",
  cost: 7,
  image: "backstreet-brawler",
  nodes: [
    <>

    </>
  ],
  constructionCost: 5,
  power: 5,
  toughness: 3,
}

export const black = [
  backstreetBrawler,
  southstreetVandal,
  underworldAgitator,
]