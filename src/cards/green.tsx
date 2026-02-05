import { ActionCard, CreatureCard } from "../card";
import { BodyText, Flavor, Keyword } from "../typography";
import { End, Enter, Exhaust, Quick, Trigger } from "../label";
import { SYMBOL_ENERGY } from "../symbols";
import { KeywordShift } from "./templating";

export const earthBreaker: CreatureCard = {
  type: "creature",
  name: "Earthbreaker",
  color: "green",
  cost: 2,
  image: "farmer",
  nodes: [
    <>
      <Trigger />
      <BodyText>
        When a card enters play next to this card, gain 2{SYMBOL_ENERGY}.
      </BodyText>
    </>,
    <Flavor>
      Farmin' might be simple, but it'll break ya back.
    </Flavor>
  ],
  constructionCost: 3,
  power: 1,
  toughness: 3,
  tags: ["generator"],
}

export const fieldhand: CreatureCard = {
  type: "creature",
  name: "Fieldhand",
  color: "green",
  cost: 2,
  image: "fieldhand",
  nodes: [
    <>
      <Trigger />
      <BodyText>
        When a card enters play next to this card, draw a card.
      </BodyText>
    </>,
    <Flavor>
      From the smallest of seeds, the greatest of trees.
    </Flavor>
  ],
  constructionCost: 2,
  power: 1,
  toughness: 2,
  tags: ["starter"],
}

export const greenReaper: CreatureCard = {
  type: "creature",
  name: "Green Reaper",
  color: "green",
  cost: 3,
  image: "green-reaper",
  nodes: [
    <KeywordShift>
      Draw a card.
    </KeywordShift>,
    <BodyText>
      This gets +1/+0 for each adjacent creature.
    </BodyText>,
    <Flavor>
      You reap what you sow.
    </Flavor>
  ],
  constructionCost: 2,
  power: 3,
  toughness: 2,
  tags: ["extender"],
}

