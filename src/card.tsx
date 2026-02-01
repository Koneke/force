import type { ReactNode } from "react";
import styles from "./card.module.scss";
import classNames from "classnames";

export type Color = "black" | "red" | "yellow" | "green";

function toCssClass(color: Color) {
  switch (color) {
    case "black":
      return styles.cardBlack;
    case "red":
      return styles.cardRed;
    case "yellow":
      return styles.cardYellow;
    case "green":
      return styles.cardGreen;
  }
}

export type CreatureCard = {
  type: "creature";
  name: string;
  color: Color;
  cost: number;
  image: string;
  nodes: ReactNode[]
  constructionCost: number;
  power: number;
  toughness: number;
}

export function CreatureCard({ card }: { card: CreatureCard }) {
  return (
    <div className={classNames(styles.root, toCssClass(card.color))}>
      <img src={`./${card.image}.png`} className={styles.image} />
      <div className={styles.header}>
        <div className={styles.playCost}>{card.cost}</div>
        <div className={styles.name}>{card.name}</div>
      </div>
      <RulesBox
        nodes={card.nodes}
        constructionCost={card.constructionCost}
        power={card.power}
        toughness={card.toughness}
      />
    </div>
  );
}

function RulesBox({
  constructionCost,
  nodes,
  power,
  toughness
}: {
  constructionCost: number;
  nodes: ReactNode[] | undefined
  power: number,
  toughness: number,
}) {
  return (
    <div className={styles.rules}>
      <div className={styles.ruleTextWrapper}>
        {nodes?.at(0) && <span>{nodes.at(0)}</span>}
        {nodes && nodes.length > 1 && nodes.slice(1).map(node => (
          <>
            <Divider />
            <span>{node}</span>
          </>
        ))}
      </div>
      <div className={styles.constructionCost}>{constructionCost}</div>
      <div className={styles.power}>{power} / {toughness}</div>
    </div>
  );
}

function Divider() {
  return <div className={styles.divider} />;
}
