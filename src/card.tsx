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

function toPipColor(color: Color) {
  switch (color) {
    case "black":
      return "#222";
    case "red":
      return "#da1616";
    case "yellow":
      return "#c4d111";
    case "green":
      return "#158315";
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
  power: number | undefined;
  toughness: number | undefined;

  // For documentation while developing
  tags?: string[]
}

export type ActionCard = {
  type: "action";
  name: string;
  color: Color;
  cost: number;
  image: string;
  nodes: ReactNode[]
  constructionCost: number;

  // For documentation while developing
  tags?: string[]
}

export type Card =
  | CreatureCard
  | ActionCard

export function Card({ card }: { card: Card }) {
  switch (card.type) {
    case "creature": return <CreatureCard card={card} />
    case "action": return <ActionCard card={card} />
  }
}

export function ActionCard({ card }: { card: ActionCard }) {
  return (
    <BaseCard card={card}>
      <RulesBox {...card} />
    </BaseCard>
  );
}

export function CreatureCard({ card }: { card: CreatureCard }) {
  return (
    <BaseCard card={card}>
      <RulesBox {...card}>
        <PowerHealthBox {...card} />
      </RulesBox>
    </BaseCard>
  );
}

function BaseCard({
  card,
  children
}: {
  card: Card
  children: ReactNode
}) {
  return (
    <div className={classNames(styles.root, toCssClass(card.color))}>
      <img src={`./bg-${card.color}.png`} className={styles.pattern} />
      <img src={`./${card.image}.png`} className={styles.image} />
      <div className={styles.header}>
        {card.cost > 0 && (<div className={styles.playCost}>{card.cost}</div>)}
        <div className={styles.name}>{card.name}</div>
      </div>
      {children}
    </div>
  );
}

function RulesBox({
  color,
  constructionCost,
  nodes,
  tags,
  children,
}: {
  color: CreatureCard["color"];
  constructionCost: number;
  nodes: ReactNode[] | undefined
  tags?: CreatureCard["tags"]
  children?: ReactNode
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
        {tags && (
          <span className={styles.tags}>
            {tags.map(t => "#" + t).join(", ")}
          </span>
        )}
      </div>
      {constructionCost > 0 && (<div className={styles.constructionCost}>{constructionCost}</div>)}
      <div className={styles.colors}>
        <div className={styles.pip} style={(
          { "--color": toPipColor(color) }
        ) as React.CSSProperties } />
      </div>
      {children}
    </div>
  );
}

export function PowerHealthBox({
  power,
  toughness,
}: {
  power: CreatureCard["power"],
  toughness: CreatureCard["toughness"],
}) {
  return (
    <div className={styles.power}>{power ?? "?"} / {toughness ?? "?"}</div>
  )
}

function Divider() {
  return <div className={styles.divider} />;
}