export const motherOfAllBloom: CreatureCard = {
  type: "creature",
  name: "Mother of All Bloom",
  color: "green",
  cost: 5,
  image: "mother-of-all-bloom",
  nodes: [
    <>
      <BodyText>
        Adjacent creatures get +3/+3 and <Keyword>Trample</Keyword>.
      </BodyText>
    </>,
    <>
      <Exhaust />
      <BodyText>
        Target creature gains <Keyword>Trample</Keyword> until end of turn.
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
  cost: 2,
  image: "composter",
  nodes: [
    <KeywordShift>
      This gets +1/+1.
    </KeywordShift>,
    <>
      <Trigger />
      <BodyText>
        Whenever a friendly creature dies, you can exhaust this card: Target creatures gets +1/+1.
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

export const naturesReclaimant: CreatureCard = {
  type: "creature",
  name: "Nature's Reclaimant",
  color: "green",
  cost: 3,
  image: "natures-reclaimant",
  nodes: [
    <>
      <Enter />
      <BodyText>
        Replace target creature with a Sapling token.
      </BodyText>
    </>,
    <Flavor>
      Nature will still be here long after we're gone. So why wait?
    </Flavor>
  ],
  constructionCost: 3,
  power: 2,
  toughness: 2,
  tags: ["interaction"],
}

export const beastOfBurden: CreatureCard = {
  type: "creature",
  name: "Beast of Burden",
  color: "green",
  cost: 3,
  image: "beast-of-burden",
  nodes: [
    <Keyword>Blocker</Keyword>,
    <Flavor>
      A helping hand for heavy days. Helping hoof?
    </Flavor>
  ],
  constructionCost: 2,
  power: 0,
  toughness: 5,
  tags: ["interaction"],
}

export const lifetender: CreatureCard = {
  type: "creature",
  name: "Lifetender",
  color: "green",
  cost: 2,
  image: "lifetender",
  nodes: [
    <BodyText>Adjacent creatures get +1/+1</BodyText>,
    <Flavor>
      We're nothing without our friends, so take my hand.
    </Flavor>
  ],
  constructionCost: 3,
  power: 1,
  toughness: 2,
  tags: ["identity"],
}

export const nightwatchman: CreatureCard = {
  type: "creature",
  name: "Nightwatchman",
  color: "green",
  cost: 4,
  image: "nightwatchman",
  nodes: [
    <Keyword>Trample</Keyword>,
    <BodyText>
      This creature gets +1/+1 for each adjacent creature.
    </BodyText>,
    <Flavor>
      The night is dark and full of horrors, luckily, Jonah is out there as well.
    </Flavor>
  ],
  constructionCost: 3,
  power: 2,
  toughness: 1,
  tags: ["consistency"],
}

export const strappingYoungLass: CreatureCard = {
  type: "creature",
  name: "Strapping Young Lass",
  color: "green",
  cost: 1,
  image: "strapping-young-lass",
  nodes: [
    <KeywordShift>
      This gets +1/+0 for each adjacent creature.
    </KeywordShift>,
    <Flavor>
      Barely outta the crib, but a farmgirl's built different. Eat your veggies, kids.
    </Flavor>
  ],
  constructionCost: 4,
  power: 1,
  toughness: 2,
  tags: ["consistency", "identity"],
}

export const seedsower: CreatureCard = {
  type: "creature",
  name: "Seedsower",
  color: "green",
  cost: 1,
  image: "seedsower",
  nodes: [
    <>
      <End />
      <BodyText>
        Target creature gets +1/+1.
      </BodyText>
    </>,
    <Flavor>
      Every forest starts with a single seed.
    </Flavor>
  ],
  constructionCost: 1,
  power: 1,
  toughness: 1,
  tags: ["starter"],
}

export const stampeder: CreatureCard = {
  type: "creature",
  name: "Stampeder",
  color: "green",
  cost: 3,
  image: "stampeder",
  nodes: [
    <Keyword>Trample</Keyword>,
    <Flavor>
      Have you ever tried stopping one of these with your bare hands?
      You're still alive, so I'm guessing no.
    </Flavor>
  ],
  constructionCost: 2,
  power: 3,
  toughness: 3,
  tags: ["roleplayer"],
}

// NOTE: do we need to mark tokens somehow extra?
export const sapling: CreatureCard = {
  type: "creature",
  name: "Sapling",
  color: "green",
  cost: 0,
  image: "sapling",
  nodes: [
    <>
      <End />
      <BodyText>
        Get +0/+1.
      </BodyText>
    </>,
    <Flavor>
      The tiniest of sprout may grow into the mightiest of oaks.
    </Flavor>
  ],
  constructionCost: 0,
  power: 0,
  toughness: 1,
  tags: ["token"],
}

export const bloom: CreatureCard = {
  type: "creature",
  name: "Bloom",
  color: "green",
  cost: 0,
  image: "bloom",
  nodes: [
    <Flavor>
      Ah, there it is, the oak.
    </Flavor>
  ],
  constructionCost: 0,
  power: undefined,
  toughness: undefined,
  tags: ["token"],
}

export const rampage: ActionCard = {
  type: "action",
  name: "Rampage",
  color: "green",
  cost: 4,
  image: "rampage",
  nodes: [
    <BodyText>
      All your creatures gain <Keyword>Trample</Keyword> until end of turn.
    </BodyText>,
    <Flavor>
      One animal? No biggie. A horde? Hm.
    </Flavor>
  ],
  constructionCost: 3,
  tags: ["pressure"],
}

export const springHarvest: ActionCard = {
  type: "action",
  name: "Spring Harvest",
  color: "green",
  cost: 1,
  image: "spring-harvest",
  nodes: [
    <BodyText>
      Return target creature you control to your hand, gain {SYMBOL_ENERGY} equal to its health.
    </BodyText>,
    <Flavor>
      With spring comes joy. Toil paying off.
    </Flavor>
  ],
  constructionCost: 3,
  tags: ["generator"],
}

export const growthSpurt: ActionCard = {
  type: "action",
  name: "Growth Spurt",
  color: "green",
  cost: 2,
  image: "growth-spurt",
  nodes: [
    <>
      <Quick />
      <BodyText>
        Target creature gets +2/+2 until end of turn.
      </BodyText>
    </>,
    <Flavor>
      Nothing at all, nothing at all, all at once.
    </Flavor>
  ],
  constructionCost: 3,
  tags: ["pressure"],
}

export const thornbite: ActionCard = {
  type: "action",
  name: "Thornbite",
  color: "green",
  cost: 2,
  image: "thornbite",
  nodes: [
    <>
      <Quick />
      <BodyText>
        Target creature you control fights target creature.
      </BodyText>
    </>,
    <Flavor>
      Don't get close.
    </Flavor>
  ],
  constructionCost: 3,
  tags: ["interaction"],
}

export const dustToDust: ActionCard = {
  type: "action",
  name: "Dust to Dust",
  color: "green",
  cost: 3,
  image: "stampeder",
  nodes: [
    <BodyText>
      Replace a creature you control with a Sapling.
      Replace a creature your opponent controls with a Sapling.
    </BodyText>,
    <Flavor>
      From bloom, to decay, to soil, to life.
    </Flavor>
  ],
  constructionCost: 3,
  tags: ["interaction"],
}

export const green = [
  earthBreaker,
  fieldhand,
  greenReaper,
  motherOfAllBloom,
  composter,
  naturesReclaimant,
  beastOfBurden,
  lifetender,
  nightwatchman,
  strappingYoungLass,
  seedsower,
  stampeder,
  sapling,
  bloom,
  rampage,
  springHarvest,
  growthSpurt,
  thornbite,
]
