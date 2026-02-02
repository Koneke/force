import { CreatureCard } from "../card";
import { BodyText, Flavor, Keyword } from "../typography";
import { End, Enter, Exhaust, Trigger } from "../label";
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
  tags: ["generator"],
}

export const fieldhand: CreatureCard = {
  type: "creature",
  name: "Fieldhand",
  color: "green",
  cost: 2,
  image: "farmer",
  nodes: [
    <>
      <Enter />
      <BodyText>
        {/* Hm, annoying that we need spans here, :first-child doesn't work otherwise, */}
        {/* but let's live with it for now. Second one technically not needed, but consistency */}
        <span>Create a 0/1 Sapling token next to any creature you control</span>
      </BodyText>
    </>,
    <Flavor>
      From the smallest of seeds, the greatest of trees.
    </Flavor>
  ],
  constructionCost: 2,
  power: 1,
  toughness: 3,
  tags: ["starter"],
}

export const greenReaper: CreatureCard = {
  type: "creature",
  name: "Green Reaper",
  color: "green",
  cost: 3,
  image: "farmer",
  nodes: [
    <>
      <Exhaust />
      <BodyText>
        Sacrifice a Sapling token with more than 2 health. Draw 2.
      </BodyText>
    </>,
    <Flavor>
      You reap what you sow.
    </Flavor>
  ],
  constructionCost: 2,
  power: 1,
  toughness: 2,
  tags: ["extender"],
}

export const motherOfAllBloom: CreatureCard = {
  type: "creature",
  name: "Mother of All Bloom",
  color: "green",
  cost: 5,
  image: "farmer",
  nodes: [
    <>
      <Enter />
      <BodyText>
        Replace any number of Sapling tokens you control with a Bloom token
        with <Keyword>Trample</Keyword>, and power and health equal to the health of the replaced Sapling token.
      </BodyText>
    </>,
    <Flavor>
      Sun, water, a gentle hand, and heaps of love.
    </Flavor>
  ],
  constructionCost: 5,
  power: 2,
  toughness: 6,
  tags: ["payoff"],
}

export const composter: CreatureCard = {
  type: "creature",
  name: "Composter",
  color: "green",
  cost: 3,
  image: "farmer",
  nodes: [
    <>
      <Trigger />
      <BodyText>
        When a friendly creature dies, you may exhaust this:
        Create a Sapling token next to a creature you control.
      </BodyText>
    </>,
    <Flavor>
      A life feeds the next, an ageless cycle.
    </Flavor>
  ],
  constructionCost: 2,
  power: 1,
  toughness: 2,
  tags: ["extender"],
}

// NOTE: do we need to mark tokens somehow extra?
export const sapling: CreatureCard = {
  type: "creature",
  name: "Sapling",
  color: "green",
  cost: 0,
  image: "farmer",
  nodes: [
    <>
      <End />
      <BodyText>
        Gain +0/+1.
      </BodyText>
    </>
  ],
  constructionCost: 0,
  power: 0,
  toughness: 1,
  tags: ["token"],
}

export const green = [
  earthBreaker,
  fieldhand,
  greenReaper,
  motherOfAllBloom,
  composter,
  sapling,
]
