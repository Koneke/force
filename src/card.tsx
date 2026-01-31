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
  rules: Rule[];
  nodes?: ReactNode[]
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
      <Rules
        rules={card.rules}
        nodes={card.nodes}
        constructionCost={card.constructionCost}
        power={card.power}
        toughness={card.toughness}
      />
    </div>
  );
}

function Rules({
  constructionCost,
  rules,
  nodes,
  power,
  toughness
}: {
  constructionCost: number;
  rules: Rule[]
  nodes?: ReactNode[] | undefined
  power: number,
  toughness: number,
}) {
  return (
    <div className={styles.rules}>
      <div className={styles.ruleTextWrapper}>
        {rules[0] && <Rule rule={rules[0]} />}
        {rules.length > 1 && rules.slice(1).map(r => (
          <>
            <Divider />
            <Rule rule={r} />
          </>
        ))}
        {nodes?.at(0) && <div className={styles.ruleText}>{nodes.at(0)}</div>}
        {nodes && nodes.length > 1 && nodes.slice(1).map(node => (
          <>
            <Divider />
            {/*<Rule rule={r} />*/}
            <div className={styles.ruleText}>{node}</div>
          </>
        ))}
      </div>
      <div className={styles.constructionCost}>{constructionCost}</div>
      <div className={styles.power}>{power} / {toughness}</div>
    </div>
  );
}

export type Rule =
  | { type: "plain"; text: string }
  | { type: "flavor"; text: string }
  | { type: "labeled"; label: string; color: string; text: string };

function Rule({ rule }: { rule: Rule }) {
  switch (rule.type) {
    case "plain":
      return <BodyText>{rule.text}</BodyText>
    case "flavor":
      return <div
        className={styles.bodyText}
        style={{
          fontStyle: "italic",
          opacity: "0.7",
          fontSize: "0.5rem",
        }}
      >
        {rule.text}
      </div>;
    case "labeled":
      return <Labeled
        label={rule.label}
        color={rule.color}
      >
        {rule.text}
      </Labeled>;
    default:
      return null;
  }
}

function Labeled({
  label,
  color,
  children,
}: {
  label: string;
  color: string;
  children: ReactNode
}) {
  return (
    <div>
      <Label color={color}>{label}</Label>
      <BodyText>{children}</BodyText>
    </div>
  );
}

export function Label({
  color,
  children,
}: {
  color: string;
  children: ReactNode
}) {
  return (
    <span className={styles.label} style={{ background: color }}>
      {children}
    </span>
  )
}

function Divider() {
  return <div className={styles.divider} />;
}

export function BodyText({
  children
} : {
  children: ReactNode
}) {
  return (
    <span className={styles.bodyText}>{children}</span>
  )
}

export function Keyword({
  children
} : {
  children: ReactNode
}) {
  return (
    <span className={styles.keyword}>{children}</span>
  )
}